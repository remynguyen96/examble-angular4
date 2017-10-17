import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRouting} from "./app.routing";
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MaterialModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import { environment } from '../environments/environment';
import {StoreDevtoolsModule} from "@ngrx/store-devtools"; // Angular CLI environment
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouting,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
// npm install --save @angular/material @angular/cdk hammerjs
// "../node_modules/hammerjs/hammer.min.js"
