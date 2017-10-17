import {Injectable} from '@angular/core';
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action, Store} from "@ngrx/store";
import {NutritionService} from "../services/nutrition.service";
import * as FoodActions from './actions.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import {State} from "./reducer.service";

@Injectable()
export class EffectsService {

    constructor(private store: Store<State>, private actions$: Actions, private nutritionService: NutritionService) {

    }

    @Effect()
    searchFood$: Observable<Action> =
        this.actions$.ofType(FoodActions.SEARCH)
            .map(toPayload)
            .switchMap(query => {
                return this.nutritionService.searchFood(query)
                    .map(result => new FoodActions.SearchDone(result));
            });












    @Effect()
    fetchFood$: Observable<Action> =
        this.actions$.ofType(FoodActions.FETCH_FOOD)
            .map(toPayload)
            .switchMap(query => {
                return this.nutritionService.fetchFood(query)
                    .map(food => new FoodActions.FetchFoodDone(food));
            });


}
