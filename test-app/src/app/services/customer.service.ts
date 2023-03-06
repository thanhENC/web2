import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  database = [
    {
      "CustomerTypeId": 1,
      "CustomerTypeName": "VIP",
      "Customer": [
        {
          "Id": "Cus123",
          "Name": "Obama",
          "Email": "obama@gmail.com",
          "Age": 55,
          "Image": "assets/images/avt-obama.svg",
        },
        {
          "Id": "Cus124",
          "Name": "Trump",
          "Email": "trump@gmail.com",
          "Age": 70,
          "Image": "assets/images/avt-trump.svg",
        },
      ]
    },
    {
      "CustomerTypeId": 2,
      "CustomerTypeName": "Normal",
      "Customer": [
        {
          "Id": "Cus125",
          "Name": "Obamaa",
          "Email": "obamaa@gmail.com",
          "Age": 55,
          "Image": "assets/images/avt-obama.svg",
        },
        {
          "Id": "Cus126",
          "Name": "Trumpp",
          "Email": "trumpp@gmail.com",
          "Age": 70,
          "Image": "assets/images/avt-trump.svg",
        },
      ]
    }
  ]

  constructor() {  }

  getAllCustomers(){
    return this.database;
  }
}
