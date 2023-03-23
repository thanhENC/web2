import { Component } from '@angular/core';
import { Fashion } from '../interfaces/Fashion';
import { FashionAPIService } from '../services/fashion-api.service';

@Component({
  selector: 'app-bai58-fashion-detail',
  templateUrl: './bai58-fashion-detail.component.html',
  styleUrls: ['./bai58-fashion-detail.component.css']
})
export class Bai58FashionDetailComponent {
  fashionId: string = ''
  fashion = new Fashion()
  errMessage: string = ''
  checkId: boolean = false

  constructor(private _service: FashionAPIService) { }

  searchFashion(fashionId: string) {
    // check if fashionId is hex string or not
    if (!/^[0-9a-fA-F]{24}$/.test(fashionId)) {
      this.invalidId()
    } else {
      this._service.getFashion(fashionId).subscribe({
        next: (data) => { this.fashion = data },
        error: (err) => { this.errMessage = err },
      })
      this.checkId = true
    }
  }

  invalidId() {
    this.errMessage = 'Invalid fashion id'
    this.checkId = false
  }

  reset() {
    this.fashionId = ''
    this.errMessage = ''
    this.checkId = false
  }
}
