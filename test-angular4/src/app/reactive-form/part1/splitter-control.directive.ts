import {ElementRef, forwardRef, HostListener, Directive, Renderer2} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const SPLITTER_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SplitterControlDirective),
  multi: true,
};

@Directive({
  selector: '[appSplitterControl]',
  providers: [ SPLITTER_VALUE_ACCESSOR ]
})
export class SplitterControlDirective implements ControlValueAccessor {

  onChange;
  onTouched;
  constructor(private renderer: Renderer2, private element: ElementRef) {

  }

  @HostListener('input', [ '$event.target.value' ])
  input(value) {
    this.onChange(value.split(',').filter(Boolean));
  }

  writeValue(value : any ) : void {
    const element = this.element.nativeElement;
    this.renderer.setProperty(element, 'value', value.join(','));
  }

  registerOnChange( fn : any ) : void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

}


