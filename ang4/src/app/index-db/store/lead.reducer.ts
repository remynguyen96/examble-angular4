import { Lead } from './lead';
import { Action } from '@ngrx/store';


export const ADD_LEAD = 'ADD_LEAD';
export const REMOVE_LEAD = 'REMOVE_LEAD';

export function leadReducer(state: Lead[] = [], action: Action) {
    switch (action.type) {
      case ADD_LEAD:
          return [...state, action.payload];
      case REMOVE_LEAD:
          return state.filter(lead => lead.id !== action.payload.id);
      default:
          return state;
    }
}
