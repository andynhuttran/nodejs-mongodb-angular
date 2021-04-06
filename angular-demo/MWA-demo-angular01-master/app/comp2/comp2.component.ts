import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp2',
  template: `
    <h1>Component 2:</h1>
    <p (click)="setMessage1()">Click here to see message1: {{message1}}</p>
    <p (click)="setMessage2('Text for Message2 onClick!')">Click here to see message2: {{message2}}</p>
    <p (click)="setMessage3($event)">Click here to see Event info ($event.target.tagName): {{message3}}</p>
    <p class="red">Red Paragraph 1</p>
  `,
  styles: ['p.red { color: red; }'],
  encapsulation: ViewEncapsulation.Emulated
})
export class Comp2Component {
  public message1;
  public message2;
  public message3;

  setMessage1() {
    this.message1 = "Text for Message1 onClick!";
  }

  setMessage2(text) {
    this.message2 = text;
  }

  setMessage3(evt) {
    console.log(evt);
    this.message3 = evt.srcElement.tagName;
  }

  getTrue() {
    return true;
  }

}
