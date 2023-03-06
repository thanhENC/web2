import { Component, OnInit } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{ //khoi chay ngay khi load len

  products: any

  constructor(private _s: ExampleService) {}

  ngOnInit(): void {
    // this.products = this._s.getAllProducts();
    this._s.getAllProducts_2().subscribe(
      {
        next: (d) => this.products = d
      }
    );
  }
}
