import {Action } from '@ngrx/store';
import {searchState} from "../models/search-user";

export const SEARCH =  '[SEARCHBASIC] SearchInput';
export const RESULTSEARCH =  '[SEARCHBASIC] Result Search';

export class Search implements Action {
    readonly type = SEARCH;
    constructor(public payload: string) {}
}

export class ResultSearch implements Action {
    readonly type = RESULTSEARCH;
    constructor(public payload: searchState[]) {}
}

export type AllAction = Search | ResultSearch;

