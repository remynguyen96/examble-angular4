import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import * as CounterAction from "./store/actions.service";
import * as fromRoot from './store/reducer.service';


@Component({
  selector: 'app-part5',
  templateUrl: './part5.component.html',
  styleUrls: ['./part5.component.scss']
})
export class Part5Component implements OnInit {
    counter: Observable<number>;

  constructor(private store: Store<fromRoot.AppState>) {

  }

  ngOnInit() {
    // this.counter = this.store.select('counter');
      this.counter = this.store.select(fromRoot.selectFeatureCount);
      // this.counter.subscribe(a => console.log(a));
  }

  increment() {
    this.store.dispatch(new CounterAction.Increment());
  }

  decrement() {
    this.store.dispatch(new CounterAction.Decrement());
    // this.store.dispatch({type: ACTIONS.DECREMENT});
  }

  reset() {
    this.store.dispatch(new CounterAction.Reset(3));
  }

}
