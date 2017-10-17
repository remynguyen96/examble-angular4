import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import * as ActionType from './actions';
import {Action} from '@ngrx/store';
import {Actions, Effect, toPayload} from '@ngrx/effects';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()

export class SearchEffect {
    constructor(private http: Http,
                private actions$: Actions) {
    }

    @Effect()
    search$: Observable<Action> =
        this.actions$.ofType(ActionType.SEARCH)
            .map(toPayload)
            .switchMap(payload => {
            return this.http.get(`https://api.github.com/search/users?q=${payload}`)
                .map(response => new ActionType.ResultSearch(response.json().items));
        });

}