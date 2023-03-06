import { Component } from '@angular/core';

@Component({
  selector: '[app-customer]',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  public keepOriginalOrder(a: any, b: any): any {
    return a;
  }
  customer={
    'Id':'Cus123',
    'Name':'Obama',
    'Email':'obama@gmail.com',
    'Age':67,
    'Image':'assets/images/avt-obama.svg',
  }
}
