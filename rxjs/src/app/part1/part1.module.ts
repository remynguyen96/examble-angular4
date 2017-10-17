import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Part1RoutingModule } from './part1-routing.module';
import { Part1Component } from './part1.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MaterialModule} from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    Part1RoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    StoreDevtoolsModule.instrument(),
    // StoreModule.provideStore({
    //   //place for future reducers
    // }),
  ],
  declarations: [
    Part1Component
  ]
})
export class Part1Module { }
