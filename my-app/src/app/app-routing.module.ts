import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './bai42-books/books.component';
import { Bai45BookDetailComponent } from './bai45-book-detail/bai45-book-detail.component';
import { Bai47BookNewComponent } from './bai47-book-new/bai47-book-new.component';
import { Bai57FashionComponent } from './bai57-fashion/bai57-fashion.component';

const routes: Routes = [
  { path: 'bai43', component: BooksComponent },
  { path: 'bai45', component: Bai45BookDetailComponent },
  { path: 'bai47', component: Bai47BookNewComponent },
  { path: 'bai57', component: Bai57FashionComponent }
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
  Bai57FashionComponent
]
