import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NgrxRoutingModule} from './ngrx-routing.module';
import {NgrxComponent} from './ngrx.component';
import {ShareModuleModule} from "../share-module/share-module.module";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {SearchInputComponent} from './search-input/search-input.component';
import {SearchResultComponent} from './search-result/search-result.component';
import {environment} from "../../environments/environment";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {SearchEffect} from "./store/effects";
import {rootReducers} from "./store/core.reducer";

@NgModule({
    imports: [
        CommonModule,
        NgrxRoutingModule,
        ShareModuleModule,
        StoreModule.forRoot(rootReducers),
        EffectsModule.forRoot([SearchEffect]),
        !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
    ],
    declarations: [
        NgrxComponent,
        SearchInputComponent,
        SearchResultComponent,
    ]
})
export class NgrxModule {
}
