import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <p>------------1. Directive hidden [isVisiable]-------------------</p>
      <button (click)="clickToHide()" #btn></button>
      <p [isVisiable]="visiable">Hello</p>
    </div>

    <div>
      <p>------------2. Directive resize [makeBigger]-------------------</p>      
      <p [makeBigger]="6">Click to get bigger</p>
    </div>

    <div>
      <p>------------3. Pipe (repeat)-------------------</p>      
      {{name | multi:5}}
    </div>
  `
})
export class AppComponent implements OnInit {
  visiable : boolean;
  @ViewChild('btn', {static: true}) btn : ElementRef;  

  name: string = "abc";

  ngOnInit(): void {
    this.visiable = true;
    this.setButtonLabel(this.visiable);
  }

  clickToHide(){
    this.visiable = !this.visiable;
    this.setButtonLabel(this.visiable);
  }

  setButtonLabel(status: boolean){
    this.btn.nativeElement.innerHTML = status?"Click to hide":"Click to show";
  }

}
