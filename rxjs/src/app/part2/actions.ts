import {Action} from "@ngrx/store";

import {Lead} from "./lead";

export const ADD_LEAD = 'ADD_LEAD';
export const REMOVE_LEAD = 'REMOVE_LEAD';

export class AddLead implements Action {
  readonly type = ADD_LEAD;
  constructor(public payload: Lead) {}
}
export class RemoveLead implements Action {
  readonly type = REMOVE_LEAD;
  constructor(public payload: Lead) {}
}

export type Actions = | AddLead | RemoveLead;
