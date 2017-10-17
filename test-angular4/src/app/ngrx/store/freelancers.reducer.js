// import {Action} from '@ngrx/store';
//
// export interface AppState {
//   freelancers: Array<IFreelancer>
// }
//
// export interface IFreelancer {
//   name: string,
//   email: string,
//   thumbnail: string
// }
//
// export const ACTIONS = {
//   FREELANCERS_LOADED: 'FREELANCERS_LOADED',
//   INCOMMING_DATA: 'INCOMMING_DATA',
//   DELETE_FREELANCER: 'DELETE_FREELANCER',
// }
//
// export function freelancersReducer(state: Array<IFreelancer> = [], action: Action): Array<IFreelancer> {
//   switch(action.type) {
//     case ACTIONS.INCOMMING_DATA:
//       action.payload.DELETE.forEach((index) => {
//         state.splice(state.indexOf(action.payload), 1);
//       });
//       return Array.prototype.concat(action.payload.ADD, state);
//     case ACTIONS.FREELANCERS_LOADED:
//       return Array.prototype.concat(action.payload);
//     case ACTIONS.DELETE_FREELANCER:
//       state.splice(state.indexOf(action.payload), 1);
//       return Array.prototype.concat(state);
//     default:
//       return state;
//   }
// }
