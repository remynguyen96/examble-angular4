import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import * as fromRoot from "../store/reducer.service";
import * as Actions from '../store/actions.service';
import {NutritionService} from "./nutrition.service";
import {Observable} from "rxjs/Observable";
import {Food} from "../models/food";

@Injectable()
export class StoreService {

  state: Observable<fromRoot.State>;
  constructor(private store: Store<fromRoot.State>, private nutritionService: NutritionService) {
    this.state = store;
  }

  searchFood(query: string) {
    this.store.dispatch(new Actions.Search(query));
  }

  fetchFood(id: string) {
    this.store.dispatch(new Actions.FetchFood(id));
  }

  getFood(id: string) {
    this.store.dispatch(new Actions.GetFood(id))
  }

  addBasket() {
    // this.store.dispatch(new Actions.AddFood());
  }

  removeBasket(food: Food) {
    this.store.dispatch(new Actions.RemoveFood(food))
  }


}
