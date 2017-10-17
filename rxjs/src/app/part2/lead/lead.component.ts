import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Lead} from "../lead";

export interface AppState {
  readonly lead: Lead[];
}
@Component({
  selector: 'app-lead',
  templateUrl: './lead.component.html',
  styleUrls: ['./lead.component.scss'],
})
export class LeadComponent implements OnInit {
  private id = 0;
  lead = {} as Lead;
  constructor(private   store: Store<AppState>) { }

  ngOnInit() {
  }

  addLead() {
    this.store.dispatch({
      type: 'ADD_LEAD',
      payload: <Lead>{
        id: ++this.id,
        businessName: this.lead.businessName,
        businessCategory: this.lead.businessCategory,
        contactName: this.lead.contactName,
        email: this.lead.email,
      }
    });
  }
}
