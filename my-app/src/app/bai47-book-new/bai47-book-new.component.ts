import { Component } from '@angular/core';
import { Book } from '../interfaces/Book';
import { BookAPIService } from '../services/book-api.service';

@Component({
  selector: 'app-bai47-book-new',
  templateUrl: './bai47-book-new.component.html',
  styleUrls: ['./bai47-book-new.component.css']
})
export class Bai47BookNewComponent {
  book= new Book()
  books:any
  errMessage: string = ''
  constructor(private _service: BookAPIService) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
  postBook(){
    this._service.postBook(this.book).subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
