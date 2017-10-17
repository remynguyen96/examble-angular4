import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveRoutingModule } from './directive-routing.module';
import { DirectiveComponent } from './directive.component';
import { TemplateOutletComponent } from './template-outlet/template-outlet.component';
import {ShareModuleModule} from "../share-module/share-module.module";
import { Demo2Component } from './demo2/demo2.component';
import { Demo2Directive } from './demo2.directive';

@NgModule({
  imports: [
    CommonModule,
    DirectiveRoutingModule,
      ShareModuleModule
  ],
  declarations: [
      DirectiveComponent,
      TemplateOutletComponent,
      Demo2Component,
      Demo2Directive
  ]
})
export class DirectiveModule { }
