import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SecondComponent } from './second/second.component';
import { Second2Component } from './second2/second2.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { CustomerComponent } from './customer/customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { GroupCustomer2Component } from './group-customer2/group-customer2.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponent,
    Second2Component,
    ListComponent,
    DetailComponent,
    CustomerComponent,
    ListCustomerComponent,
    GroupCustomer2Component,
    // AppRootingComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpClientModule // <-- import the HttpClientModule before using it in example.service.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
