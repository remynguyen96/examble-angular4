import * as FoodActions from './actions.service';
import {SearchResult} from "../models/search-result";
import {Food} from "../models/food";

export interface State {
    loading: boolean;
    searchTerms: string;
    results: SearchResult[];
    selectedFood: Food;
    foodList: Food[];
};

const initialState: State = {
    loading: false,
    searchTerms: '',
    results: [],
    selectedFood: null,
    foodList: []
}


export function foodReducer(state = initialState, action: FoodActions.Actions): State {
    switch (action.type) {
        case FoodActions.SEARCH:
            // return {
            //     ...state,
            //     loading: true,
            //     searchTerm: action.payload
            // }
            return Object.assign({},state, {
                ...state,
                loading: true,
                searchTerm: action.payload
            })
        case FoodActions.SEARCH_DONE:
            return Object.assign({},state, {
                ...state,
                loading: false,
                results: action.payload
            })
        case FoodActions.FETCH_FOOD:
            return {
                ...state,
                loading: true
            }
        case FoodActions.FETCH_FOOD_DONE:
            return {
                ...state,
                loading: false,
                selectedFoods: action.payload
            }
        case FoodActions.ADD_FOOD:
            return {
                ...state,
                foodList: [...state.foodList, state.selectedFood]
            }
        case FoodActions.REMOVE_FOOD:
            return {
                ...state,
                // foodList: state.foodList.filter(food =>
                //   food.id !== action.payload)
            }
        case FoodActions.GET_FOOD:
            return {
                ...state,
                selectedFoods: action.payload
                // selectedFood: state.foodList[action.payload]
            }
        default:
            return state;
    }
}
