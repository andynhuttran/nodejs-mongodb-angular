import { BuiltinTypeName } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'counter',
  template: `
    <div>    

      <span><button (click)="changeCounter(-1)">-</button></span>
      
      <span>{{counterValue}}</span>
      
      <span><button (click)="changeCounter(1)">+</button></span>

      <span><button (click)="reset()" #btn>Reset</button></span>

    <div>
  `,
  styles: [
  ]
})
export class CounterComponent implements OnInit {

  @Input("startWith") counterValue : number = 0;

  @Output() changeCounterEvent = new EventEmitter<number>();
  @Output() resetEvent = new EventEmitter<string>();

  @ViewChild('btn', {static: true}) btn;

  originalValue: number = 0;

  constructor(){

  }

  changeCounter(inc: number){
    this.counterValue += inc;
    this.changeCounterEvent.emit(this.counterValue);
    this.disableButton();
  }

  ngOnInit(){
    this.originalValue = this.counterValue; //back up
    this.disableButton();    
  }

  reset(){
    this.counterValue = this.originalValue;
    this.resetEvent.emit("Reset to " + this.counterValue);
    this.disableButton();
  }


  disableButton(){
    this.btn.nativeElement.disabled = (this.counterValue == this.originalValue);
  }

}
