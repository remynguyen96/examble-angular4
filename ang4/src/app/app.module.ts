import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { CdkTableModule } from '@angular/cdk';
import 'hammerjs';
import { AppRouting } from './app.routing';
import { AppComponent } from './app.component';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { leadReducer } from './index-db/store/lead.reducer';

// import { IndexDBComponent } from './index-db/index-db.component';
import { FormUserComponent } from './index-db/form-user/form-user.component';
import { SearchRxjsComponent } from './search-rxjs/search-rxjs.component';

import { FlexBoxComponent } from './flex-box/flex-box.component';
import { Part1Component } from './flex-box/part1/part1.component';
import { Part2Component } from './flex-box/part2/part2.component';
import { Part3Component } from './flex-box/part3/part3.component';
import { Part4Component } from './flex-box/part4/part4.component';
import { Part5Component } from './flex-box/part5/part5.component';
import { Part6Component } from './flex-box/part6/part6.component';
import { Part7Component } from './flex-box/part7/part7.component';
import { GridComponent } from './grid/grid.component';
import {Part1Component2} from "./grid/part1/part1.component";

@NgModule({
  declarations: [
    AppComponent,
    // IndexDBComponent,
    FormUserComponent,
    SearchRxjsComponent,
    FlexBoxComponent,
    Part2Component,
    Part3Component,
    Part4Component,
    Part5Component,
    Part1Component,
    Part6Component,
    Part7Component,
    GridComponent,
    Part1Component2
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting,
    // CdkTableModule,
    StoreModule.provideStore({lead: leadReducer}),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
    // StoreDevtoolsModule.instrumentOnlyWithExtension({
      // maxAge: 10
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
