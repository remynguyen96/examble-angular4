import {Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {DynamicService} from './dynamic.service';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
@Directive({
  selector: '[ifRole]'
})
export class RoleDirective implements OnInit, OnDestroy {
  user$: Subscription;
  @Input('ifRole') roleName: string;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private dynamicService: DynamicService,
  ) {

  }

  ngOnInit() {
    this.user$ = this.dynamicService.user()
                  .do(() => this.viewContainerRef.clear())
                  // .filter(user => 'member' === this.roleName)
                  .filter(user => user.role === this.roleName)
                  .subscribe(() => {
                      this.viewContainerRef.createEmbeddedView(this.templateRef);
                  });
  }

  ngOnDestroy() {
    this.user$.unsubscribe();
  }
}
