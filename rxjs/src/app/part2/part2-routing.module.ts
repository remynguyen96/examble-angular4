import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Part2Component} from "./part2.component";

const routes: Routes = [
  {path: '', component: Part2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Part2RoutingModule { }
