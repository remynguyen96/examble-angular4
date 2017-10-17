import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { AnimationComponent } from './animation.component';
import { PartComponent } from './part/part.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { Part4Component } from './part4/part4.component';
const routes : Routes = [
  {
    path: '',
    component: AnimationComponent,
    children: [
      {
        path: 'part',
        component: PartComponent
      },
      {
        path: 'part1',
        component: Part1Component
      },
      {
        path: 'home',
        component: Part2Component,
        data: {state: 'home'}
      },
      {
        path: 'about',
        component: Part3Component,
        data: {state: 'about'}
      },
      {
        path: '4',
        component: Part4Component
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AnimationRouting {

}
