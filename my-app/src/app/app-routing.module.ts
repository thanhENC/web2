import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { GroupCustomerComponent } from './group-customer/group-customer.component';
import { GroupCustomer2Component } from './group-customer2/group-customer2.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';

const routes: Routes = [
  {path:"customer", component:CustomerComponent},
  {path:"list-customer", component:ListCustomerComponent},
  {path:"group-customer", component:GroupCustomerComponent},
  {path:"group-customer2", component:GroupCustomer2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const RoutingComponent=[
  CustomerComponent,
  ListCustomerComponent,
  GroupCustomerComponent,
  GroupCustomer2Component
]
