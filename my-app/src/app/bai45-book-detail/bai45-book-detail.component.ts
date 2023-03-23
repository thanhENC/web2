import { Component } from '@angular/core';
import { BookAPIService } from '../services/book-api.service';

@Component({
  selector: 'app-bai45-book-detail',
  templateUrl: './bai45-book-detail.component.html',
  styleUrls: ['./bai45-book-detail.component.css']
})
export class Bai45BookDetailComponent {
  book: any;
  errMessage: string = '';
  constructor(private _service: BookAPIService) { }
  searchBook(bookId: string) {
    this._service.getBook(bookId).subscribe({
      next: (data) => { this.book = data },
      error: (err) => { this.errMessage = err
                        this.book = {
                          'BookId': 'Not Found',
                          'BookName': 'Not Found',
                          'Price': 'Not Found',
                          'Image': 'Not Found'
                        }}
    })
  }
}
