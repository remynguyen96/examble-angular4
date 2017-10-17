import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from './animation.component';
import {AnimationRouting} from './animation.routing';
import { PartComponent } from './part/part.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { Part4Component } from './part4/part4.component';

@NgModule({
  imports: [
    CommonModule,
    AnimationRouting,
  ],
  declarations: [AnimationComponent, PartComponent, Part1Component, Part2Component, Part3Component, Part4Component]
})
export class AnimationModule { }
