import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bai29ExternalApiNganHangDongAComponent } from './bai29-external-api-ngan-hang-dong-a/bai29-external-api-ngan-hang-dong-a.component';
import { Bai30FakeProductComponent } from './bai30-fake-product/bai30-fake-product.component';

const routes: Routes = [
  { path: 'bai 29', component: Bai29ExternalApiNganHangDongAComponent},
  { path: 'bai 30', component: Bai30FakeProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const RoutingComponent = [
  Bai29ExternalApiNganHangDongAComponent,
  Bai30FakeProductComponent
]
