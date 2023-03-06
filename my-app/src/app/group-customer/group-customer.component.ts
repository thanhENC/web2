import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: '[app-group-customer]',
  templateUrl: './group-customer.component.html',
  styleUrls: ['./group-customer.component.css']
})
export class GroupCustomerComponent {
  // database = [
  //   {
  //     "CustomerTypeId": 1,
  //     "CustomerTypeName": "VIP",
  //     "Customers": [
  //       {
  //         "Id": "Cus123",
  //         "Name": "Obama",
  //         "Email": "obama@gmail.com",
  //         "Age": 67,
  //         "Image": "assets/images/avt-obama.svg"
  //       },
  //       {
  //         "Id": "Cus456",
  //         "Name": "Trump",
  //         "Email": "trump@gmail.com",
  //         "Age": 72,
  //         "Image": "assets/images/avt-trump.svg"
  //       }
  //       ,
  //       {
  //         "Id": "Cus789",
  //         "Name": "Putin",
  //         "Email": "putin@gmail.com",
  //         "Age": 77,
  //         "Image": "assets/images/avt-putin.svg"
  //       }]
  //   },
  //   {
  //     "CustomerTypeId": 2,
  //     "CustomerTypeName": "Normal",
  //     "Customers": [
  //       {
  //         "Id": "Cus000",
  //         "Name": "Hồ Cẩm Đào",
  //         "Email": "hodao@gmail.com",
  //         "Age": 16,
  //         "Image": "assets/images/avt-hodao.svg"
  //       },
  //       {
  //         "Id": "Cus111",
  //         "Name": "Tap Can Binh",
  //         "Email": "binhbinh@gmail.com",
  //         "Age": 67,
  //         "Image": "assets/images/avt-binhbinh.svg"
  //       },
  //     ]
  //   },
  // ]

  database: any

  constructor(private _customerService:CustomerService) {
    this.database = _customerService.getAllCustomers()
  }
}
