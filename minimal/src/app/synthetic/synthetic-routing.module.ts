import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SyntheticComponent} from "./synthetic.component";

const routes: Routes = [
    {
      path: '',
      component: SyntheticComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyntheticRoutingModule { }
