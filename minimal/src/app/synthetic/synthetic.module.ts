import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SyntheticRoutingModule } from './synthetic-routing.module';
import { SyntheticComponent } from './synthetic.component';

@NgModule({
  imports: [
    CommonModule,
    SyntheticRoutingModule
  ],
  declarations: [
      SyntheticComponent
  ]
})
export class SyntheticModule { }
