import { Component } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: '[app-group-customer2]',
  templateUrl: './group-customer2.component.html',
  styleUrls: ['./group-customer2.component.css']
})
export class GroupCustomer2Component {
  database: any

  constructor(private _customerService:CustomerService) {
    this.database = _customerService.getAllCustomers()
  }
}
