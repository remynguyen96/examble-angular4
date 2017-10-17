import { Action, Store } from '@ngrx/store';
import {Food, IFood} from "../models/food";
import {ISearchResult, SearchResult} from "../models/search-result";

export const LOADING = "[Food] LOADING";
export const SEARCH = "[Food] SEARCH";
export const SEARCH_DONE = "[Food] SEARCH_DONE";
export const FETCH_FOOD = "[Food] FETCH_FOOD";
export const FETCH_FOOD_DONE = "[Food] FETCH_FOOD_DONE";
export const ADD_FOOD = "[Food] ADD_FOOD";
export const GET_FOOD = "[Food] GET_FOOD";
export const REMOVE_FOOD = "[Food] REMOVE_FOOD";


export class Search implements Action {
  readonly type= SEARCH
  constructor(public payload: string) {}
}

export class SearchDone implements Action {
  readonly type= SEARCH_DONE;
  constructor(public payload: ISearchResult[]) {}
}

export class FetchFood implements Action {
  readonly type= FETCH_FOOD;
  constructor(public payload: string) {}
}

export class FetchFoodDone implements Action {
  readonly type= FETCH_FOOD_DONE;
  constructor(public payload: IFood) {}
}

export class AddFood implements Action {
  readonly type= ADD_FOOD;
  constructor() {}
  // constructor(public payload: IFood) {}
}

export class RemoveFood implements Action {
  readonly type= REMOVE_FOOD;
  constructor(public payload: Food) {  }
}

export class GetFood implements Action {
  readonly type= GET_FOOD;
  constructor(public payload: string) {}
}

export type Actions =   Search | SearchDone
  | AddFood | RemoveFood
  | FetchFood | FetchFoodDone
  | GetFood ;
