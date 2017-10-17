import { Component, OnInit } from '@angular/core';
import {Lead} from "./lead";
import {Store} from "@ngrx/store";
import {AppState} from "./lead/lead.component";
import {Observable} from "rxjs/Observable";
@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit {
  lead: Observable<Lead[]>;
  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.lead = this.store.select(state => state.lead);

  }

  remove(item) {
    this.store.dispatch({
      type: 'REMOVE_LEAD',
      payload: {
        id: item.id,
        // businessName: item.businessName,
        // businessCategory: item.businessCategory,
        // contactName: item.contactName,
        // email: item.email,
      }
    });
  }


}
