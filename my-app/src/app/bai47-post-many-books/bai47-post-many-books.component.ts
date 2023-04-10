import { Component } from '@angular/core';
import { BookAPIService } from '../services/book-api.service';
import { Book } from '../interfaces/Book';

@Component({
  selector: 'app-bai47-post-many-books',
  templateUrl: './bai47-post-many-books.component.html',
  styleUrls: ['./bai47-post-many-books.component.css']
})
export class Bai47PostManyBooksComponent {
  book = new Book() // New book infomation form
  books: any // all books in database
  newBooks: Array<Book> = [] // books in waiting list
  errMessage: string = ''
  constructor(private _service: BookAPIService) {
    this._service.getBooks().subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }

  addBookToWaitingList(book: Book) {
    this.newBooks.push(book)
    this.book = new Book()
    console.log(this.newBooks)
  }

  postBook() {
    this._service.postBook(this.newBooks).subscribe({
      next: (data) => { this.books = data, this.newBooks = [] },
      error: (err) => { this.errMessage = err }
    })
  }
}
