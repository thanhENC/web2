import { Component } from '@angular/core';
import { Fashion } from '../interfaces/Fashion';
import { FashionAPIService } from '../services/fashion-api.service';

@Component({
  selector: 'app-bai59-fashion-new',
  templateUrl: './bai59-fashion-new.component.html',
  styleUrls: ['./bai59-fashion-new.component.css']
})
export class Bai59FashionNewComponent {
  fashion = new Fashion()
  errMessage: string = ''

  constructor(private _service: FashionAPIService) { }

  public setFashion(f: Fashion) {
    this.fashion = f
  }

  onFileSelected(event: any, fashion: Fashion) {
    let me = this;
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      fashion.fashion_image = reader.result!.toString()
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    }
  }

  postFashion() {
    if (this.fashion.style == '' || this.fashion.fashion_subject == '' || this.fashion.fashion_detail == '') {
      this.invalidFashion()
    } else {
      this._service.postFashion(this.fashion).subscribe({
        next: (data) => { this.fashion = data, this.reset() },
        error: (err) => { this.errMessage = err },
      })
      // this.reset()
    }
  }

  invalidFashion() {
    this.errMessage = 'Invalid fashion. Full information is required'
  }

  reset() {
    this.fashion = new Fashion()
    this.errMessage = ''
  }
}
