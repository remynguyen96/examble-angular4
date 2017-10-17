//
// import {Action} from '@ngrx/store';
//
// export interface IFiler {
//   name: string,
//   email: string
// }
//
// export const ACTIONS = {
//   UPDATE_FILTER: 'UPDATE_FILTER',
//   CLEAR_FILTER: 'CLEAR_FILTER',
// }
//
// const initialState = {name: '', email: ''};
//
// export function filterReducer(state: IFiler = initialState, action: Action ): IFiler {
//   switch (action.type) {
//     case ACTIONS.UPDATE_FILTER:
//       return Object.assign({}, action.payload);
//     case ACTIONS.CLEAR_FILTER:
//       return Object.assign({}, initialState);
//     default:
//       return state;
//   }
// }
