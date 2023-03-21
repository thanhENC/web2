import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bai29ExternalApiNganHangDongAComponent } from './bai29-external-api-ngan-hang-dong-a/bai29-external-api-ngan-hang-dong-a.component';
import { Bai30FakeProductComponent } from './bai30-fake-product/bai30-fake-product.component';
import { Bai31FakeProduct2Component } from './bai31-fake-product2/bai31-fake-product2.component';
import { Bai32CoindeskAPIComponent } from './bai32-coindesk-api/bai32-coindesk-api.component';

const routes: Routes = [
  { path: 'bai 29', component: Bai29ExternalApiNganHangDongAComponent},
  { path: 'bai 30', component: Bai30FakeProductComponent},
  { path: 'bai 31', component: Bai31FakeProduct2Component},
  { path: 'bai 32', component: Bai32CoindeskAPIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const RoutingComponent = [
  Bai29ExternalApiNganHangDongAComponent,
  Bai30FakeProductComponent,
  Bai31FakeProduct2Component,
  Bai32CoindeskAPIComponent
]
