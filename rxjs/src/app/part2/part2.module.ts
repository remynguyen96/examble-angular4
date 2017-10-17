import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Part2RoutingModule } from './part2-routing.module';
import { Part2Component } from './part2.component';
import {MaterialModule, MdButtonModule, MdCheckboxModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";

import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {leadReducer} from "./reducer";
import {StoreModule} from "@ngrx/store";

import { LeadComponent } from './lead/lead.component';
import {FormsModule} from "@angular/forms";
import {environment} from "../../environments/environment";
@NgModule({
  imports: [
    CommonModule,
    Part2RoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot({lead: leadReducer}),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  declarations: [
    Part2Component,
    LeadComponent
  ]
})
export class Part2Module { }
