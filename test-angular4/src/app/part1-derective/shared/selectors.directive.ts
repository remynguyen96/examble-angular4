import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '.ngx-checkbox'
})
export class SelectorsDirective {

  constructor() {

  }
  @HostBinding('attr.role') role = 'checkbox';
  @HostBinding('attr.aria-checked') checked = false;
  @HostBinding('attr.tabindex') tabIndex = 0;

  @HostListener('change', ['$event.target.checked'])
  change(checked) {
    this.checked = checked;
  }



}
