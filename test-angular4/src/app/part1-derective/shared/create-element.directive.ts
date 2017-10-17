import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCreateElement]'
})
export class CreateElementDirective {

  constructor(private renderer : Renderer2, private elm : ElementRef) {

  }



}
