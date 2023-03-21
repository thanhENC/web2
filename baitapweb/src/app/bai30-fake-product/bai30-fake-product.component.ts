import { Component } from '@angular/core';
import { FakeProductService } from '../services/fake-product.service';

@Component({
  selector: 'app-bai30-fake-product',
  templateUrl: './bai30-fake-product.component.html',
  styleUrls: ['./bai30-fake-product.component.css']
})
export class Bai30FakeProductComponent {
  data:any
  errMessage:string=''
  constructor(_service: FakeProductService){
    _service.getFakeProductData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
