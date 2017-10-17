import {Component, forwardRef, Renderer2, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

export const EPANDED_TEXTAREA_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Part1Component),
  multi: true,
};

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss'],
  providers: [EPANDED_TEXTAREA_VALUE_ACCESSOR]
})
export class Part1Component implements ControlValueAccessor {

  @ViewChild('textarea') textarea;
  onChange;
  onTouched;
  constructor(private renderer: Renderer2) {

  }

  writeValue(value: any): void {
    const div = this.textarea.nativeElement;
    const demo = this.renderer.setProperty(div, 'textContent', value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched( fn : any ) : void {
    this.onTouched = fn;
  }

  change($event) {
    this.onChange($event.target.textContent);
    this.onTouched($event.target.textContent);
  }

  setDisabledState( isDisabled : boolean ) : void {
    const div = this.textarea.nativeElement;
    const action = isDisabled ? 'addClass' : 'removeClass';
    this.renderer[action](div, 'disabled');
  }

}
