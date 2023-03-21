import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai29ExternalApiNganHangDongAComponent } from './bai29-external-api-ngan-hang-dong-a/bai29-external-api-ngan-hang-dong-a.component';
import { Bai30FakeProductComponent } from './bai30-fake-product/bai30-fake-product.component';
import { Bai31FakeProduct2Component } from './bai31-fake-product2/bai31-fake-product2.component';
import { Bai32CoindeskAPIComponent } from './bai32-coindesk-api/bai32-coindesk-api.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    Bai29ExternalApiNganHangDongAComponent,
    Bai30FakeProductComponent,
    Bai31FakeProduct2Component,
    Bai32CoindeskAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
