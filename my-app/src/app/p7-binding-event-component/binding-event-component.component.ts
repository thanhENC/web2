import { Component } from '@angular/core';

@Component({
  selector: '[app-binding-event-component]',
  templateUrl: './binding-event-component.component.html',
  styleUrls: ['./binding-event-component.component.css']
})
export class BindingEventComponentComponent {
  public result: any
  onClick(event: any){
    alert(event.pointerId)
  }
  onSubmit(value: string){
    alert(value)
  }
  checkValue(value: any){
    return !isNaN(parseFloat(value))
  }
  calSum(value1: any, value2: any){
    if (this.checkValue(value1) && this.checkValue(value2))
    {
      // alert(parseFloat(value1) + parseFloat(value2))
      this.result = parseFloat(value1) + parseFloat(value2)
    }
    else
    {
      // alert('Khong the tinh.')
      this.result = 'Khong the tinh'
    }
  }

  calMinus(value1: any, value2: any){
    if (this.checkValue(value1) && this.checkValue(value2))
    {
      // alert(parseFloat(value1) + parseFloat(value2))
      this.result = parseFloat(value1) - parseFloat(value2)
    }
    else
    {
      // alert('Khong the tinh.')
      this.result = 'Khong the tinh'
    }
  }

  calMulti(value1: any, value2: any){
    if (this.checkValue(value1) && this.checkValue(value2))
    {
      // alert(parseFloat(value1) + parseFloat(value2))
      this.result = parseFloat(value1) * parseFloat(value2)
    }
    else
    {
      // alert('Khong the tinh.')
      this.result = 'Khong the tinh'
    }
  }

  calDiv(value1: any, value2: any){
    if (this.checkValue(value1) && this.checkValue(value2) && parseFloat(value2)!=0)
    {
      // alert(parseFloat(value1) + parseFloat(value2))
      this.result = parseFloat(value1) / parseFloat(value2)
    }
    else
    {
      // alert('Khong the tinh.')
      this.result = 'Khong the tinh'
    }
  }

  reset(a: any, b: any){
    a.value = '';
    b.value = '';
  }
}
