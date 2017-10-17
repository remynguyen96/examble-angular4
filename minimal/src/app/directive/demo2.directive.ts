import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDemo2]'
})
export class Demo2Directive {
  ingredient = 'mayo';
  constructor(
      private renderer: Renderer2,
      private element: ElementRef,
  ) {
    let bacon = renderer.createText('!!!');
    renderer.appendChild(element.nativeElement, bacon);
  }

}
