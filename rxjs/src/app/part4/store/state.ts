import { ActionReducerMap } from '@ngrx/store'
import {foodReducer, State} from "./reducer.service";

export interface AppState {
    foodState : State,
}

export const rootReducers: ActionReducerMap<AppState> = {
    foodState: foodReducer
}

