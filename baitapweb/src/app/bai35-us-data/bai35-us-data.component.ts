import { Component } from '@angular/core';
import { USData } from '../interfaces/USData';
import { UsDataService } from '../services/us-data.service';

@Component({
  selector: 'app-bai35-us-data',
  templateUrl: './bai35-us-data.component.html',
  styleUrls: ['./bai35-us-data.component.css']
})
export class Bai35UsDataComponent {
  data: any
  errMessage: string = ''

  constructor(private _service: UsDataService) {
    this._service.getUSData().subscribe({
      next: (data) => { this.data = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
