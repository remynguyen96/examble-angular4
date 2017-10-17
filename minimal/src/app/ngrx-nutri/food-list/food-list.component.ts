import { Component, OnInit } from '@angular/core';
import {AppState} from "../store/core";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {PostInterface} from "../models/post";
import {Observable} from "rxjs/Observable";
import * as AllAction from '../store/actions';
@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  listResult: Observable<PostInterface[]>;
  demo: Observable<any>;

  constructor(
      private store: Store<AppState>,
      private router: Router,
  ) { }

  ngOnInit() {
    this.listResult = this.store.select(state => state.nutriState.listResult);
  }

  onDelete(detail) {
    this.store.dispatch(new AllAction.DeleteResult(detail));
  }

}
