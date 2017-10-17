import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SplitterControlDirective} from './part1/splitter-control.directive';
import { Part4Component } from './part4/part4.component';
import { Part3Component } from './part3/part3.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    ReactiveFormComponent,
    Part1Component,
    Part2Component,
    SplitterControlDirective,
    Part4Component,
    Part3Component
  ]
})
export class ReactiveFormModule { }
