import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgrxNutriRoutingModule} from './ngrx-nutri-routing.module';
import {NgrxNutriComponent} from './ngrx-nutri.component';
import {SearchInputComponent} from './search-input/search-input.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {FoodDetailComponent} from './food-detail/food-detail.component';
import {FoodListComponent} from './food-list/food-list.component';
import {FoodResultComponent} from './food-result/food-result.component';
import {ShareModuleModule} from "../share-module/share-module.module";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {EffectsNutrition} from "./store/effects";
import {environment} from "../../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {RootReducerNutrition} from "./store/core";
import {NutritionService} from "./shared/nutrition.service";

@NgModule({
    imports: [
        CommonModule,
        NgrxNutriRoutingModule,
        ShareModuleModule,
        StoreModule.forRoot(RootReducerNutrition),
        EffectsModule.forRoot([EffectsNutrition]),
        !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : []
    ],
    declarations: [
        NgrxNutriComponent,
        SearchInputComponent,
        SearchResultComponent,
        FoodDetailComponent,
        FoodListComponent,
        FoodResultComponent
    ],
    providers: [NutritionService]
})
export class NgrxNutriModule {
}
