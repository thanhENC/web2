import { Component } from '@angular/core';
import { FakeProductService } from '../services/fake-product.service';

@Component({
  selector: 'app-bai31-fake-product2',
  templateUrl: './bai31-fake-product2.component.html',
  styleUrls: ['./bai31-fake-product2.component.css']
})
export class Bai31FakeProduct2Component {
  data:any
  errMessage:string=''
  constructor(_service: FakeProductService){
    _service.getFakeProductData().subscribe({
      next:(data)=>{this.data=data},
      error:(err)=>{this.errMessage=err}
    })
  }
}
