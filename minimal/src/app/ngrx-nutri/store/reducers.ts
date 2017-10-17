import * as AllAction from './actions';
import {PostInterface} from "../models/post";

export type Action = AllAction.AllAction;

export interface NutriState {
    loading: boolean;
    search: string;
    searchReuslts: PostInterface[];
    result: PostInterface;
    listResult:  PostInterface[];
}

const initialState: NutriState = {
    loading: false,
    search: null,
    searchReuslts: [],
    result: null,
    listResult: [],
}

export function NutriReducers(state: NutriState = initialState, action: Action): NutriState {
    switch(action.type) {
        case AllAction.SEARCH:
            return {
                ...state,
                loading: true,
                search: action.payload
            }
        case AllAction.SEARCHRESULT:
            return {
                ...state,
                loading: false,
                searchReuslts: action.payload
            }
        case AllAction.FETCHRESULT:
            return {
                ...state,
                loading: true,
                result: action.payload
            }
        // case AllAction.FETCHRESULTDONE:
        //     return {
        //         ...state,
        //         loading: false,
        //         result: action.payload
        //     }
        case AllAction.ADDRESULT:
               // const resultLIST : any= {};
               const demo = state.listResult.find(post => {
                   return post._id === action.payload._id
               });
               if(demo) {
                   return {
                       ...state,
                       loading: true,
                   }
               } else {
                   return {
                       ...state,
                       loading: true,
                       listResult: [...state.listResult, state.result]
                   }
               }
        // case AllAction.LISTRESULT:
        //     return {
        //         ...state,
        //         loading: false,
        //         listResult: [...state.listResult, state.result]
        //     }
        case AllAction.DELETERESULT:
            return {
                ...state,
                loading: true,
                listResult: state.listResult.filter(post => post._id !== action.payload._id)
            }
        default:
            return state
    }
}

