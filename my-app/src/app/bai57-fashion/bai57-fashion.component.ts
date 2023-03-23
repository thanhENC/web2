import { Component } from '@angular/core';
import { FashionAPIService } from '../services/fashion-api.service';

@Component({
  selector: 'app-bai57-fashion',
  templateUrl: './bai57-fashion.component.html',
  styleUrls: ['./bai57-fashion.component.css']
})
export class Bai57FashionComponent {
  fashions: any;
  errMessage: string = ''
  constructor(public _service: FashionAPIService) {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
