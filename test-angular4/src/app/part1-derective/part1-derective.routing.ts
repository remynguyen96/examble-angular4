import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {Part1DerectiveComponent} from './part1-derective.component';

const routes : Routes = [
  {
    path: '',
    component: Part1DerectiveComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class Part1DerectiveRouting {

}
