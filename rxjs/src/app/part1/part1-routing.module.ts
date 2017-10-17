import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Part1Component} from "./part1.component";

const routes: Routes = [
  {path: '', component: Part1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Part1RoutingModule { }
