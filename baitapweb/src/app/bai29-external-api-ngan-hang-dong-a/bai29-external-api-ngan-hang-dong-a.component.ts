import { Component } from '@angular/core';
import { DongABankService } from '../services/dong-abank.service';

@Component({
  selector: 'app-bai29-external-api-ngan-hang-dong-a',
  templateUrl: './bai29-external-api-ngan-hang-dong-a.component.html',
  styleUrls: ['./bai29-external-api-ngan-hang-dong-a.component.css']
})
export class Bai29ExternalApiNganHangDongAComponent {
  data: any
  errorMessage:string=''
  constructor(_service:DongABankService){
    _service.getDongABankData().subscribe({
      next:(data)=>{
        this.data = data
      },
      error:(err)=>{
        this.errorMessage=err
      }
    })
  }
}
