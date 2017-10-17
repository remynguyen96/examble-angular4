import {Injectable} from "@angular/core";
import * as AllAction from '../store/actions';
import {Actions, Effect, toPayload} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {NutritionService} from "../shared/nutrition.service";

@Injectable()

export class EffectsNutrition {

    constructor(private action$: Actions, private nutriService: NutritionService) {

    }

    // @Effect()
    @Effect({dispatch: false})
    search$: Observable<Action> =
        this.action$.ofType(AllAction.SEARCH)
            .map((action: AllAction.Search) => action.payload)
            // .map(toPayload)  ==> use  no type safety because it's return type any
            .switchMap(query => {
                return this.nutriService.searchPost(query)
                    .map(results => new AllAction.SearchResult(results));
            });
}