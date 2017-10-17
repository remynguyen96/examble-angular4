import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Part5RoutingModule } from './part5-routing.module';
import { Part5Component } from './part5.component';
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./store/reducer.service";
import { environment } from '../../environments/environment';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    Part5RoutingModule,
    StoreModule.forRoot({counter: counterReducer}),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  declarations: [
    Part5Component
  ]
})
export class Part5Module { }
