import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { GroupCustomerComponent } from './group-customer/group-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { GroupCustomer2Component } from './group-customer2/group-customer2.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    GroupCustomerComponent,
    ListCustomerComponent,
    GroupCustomer2Component,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
