import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[makeBigger]'    
})
export class BiggerDirective {

  @Input() makeBigger : number;
  constructor(private element: ElementRef,
            private renderer2: Renderer2
    ) {
    this.makeBigger = 2;
    // this.element.nativeElement.style.fontSize = "18px";
    this.renderer2.setStyle(this.element.nativeElement, "font-size", "18px");
  }

  @HostListener('dblclick', ['$event'])
  onClick(event){
    let newSize = this.makeBigger + parseInt(this.element.nativeElement.style.fontSize) + "px";
    // this.element.nativeElement.style.fontSize = newSize;
    // this.element.nativeElement.innerHTML = "Size is " + newSize;
    this.renderer2.setStyle(this.element.nativeElement, "font-size", newSize);
  }



}
