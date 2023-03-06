import { Component } from '@angular/core';

@Component({
  // selector: 'app-second',
  // selector: ".app-second",
  selector: "[app-second]",
  // templateUrl: './second.component.html',
  template: `
    <h2>Product name: {{product}}</h2>
    <h2>{{product.toUpperCase()}}</h2>
    <h3>{{test()}}</h3>
    <hr>
    <div>
      Enter product name: <input type="text" [(ngModel)]="productName">
      <p>Product Name: {{productName}}</p>
      <button (click)="setDefault()">Set Default</button> <!-- (click) to set default value -->
    </div>

    <hr>
    <button (click)="changeView()")>Change View</button>
    <div *ngIf="display; else view2">
      <h3>View 1</h3>
    </div>

    <ng-template #view2>
      <h5>View 2</h5>
    </ng-template>
  `,
  styleUrls: ['./second.component.css']
})

export class SecondComponent {
  product = "Tiger"
  productName: any
  display = true

  //function setDefault()
  setDefault(): void{
    this.product, this.productName = "Sapporo"
  }

  test(){
    return "Corona Extra"
  }

  changeView(){
    this.display = !this.display
  }
}
