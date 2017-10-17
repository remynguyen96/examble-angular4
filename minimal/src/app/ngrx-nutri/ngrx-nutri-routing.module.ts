import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgrxNutriComponent} from "./ngrx-nutri.component";
import {FoodListComponent} from "./food-list/food-list.component";
import {SearchResultComponent} from "./search-result/search-result.component";
import {FoodDetailComponent} from "./food-detail/food-detail.component";
import {FoodResultComponent} from "./food-result/food-result.component";

const routes: Routes = [
    {
      path: '',
      component: NgrxNutriComponent,
      children: [
          {path: 'my-results', component: FoodListComponent},
          {path: 'my-results/:id', component: FoodDetailComponent},
          {path: 'search', component: SearchResultComponent},
          {path: 'result-search/:id', component: FoodResultComponent},
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgrxNutriRoutingModule { }
