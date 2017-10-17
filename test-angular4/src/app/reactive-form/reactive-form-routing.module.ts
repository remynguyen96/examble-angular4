import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReactiveFormComponent} from './reactive-form.component';
import {Part1Component} from './part1/part1.component';
import {Part2Component} from './part2/part2.component';
import {Part4Component} from './part4/part4.component';
import {Part3Component} from './part3/part3.component';

const routes: Routes = [
  {
    path: '',
    component: ReactiveFormComponent,
    children: [
      {path: 'part1', component: Part1Component},
      {path: 'part2', component: Part2Component},
      {path: 'part3', component: Part3Component},
      {path: 'part4', component: Part4Component},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
