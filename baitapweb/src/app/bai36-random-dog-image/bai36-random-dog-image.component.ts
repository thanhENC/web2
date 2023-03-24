import { Component } from '@angular/core';
import { DogImage } from '../interfaces/DogImage';
import { RandomDogService } from '../services/random-dog.service';

@Component({
  selector: 'app-bai36-random-dog-image',
  templateUrl: './bai36-random-dog-image.component.html',
  styleUrls: ['./bai36-random-dog-image.component.css']
})
export class Bai36RandomDogImageComponent {
  dogimage = new DogImage()
  errMessage: string = ''

  constructor(private _service: RandomDogService){
    this.getRandomDog()
  }

  getRandomDog() {
    this._service.getRandomDog().subscribe({
      next: (data) => { this.dogimage = data },
      error: (err) => { this.errMessage = err }
    })
  }
}
