import { Injectable } from '@angular/core';
import {Campaign} from "./campaign";
import {Observable} from "rxjs/Observable";
import {Http, Response} from "@angular/http";
import {AppStore} from "../store/app.store";
import {Store} from "@ngrx/store";

@Injectable()
export class CampaignService {
  campaigns: Observable<Array<Campaign>>;

  campaignUrl = 'campaign';

  constructor(
    private http: Http,
    private store: Store<AppStore>,
  ) {
    this.campaigns = store.select(store => store.campaigns);
  }

  loadCampaigns() {
    return this.http.get(this.campaignUrl)
            .map((res: Response) => {
              let body = res.json();
              return body.data || {};
            })
            .map((payload: Campaign[]) => {
              return {type: 'ADD_CAMPAIGNS', payload};
            })
            .subscribe(action => {
              this.store.dispatch(action)
            });
  }

}
