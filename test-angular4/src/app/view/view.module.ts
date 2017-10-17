import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { Part1Component } from './part1/part1.component';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Form2Component } from './form2/form2.component';

@NgModule({
  imports: [
    CommonModule,
    ViewRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    ViewComponent,
    Part1Component,
    FormComponent,
    Form2Component,
  ]
})
export class ViewModule { }
