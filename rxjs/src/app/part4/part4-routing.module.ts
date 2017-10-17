import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Part4Component} from "./part4.component";
import {FoodResultComponent} from "./food-result/food-result.component";
import {FoodListComponent} from "./food-list/food-list.component";
import {FoodDetailComponent} from "./food-detail/food-detail.component";
import {SearchResultComponent} from "./search-result/search-result.component";

const routes: Routes = [
  {
    path: '',
    component: Part4Component,
    children: [
      { path: '', redirectTo: 'myfoods', pathMatch: 'full' },
      { path: 'myfoods', component: FoodListComponent },
      { path: 'myfoods/:id', component: FoodDetailComponent},
      { path: 'search', component: SearchResultComponent },
      { path: 'search/:id', component: FoodResultComponent},
      { path: '**', pathMatch: 'full', redirectTo: 'myfoods' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Part4RoutingModule { }
