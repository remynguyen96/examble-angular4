
import {Lead} from "./lead";
import * as LeadAction from "./actions";

export function leadReducer(state: Lead[] = [], action: LeadAction.Actions) {
  switch (action.type) {
    case LeadAction.ADD_LEAD: {
      return [ ...state, action.payload ];
    }
    case LeadAction.REMOVE_LEAD:
      return [ ...state, action.payload ];
      // return state.filter(lead => lead.id !== action.payload.id)
    default:
      return state;
  }
}
