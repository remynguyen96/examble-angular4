import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppCustomPreloader} from "./app.routing-loader";

const routes: Routes = [
  {
    path: 'part1',
    loadChildren: 'app/part1/part1.module#Part1Module'
  },
  {
    path: '',
    loadChildren: 'app/part2/part2.module#Part2Module'
  },
  {
    path: 'part3',
    loadChildren: 'app/part3/part3.module#Part3Module'
  },
  {
    path: 'part4',
    loadChildren: 'app/part4/part4.module#Part4Module'
  },
  {
    path: 'part5',
    loadChildren: 'app/part5/part5.module#Part5Module'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})

export class AppRouting {

}
