import { Component } from '@angular/core';
import { IBook } from '../interfaces/Book';
import { BookAPIService } from '../services/book-api.service';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.css']
})
export class FilterPriceComponent {
  minprice: number = 0;
  maxprice: number = 0;
  books: any;
  errMessage: string = '';
  constructor(private _service: BookAPIService) { }

  getBooksInRange(minprice: number, maxprice: number) {
    this._service.getBooksInRange(minprice, maxprice).subscribe({
      next: (data) => { this.books = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
