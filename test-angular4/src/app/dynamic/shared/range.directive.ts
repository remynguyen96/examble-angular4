import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[range]'
})
export class RangeDirective {
  _range: number[];
  @Input()
  set range(value) {
    this.viewContainerRef.clear();
    this._range = this.generateRange(value[0], value[1]);
    this._range.forEach(num => {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {
        $implicit: num
      });
    });
  }

  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {

  }

  private generateRange(from: number, to: number) {
    const arr: number[] = [];
    for(let i = from; i <= to  ;i++){
      arr[i] = i;
    }
    return arr;
  }

}
