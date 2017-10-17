import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Part5Component} from "./part5.component";

const routes: Routes = [
  {
    path: '',
    component: Part5Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Part5RoutingModule { }
