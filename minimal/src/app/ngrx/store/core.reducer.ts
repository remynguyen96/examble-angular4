import {githubState, searchReducers} from "./reducers";
import {ActionReducerMap} from "@ngrx/store";

export interface AppState {
    githubState: githubState,
}

export const rootReducers: ActionReducerMap<AppState> = {
    githubState: searchReducers,
}