import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[isVisiable]'
})
export class HiddenDirective implements OnChanges {

  @Input() isVisiable: boolean;
  constructor(private element: ElementRef,
            private renderer2: Renderer2
    ) { 

    }
  ngOnChanges(changes: SimpleChanges): void {    
    if (changes.isVisiable){
      this.element.nativeElement.style.display = this.isVisiable?"block":"none";
    }    
  }

  

}
