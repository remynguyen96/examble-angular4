import * as SearchAction from './actions';
import {searchState} from "../models/search-user";
export type Action = SearchAction.AllAction;

export interface githubState {
    loading: boolean;
    search: string;
    results: searchState[];
}

const initialState: githubState = {
    search: '',
    loading: false,
    results: [],
};

export function searchReducers(state: githubState= initialState, action: Action): githubState {
    switch (action.type) {
        case SearchAction.SEARCH:
            return {
                ...state,
                loading: true,
                search: action.payload,
            }
        case SearchAction.RESULTSEARCH:
            return {
                ...state,
                loading: false,
                results: action.payload,
            }
        default:
            return state;
    }
}

