import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {Part1DerectiveModule} from "./part1-derective/part1-derective.module";
import {AppRouting} from "./app.routing";
import {DebounceClickDirective} from "./debounce/debounce-click.directive";
import {DebounceClickComponent} from "./debounce/debounce-click/debounce-click.component";
// import {ToolTipModule} from './tooltip-src/tool-tip.module';
import { TooltipDirective } from 'ng2-tooltip-directive/components';
import {Safe} from './salfeHTML';

@NgModule({
  declarations: [
    AppComponent,
    DebounceClickDirective,
    DebounceClickComponent,
    TooltipDirective,
    Safe,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRouting,
    Part1DerectiveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
