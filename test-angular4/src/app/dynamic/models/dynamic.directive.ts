import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[app-Dynamic]'
})
export class DynamicDirective {

  constructor(public viewContainerRef: ViewContainerRef) {

  }


}
