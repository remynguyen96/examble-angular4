import {
  Directive,
  Output,
  EventEmitter,
  HostListener,
  ElementRef, Renderer2
} from '@angular/core';

@Directive({
  selector: '[dbl-click-copy]'
})
export class Part1Directive {
  @Output() onCopy = new EventEmitter();
  element : any;
  constructor(private renderer : Renderer2,private elm : ElementRef) {
    this.element = elm.nativeElement;
  }

  @HostListener('dblclick', ['$event'])
  onDblClick(event) {
    const selection = getSelection();
    const range = document.createRange();
    range.selectNodeContents(this.element);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    this.onCopy.emit(range);
    this.renderer.setStyle(this.element,'background','#FF260F');
    console.log(`Copied ${range} to your clipboard!`);
  }

  @HostListener('mouseleave')
  removeStyle() {
    this.renderer.setStyle(this.element,'background','transparent');
  }

}
