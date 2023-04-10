import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './bai42-43-books/books.component';
import { Bai45BookDetailComponent } from './bai44-45-book-detail/bai45-book-detail.component';
import { Bai47BookNewComponent } from './bai47-book-new/bai47-book-new.component';
import { Bai57FashionComponent } from './bai57-fashion/bai57-fashion.component';
import { Bai58FashionDetailComponent } from './bai58-fashion-detail/bai58-fashion-detail.component';
import { Bai59FashionNewComponent } from './bai59-fashion-new/bai59-fashion-new.component';
import { Bai60FashionUpdateComponent } from './bai60-fashion-update/bai60-fashion-update.component';
import { Bai61FashionDeleteComponent } from './bai61-fashion-delete/bai61-fashion-delete.component';
import { FilterPriceComponent } from './filter-price/filter-price.component';
import { Bai47PostManyBooksComponent } from './bai47-post-many-books/bai47-post-many-books.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    BooksComponent,
    Bai45BookDetailComponent,
    Bai47BookNewComponent,
    Bai57FashionComponent,
    Bai58FashionDetailComponent,
    Bai59FashionNewComponent,
    Bai60FashionUpdateComponent,
    Bai61FashionDeleteComponent,
    FilterPriceComponent,
    Bai47PostManyBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
