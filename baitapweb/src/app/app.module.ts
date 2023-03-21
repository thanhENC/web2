import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bai29ExternalApiNganHangDongAComponent } from './bai29-external-api-ngan-hang-dong-a/bai29-external-api-ngan-hang-dong-a.component';
import { Bai30FakeProductComponent } from './bai30-fake-product/bai30-fake-product.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponent,
    Bai29ExternalApiNganHangDongAComponent,
    Bai30FakeProductComponent
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
