import {NutriReducers, NutriState} from "./reducers";
import {ActionReducerMap} from "@ngrx/store";

export interface AppState {
    nutriState: NutriState
}

export const RootReducerNutrition: ActionReducerMap<AppState> = {
    nutriState: NutriReducers
}

