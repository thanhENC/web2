import { Component } from '@angular/core';
import { ListPublicAPIsService } from '../services/list-public-apis.service';

@Component({
  selector: 'app-bai33-list-public-apis',
  templateUrl: './bai33-list-public-apis.component.html',
  styleUrls: ['./bai33-list-public-apis.component.css']
})
export class Bai33ListPublicAPIsComponent {
  data:any
  errMessage:string=''
  constructor(_service: ListPublicAPIsService){
    _service.getListPublicAPIs().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  selectedAPI:any
  showDetail(api:any){
    this.selectedAPI=api
  }
}
