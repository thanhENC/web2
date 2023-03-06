import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second2',
  templateUrl: './second2.component.html',
  styleUrls: ['./second2.component.css']
})
export class Second2Component {

  // @Input() public parentData: any
  @Input("parentData") public data: any

  @Output() public childEvent = new EventEmitter()

  products = [
    {
      name: "Heineken",
      price: 19000
    },
    {
      name: "Sapporo",
      price: 20000
    },
    {
      name: "Tiger",
      price: 21000
    }
  ]

  sendData(){
    let productInfo = {
      "id": 1,
      "name": "Corona",
      "price": 20000
    }
    this.childEvent.emit(productInfo)
  }
}
