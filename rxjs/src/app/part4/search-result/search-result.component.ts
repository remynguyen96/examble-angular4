import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ISearchResult, SearchResult} from "../models/search-result";
import {Store} from "@ngrx/store";
import { State } from '../store/reducer.service';
import * as Actions from '../store/actions.service';
import {AppState} from "../store/state";

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultComponent implements OnInit {

    results: Observable<ISearchResult[]>;
    loading: Observable<boolean>;

    constructor(private store: Store<AppState>) {

    }

    ngOnInit() {
        // this.results = this.store.select('foodState','results');
        this.results = this.store.select(state => state.foodState.results);
        this.loading = this.store.select(state => state.foodState.loading);
        this.results.subscribe(a => console.log(a));
    }

}
