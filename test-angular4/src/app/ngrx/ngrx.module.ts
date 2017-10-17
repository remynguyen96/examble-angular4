import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgrxRoutingModule } from './ngrx-routing.module';
import { NgrxComponent } from './ngrx.component';
import { FreelancerGridComponent } from './freelancer-grid/freelancer-grid.component';
import { FilterComponent } from './filter/filter.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgrxRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NgrxComponent,
    FreelancerGridComponent,
    FilterComponent,
  ]
})
export class NgrxModule { }
