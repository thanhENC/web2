import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { GroupCustomerComponent } from './group-customer/group-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { GroupCustomer2Component } from './group-customer2/group-customer2.component';
import { MyComponentComponent } from './p3-my-component/my-component.component';
import { BindingPropertyComponentComponent } from './p4-binding-property-component/binding-property-component.component';
import { BindingClassComponentComponent } from './p5-binding-class-component/binding-class-component.component';
import { BindingStyleComponentComponent } from './p6-binding-style-component/binding-style-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    GroupCustomerComponent,
    ListCustomerComponent,
    GroupCustomer2Component,
    RoutingComponent,
    MyComponentComponent,
    BindingPropertyComponentComponent,
    BindingClassComponentComponent,
    BindingStyleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
