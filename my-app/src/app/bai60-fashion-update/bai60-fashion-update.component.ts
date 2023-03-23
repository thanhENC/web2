import { Component } from '@angular/core';
import { Fashion } from '../interfaces/Fashion';
import { FashionAPIService } from '../services/fashion-api.service';

@Component({
  selector: 'app-bai60-fashion-update',
  templateUrl: './bai60-fashion-update.component.html',
  styleUrls: ['./bai60-fashion-update.component.css']
})
export class Bai60FashionUpdateComponent {
  fashion = new Fashion()
  errMessage: string = ''
  fashions: any
  fashionselected = new Fashion()
  checkfashionexist: boolean = false

  constructor(private _service: FashionAPIService) {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // put fashion
  putFashion(fashionId: string) {
    if (this.validate(fashionId)) {
      this.searchFashion(fashionId) // get fashionselected
      if (this.checkfashionexist) {
        this.fashion.fashion_image = this.fashionselected.fashion_image // keep image
        this._service.putFashion(this.fashion).subscribe({
          next: (data) => { this.fashions = data, this.reset(), this.errMessage = 'Update successfully' },
          error: (err) => { this.errMessage = err },
        })
      }
      this.getFashions() // update fashions after put
    }
  }

  // search fashion
  searchFashion(fashionId: string) {
    this._service.getFashion(fashionId).subscribe({
      next: (data) => { this.fashionselected = data, this.checkfashionexist = true },
      error: (err) => { this.errMessage = 'Fashion does not exist', this.checkfashionexist = false },
    })
  }

  // get fashion
  getFashions() {
    this._service.getFashions().subscribe({
      next: (data) => { this.fashions = data },
      error: (err) => { this.errMessage = err },
    })
  }

  // reset
  reset() {
    this.fashion = new Fashion()
    this.errMessage = ''
  }

  validate(fashionId: string) {
    // check if all fields are filled
    if (this.fashion._id == '' || this.fashion.style == null || this.fashion.fashion_subject == '' || this.fashion.fashion_detail == '') {
      this.errMessage = 'Please fill all fields'
      return false
    } else {
      // check if fashionId is hex string or not
      if (!/^[0-9a-fA-F]{24}$/.test(fashionId)) {
        this.errMessage = 'Invalid fashion id'
        return false
      } else {
        this.errMessage = ''
        return true
      }
    }
  }
}
