import { Component } from '@angular/core';

@Component({
  selector: '[app-binding-property-component]',
  templateUrl: './binding-property-component.component.html',
  styleUrls: ['./binding-property-component.component.css']
})

export class BindingPropertyComponentComponent {
  public name:string="Đinh Văn An"
  public email:string="andv20411@st.uel.edu.vn"
  public nameid:string="nameid"
  public emailid:string="emailid"
  public isdisabled:boolean=false

  onClick(event: any): void {
    this.isdisabled = !this.isdisabled
  }
}
