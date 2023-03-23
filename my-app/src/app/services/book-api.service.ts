import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, retry, throwError } from 'rxjs';
import { IBook } from '../interfaces/Book';

@Injectable({
  providedIn: 'root'
})
export class BookAPIService {

  constructor(private _http: HttpClient) { }

  // get all books
  getBooks(): Observable<any>{
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    )

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    }

    return this._http.get<any>("/books", requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError)
    )
  }

  // get book by id - bai 45
  getBook(bookId:string): Observable<any>{
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain;charset=utf-8'
    )

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    }

    return this._http.get<any>("/books/"+bookId, requestOptions).pipe(
      map((res) => JSON.parse(res) as IBook),
      retry(3),
      catchError(this.handleError)
    )
  }

  // post book - bai 47
  postBook(aBook:any): Observable<any>{
    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/json;charset=utf-8'
    )

    const requestOptions: Object = {
      headers: headers,
      responseType: 'text',
    }

    return this._http.post<any>("/books", JSON.stringify(aBook), requestOptions).pipe(
      map((res) => JSON.parse(res) as Array<IBook>),
      retry(3),
      catchError(this.handleError)
    )
  }

  // handle error
  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.message))
  }
}
