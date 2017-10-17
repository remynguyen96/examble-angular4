import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Part3RoutingModule } from './part3-routing.module';
import { Part3Component } from './part3.component';
// import { CampaignComponent } from './campaign/campaign.component';
// import {MaterialModule} from "@angular/material";
// import {FlexLayoutModule} from "@angular/flex-layout";
// import { CounterComponent } from './counter/counter.component';
// import {CampaignService} from "./shared/campaign.service";
// import {CoreModule} from "./shared/core.module";
// import {StoreModule} from "@ngrx/store";
// import { campaigns } from './store/reducer';
// import {StoreDevtoolsModule} from "@ngrx/store-devtools";
@NgModule({
  imports: [
    CommonModule,
    Part3RoutingModule,
    // MaterialModule,
    // FlexLayoutModule,
    // CoreModule,
    // StoreModule.forRoot({
    //   campaigns
    // }),
    // StoreDevtoolsModule.instrument(),
  ],
  declarations: [
    Part3Component,
    // CampaignComponent,
    // CounterComponent,
  ],
  // providers: [CampaignService]
})
export class Part3Module { }
