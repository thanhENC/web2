import { Component } from '@angular/core';
import { CoindeskService } from '../services/coindesk.service';

@Component({
  selector: 'app-bai32-coindesk-api',
  templateUrl: './bai32-coindesk-api.component.html',
  styleUrls: ['./bai32-coindesk-api.component.css']
})
export class Bai32CoindeskAPIComponent {
  data:any
  errMessage:string=''
  constructor(_service: CoindeskService){
    _service.getCoindeskData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
