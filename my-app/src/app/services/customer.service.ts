import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor() { }

  database = [
    {
      "CustomerTypeId": 1,
      "CustomerTypeName": "VIP",
      "Customers": [
        {
          "Id": "Cus123",
          "Name": "Obama",
          "Email": "obama@gmail.com",
          "Age": 67,
          "Image": "assets/images/avt-obama.svg"
        },
        {
          "Id": "Cus456",
          "Name": "Trump",
          "Email": "trump@gmail.com",
          "Age": 72,
          "Image": "assets/images/avt-trump.svg"
        }
        ,
        {
          "Id": "Cus789",
          "Name": "Putin",
          "Email": "putin@gmail.com",
          "Age": 77,
          "Image": "assets/images/avt-putin.svg"
        }]
    },
    {
      "CustomerTypeId": 2,
      "CustomerTypeName": "Normal",
      "Customers": [
        {
          "Id": "Cus000",
          "Name": "Hồ Cẩm Đào",
          "Email": "hodao@gmail.com",
          "Age": 16,
          "Image": "assets/images/avt-hodao.svg"
        },
        {
          "Id": "Cus111",
          "Name": "Tap Can Binh",
          "Email": "binhbinh@gmail.com",
          "Age": 67,
          "Image": "assets/images/avt-binhbinh.svg"
        },
      ]
    },
  ]
  
  getAllCustomers(){
    return this.database
  }
}
