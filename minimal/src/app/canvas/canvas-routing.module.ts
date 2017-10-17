import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CanvasComponent} from "./canvas.component";
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { Part4Component } from './part4/part4.component';
import { Part5Component } from './part5/part5.component';
import { Part6Component } from './part6/part6.component';
import { Part7Component } from './part7/part7.component';
import { Part8Component } from './part8/part8.component';
import { Part9Component } from './part9/part9.component';
import { Part10Component } from './part10/part10.component';
import { Part11Component } from './part11/part11.component';
import {Part12Component} from "./part12/part12.component";
import {Part13Component} from "./part13/part13.component";
import {Part14Component} from "./part14/part14.component";
import { Part15Component } from './part15/part15.component';
import { Part16Component } from './part16/part16.component';
import { Part17Component } from './part17/part17.component';
import { Part18Component } from './part18/part18.component';
import { Part19Component } from './part19/part19.component';
import { Part20Component } from './part20/part20.component';
const routes: Routes = [
    {
      path: '',
      component: CanvasComponent,
      children: [
          {
              path: 'part1',
              component: Part1Component
          },
          {
              path: 'part2',
              component: Part2Component
          },
          {
              path: 'part3',
              component: Part3Component
          },
          {
              path: 'part4',
              component: Part4Component
          },
          {
              path: 'part5',
              component: Part5Component
          },
          {
              path: 'part6',
              component: Part6Component
          },
          {
              path: 'part7',
              component: Part7Component
          },
          {
              path: 'part8',
              component: Part8Component
          },
          {
              path: 'part9',
              component: Part9Component
          },
          {
              path: 'part10',
              component: Part10Component
          },
          {
              path: 'part11',
              component: Part11Component
          },
          {
              path: 'part12',
              component: Part12Component
          },
          {
              path: 'part13',
              component: Part13Component
          },
          {
              path: 'part14',
              component: Part14Component
          },
          {
              path: 'part15',
              component: Part15Component
          },
          {
              path: 'part16',
              component: Part16Component
          },
          {
              path: 'part17',
              component: Part17Component
          },
          {
              path: 'part18',
              component: Part18Component
          },
          {
              path: 'part19',
              component: Part19Component
          },
          {
              path: 'part20',
              component: Part20Component
          },
      ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanvasRoutingModule { }
