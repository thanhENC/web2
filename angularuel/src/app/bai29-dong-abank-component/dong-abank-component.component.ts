import { Component, OnInit } from '@angular/core';
import { DongABankServiceService } from '../services/dong-abank-service.service';

@Component({
  selector: 'app-dong-abank-component',
  templateUrl: './dong-abank-component.component.html',
  styleUrls: ['./dong-abank-component.component.css']
})
export class DongABankComponentComponent implements OnInit{
  data: any;
  errMessage: string = '';
  constructor(_service: DongABankServiceService) {
    _service.getDongABankData().subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        this.errMessage = err;
      },
    });
  }

  ngOnInit(): void {}
}
