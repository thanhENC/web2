import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DongABankComponentComponent } from './bai29-dong-abank-component/dong-abank-component.component';

const routes: Routes = [
  { path: 'bai 29', component: DongABankComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  DongABankComponentComponent
]
