import { Component } from '@angular/core';
import { FashionAPIService } from '../services/fashion-api.service';

@Component({
  selector: 'app-bai61-fashion-delete',
  templateUrl: './bai61-fashion-delete.component.html',
  styleUrls: ['./bai61-fashion-delete.component.css']
})
export class Bai61FashionDeleteComponent {
  fashions: any
  fashionId: string = ''
  errMessage: string = ''

  constructor(private _service: FashionAPIService) {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // delete fashion
  deleteFashion(fashionId: string) {
    if (this.validate(fashionId)) {
      this._service.deleteFashion(fashionId).subscribe({
        next: (data) => {
          this.fashions = data,
            this.errMessage = 'Delete successfully',
            this.reset(),
            this.getFashions()
        },
        error: (err) => { this.errMessage = err },
      })
    }
  }

  // get fashions
  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // reset
  reset() {
    this.fashionId = ''
    this.errMessage = ''
  }

  // validate
  validate(fashionId: string) {
    if (fashionId == '') {
      this.errMessage = 'Please enter fashion id'
      return false
    } else
      // check if fashionId is hex string or not
      if (!/^[0-9a-fA-F]{24}$/.test(fashionId)) {
        this.errMessage = 'Fashion id is not hex string'
        return false
      }
      else {
        this.errMessage = ''
        return true
      }
  }
}
