import { Component } from '@angular/core';

@Component({
  selector: '[app-binding-two-way-component]',
  templateUrl: './binding-two-way-component.component.html',
  styleUrls: ['./binding-two-way-component.component.css']
})
export class BindingTwoWayComponentComponent {
  public name:string=''
  public address:string=''
  public email:string='username@abc.xyz'
  public phoneNo:string=''
  setDefaultAddress(){
    this.address='13 đường Hùng Vương'
  }
}
