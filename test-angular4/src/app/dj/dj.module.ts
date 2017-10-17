import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DjRoutingModule } from './dj-routing.module';
import { DjComponent } from './dj.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { DetailComponent } from './part1/detail/detail.component';
import {Part1Service} from './part1/part1.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DjRoutingModule,
    FormsModule,
  ],
  declarations: [DjComponent, Part1Component, Part2Component, Part3Component, DetailComponent],
  providers: [Part1Service],
})
export class DjModule { }
