import { Component } from '@angular/core';

@Component({
  selector: '[app-customer]',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  customer={
    "Id": "Cus123",
    "Name": "Obama",
    "Email": "obama@gmail.com",
    "Age": 55,
    "Image": "assets/images/avt-obama.svg",
  }
}
