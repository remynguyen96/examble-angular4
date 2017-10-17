import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DjComponent} from './dj.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
const routes: Routes = [
  {
    path: '',
    component: DjComponent
  },
  {
    path: 'dj/part1',
    component: Part1Component
  },
  {
    path: 'dj/part2',
    component: Part2Component
  },
  {
    path: 'dj/part3',
    component: Part3Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DjRoutingModule { }
