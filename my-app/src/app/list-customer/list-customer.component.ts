import { Component } from '@angular/core';

@Component({
  selector: '[app-list-customer]',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent {
  customers=[
    {
      "Id":"Cus123",
      "Name":"Obama",
      "Email":"obama@gmail.com",
      "Age":67,
      "Image":"assets/images/avt-obama.svg"
    },
    {
      "Id":"Cus456",
      "Name":"Trump",
      "Email":"trump@gmail.com",
      "Age":72,
      "Image":"assets/images/avt-trump.svg"
    }
    ,
    {
      "Id":"Cus789",
      "Name":"Putin",
      "Email":"putin@gmail.com",
      "Age":77,
      "Image":"assets/images/avt-putin.svg"
    }
  ]

}
