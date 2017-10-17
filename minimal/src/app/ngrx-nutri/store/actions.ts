import {Action} from "@ngrx/store";
import {PostInterface} from "../models/post";

export const SEARCH = '[SEARCH NUTRITION] Seacrh All About Nutrition';
export const SEARCHRESULT = '[SEARCHRESULT NUTRITION] Search Result All About Nutrition';
export const FETCHRESULT = '[FETCHRESULT NUTRITION] Fetch Result About Nutrition';
export const FETCHRESULTDONE = '[FETCHRESULTDONE NUTRITION] Fetch Result About Nutrition';
export const ADDRESULT = '[ADDRESULT NUTRITION] Add Result About Nutrition';
export const LISTRESULT = '[LISTRESULT NUTRITION] List Result About Nutrition';
export const DELETERESULT = '[DELETERESULT NUTRITION] Delete Result About Nutrition';

export class Search implements Action {
  readonly type = SEARCH;
  constructor(public payload: string) {}
}

export class SearchResult implements Action {
  readonly type= SEARCHRESULT;
  constructor(public payload: PostInterface[]) {}
}

export class FetchResult implements Action {
  readonly type= FETCHRESULT;
  constructor(public payload: PostInterface) {}
}

export class FetchResultDone implements Action {
    readonly type= FETCHRESULTDONE;
    constructor(public payload: PostInterface) {}
}

export class AddResult implements Action {
    readonly type= ADDRESULT;
    constructor(public payload: PostInterface) {}
    // constructor() {}
}

export class ListResult implements Action {
    readonly type= LISTRESULT;
    constructor() {}
}


export class DeleteResult implements Action {
    readonly type= DELETERESULT;
    constructor(public payload: PostInterface) {}
}

export type AllAction = Search | SearchResult | DeleteResult | AddResult | FetchResult | FetchResultDone | ListResult;