import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {ReactiveFormsModule} from "@angular/forms";
import {Part4RoutingModule} from "./part4-routing.module";

import { Part4Component } from './part4.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodResultComponent } from './food-result/food-result.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchInputComponent } from './search-input/search-input.component';


import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../../environments/environment";

import {StoreModule} from "@ngrx/store";
import {NutritionService} from "./services/nutrition.service";
import {StoreService} from "./services/store.service";
import {EffectsModule} from "@ngrx/effects";
import {EffectsService} from "./store/effects.service";
import {rootReducers} from "./store/state";
@NgModule({
    imports: [
        CommonModule,
        Part4RoutingModule,
        MaterialModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        StoreModule.forRoot(rootReducers),
        EffectsModule.forRoot([EffectsService]),
        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
    ],
    declarations: [
    Part4Component,
    FoodListComponent,
    FoodDetailComponent,
    FoodResultComponent,
    SearchResultComponent,
    SearchInputComponent
  ],
    providers: [NutritionService, StoreService],
})
export class Part4Module { }
