import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as CounterAction from "./actions.service";
export type Action = CounterAction.AllAction;

export interface FeatureState {
  counter: number
}

export interface AppState {
    feature: FeatureState
}

export const selectFeature = createFeatureSelector<FeatureState>('feature');
export const selectFeatureCount = createSelector(selectFeature, (state: FeatureState) => state.counter);


export function counterReducer (state: number = 0, action: Action) {
  switch (action.type) {
    case CounterAction.INCREMENT:
      return state + 1;
    case CounterAction.DECREMENT:
      return state - 1;
    case CounterAction.RESET:
      return action.payload;
    default:
      return state;
  }
}
