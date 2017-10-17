import {ElementRef, forwardRef, HostListener, Directive, Renderer2} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const VALUE_ACCESSTOR = {
  provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SpilitInputDirective),
    multi: true
}

@Directive({
  selector: '[appSpilitInput]',
    providers:[VALUE_ACCESSTOR]
})
export class SpilitInputDirective implements ControlValueAccessor {

  onTouched:any = () => {};
  onChange:any = () => {};

  @HostListener('input',['$event.target.value'])
  changeInput(value) {
      this.onChange(value.split(',').filter(Boolean));
  }

  constructor(private renderer: Renderer2, private element: ElementRef) {

  }

  writeValue(value: any ) : void {
    console.log(value);
    const element = this.element.nativeElement;
    // this.renderer.setProperty(element,'value', value.join(','));
  }

  registerOnTouched(fn: any):void {
    this.onTouched = fn;
  }

  registerOnChange(fn: any):void {
      this.onChange = fn;
  }

}
