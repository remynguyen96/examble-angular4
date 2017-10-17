import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {CampaignService} from "../shared/campaign.service";
import {Campaign} from "../shared/campaign";

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  // Redux based variables
  campaigns: Observable<Array<Campaign>>;

  constructor(
    private campaignService: CampaignService
  ) {
    this.campaigns = campaignService.campaigns;
  }


  ngOnInit() { }

}
