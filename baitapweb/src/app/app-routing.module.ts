import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Bai29ExternalApiNganHangDongAComponent } from './bai29-external-api-ngan-hang-dong-a/bai29-external-api-ngan-hang-dong-a.component';
import { Bai30FakeProductComponent } from './bai30-fake-product/bai30-fake-product.component';
import { Bai31FakeProduct2Component } from './bai31-fake-product2/bai31-fake-product2.component';
import { Bai32CoindeskAPIComponent } from './bai32-coindesk-api/bai32-coindesk-api.component';
import { Bai33ListPublicAPIsComponent } from './bai33-list-public-apis/bai33-list-public-apis.component';
import { Bai34PredictGenderComponent } from './bai34-predict-gender/bai34-predict-gender.component';
import { Bai35UsDataComponent } from './bai35-us-data/bai35-us-data.component';
import { Bai36RandomDogImageComponent } from './bai36-random-dog-image/bai36-random-dog-image.component';

const routes: Routes = [
  { path: 'bai 29', component: Bai29ExternalApiNganHangDongAComponent},
  { path: 'bai 30', component: Bai30FakeProductComponent},
  { path: 'bai 31', component: Bai31FakeProduct2Component},
  { path: 'bai 32', component: Bai32CoindeskAPIComponent},
  { path: 'bai 33', component: Bai33ListPublicAPIsComponent},
  { path: 'bai 34', component: Bai34PredictGenderComponent},
  { path: 'bai 35', component: Bai35UsDataComponent},
  { path: 'bai 36', component: Bai36RandomDogImageComponent}
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
  Bai32CoindeskAPIComponent,
  Bai33ListPublicAPIsComponent,
  Bai34PredictGenderComponent,
  Bai35UsDataComponent,
  Bai36RandomDogImageComponent
]
