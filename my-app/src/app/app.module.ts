import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './bai42-books/books.component';
import { Bai45BookDetailComponent } from './bai45-book-detail/bai45-book-detail.component';
import { Bai47BookNewComponent } from './bai47-book-new/bai47-book-new.component';
import { Bai57FashionComponent } from './bai57-fashion/bai57-fashion.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    BooksComponent,
    Bai45BookDetailComponent,
    Bai47BookNewComponent,
    Bai57FashionComponent
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
