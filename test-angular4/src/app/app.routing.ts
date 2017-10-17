import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from './app.component';
import {AppCustomPreloader} from "./app.routing-loader";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'reactive-form',
    pathMatch: 'full'
  },
  {
    path: 'dj',
    loadChildren: './dj/dj.module#DjModule'
  },
  {
    path: 'part1-directive',
    loadChildren: './part1-derective/part1-derective.module#Part1DerectiveModule'
  },
  {
    path: 'view',
    loadChildren: './view/view.module#ViewModule'
  },
  {
    path: 'tip',
    loadChildren: './tip/tip.module#TipModule'
  },
  {
    path: 'animation',
    loadChildren: './animation/animation.module#AnimationModule'
  },
  {
    path: 'reactive-form',
    loadChildren: './reactive-form/reactive-form.module#ReactiveFormModule'
  },
  // {
  //   path: 'ngrx',
  //   loadChildren: 'app/ngrx/ngrx.module#NgrxModule'
  // },
  {
    path: 'dynamic',
    loadChildren: './dynamic/dynamic.module#DynamicModule'
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
  exports: [RouterModule],
  providers: [AppCustomPreloader]
})

export class AppRouting {

}
