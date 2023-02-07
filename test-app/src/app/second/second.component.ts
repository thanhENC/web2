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
  `,
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  product = "Tiger"

  test(){
    return "Corona Extra"
  }
}
