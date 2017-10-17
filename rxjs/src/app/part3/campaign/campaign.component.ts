import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import {CampaignService} from "../shared/campaign.service";
import {Campaign} from "../shared/campaign";
import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class CampaignComponent implements OnInit, OnDestroy {

  // Redux based variables
  campaigns: Observable<Array<Campaign>>;

  private subscription: Subscription;

  constructor(
    private campaignService: CampaignService
  ) {
    this.campaigns = campaignService.campaigns;
  }

  ngOnInit() {
    this.subscription = this.campaigns
      .subscribe(campaigns => {
        // Do something with campaigns
      }, error => {
        // Do something with error
      });

    this.campaignService.loadCampaigns();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  loadNew() {
    this.campaignService.loadCampaigns();
  }

}

