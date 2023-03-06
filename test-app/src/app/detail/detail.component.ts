import { Component } from '@angular/core';
import { ExampleService } from '../services/example.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {

  products: any

  constructor(private _s: ExampleService) {}

  showDetail() {
    this.products = this._s.getAllProducts();
  }
}
