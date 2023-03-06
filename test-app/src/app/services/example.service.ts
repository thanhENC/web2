import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IProduct } from '../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  url = "../assets/data/products.json"

  constructor(private _http:HttpClient) { }

  getAllProducts() {
    return [
      {"id": 1, "name": "Tiger", "price": 18000},
      {"id": 2, "name": "Heineken", "price": 20000},
      {"id": 3, "name": "Sapporo", "price": 25000},
    ]
  }

  getAllProducts_2(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.url);
  }
}
