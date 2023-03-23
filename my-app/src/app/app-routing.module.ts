import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './bai42-books/books.component';
import { Bai45BookDetailComponent } from './bai45-book-detail/bai45-book-detail.component';
import { Bai47BookNewComponent } from './bai47-book-new/bai47-book-new.component';
import { Bai57FashionComponent } from './bai57-fashion/bai57-fashion.component';
import { Bai58FashionDetailComponent } from './bai58-fashion-detail/bai58-fashion-detail.component';
import { Bai59FashionNewComponent } from './bai59-fashion-new/bai59-fashion-new.component';
import { Bai60FashionUpdateComponent } from './bai60-fashion-update/bai60-fashion-update.component';
import { Bai61FashionDeleteComponent } from './bai61-fashion-delete/bai61-fashion-delete.component';

const routes: Routes = [
  { path: 'bai43', component: BooksComponent },
  { path: 'bai45', component: Bai45BookDetailComponent },
  { path: 'bai47', component: Bai47BookNewComponent },
  { path: 'bai57', component: Bai57FashionComponent },
  { path: 'bai58', component: Bai58FashionDetailComponent },
  { path: 'bai59', component: Bai59FashionNewComponent },
  { path: 'bai60', component: Bai60FashionUpdateComponent },
  { path: 'bai61', component: Bai61FashionDeleteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  BooksComponent,
  Bai45BookDetailComponent,
  Bai47BookNewComponent,
  Bai57FashionComponent,
  Bai58FashionDetailComponent,
  Bai59FashionNewComponent,
  Bai60FashionUpdateComponent,
  Bai61FashionDeleteComponent
]
