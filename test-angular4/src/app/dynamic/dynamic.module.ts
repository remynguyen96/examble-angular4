import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { DynamicComponent } from './dynamic.component';
import { DynamicDirective } from './models/dynamic.directive';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import {DynamicService} from './shared/dynamic.service';
import { LoadViewComponent } from './load-view/load-view.component';
import { RoleDirective } from './shared/role.directive';
import { RangeDirective } from './shared/range.directive';

@NgModule({
  imports: [
    CommonModule,
    DynamicRoutingModule
  ],
  declarations: [
    DynamicComponent,
    DynamicDirective,
    View2Component,
    View1Component,
    LoadViewComponent,
    RoleDirective,
    RangeDirective
  ],
  entryComponents:[
    View2Component,
    View1Component,
  ],
  providers:[DynamicService]
})
export class DynamicModule { }
