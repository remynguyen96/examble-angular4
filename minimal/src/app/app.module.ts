import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {HttpModule} from "@angular/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from '@angular/common/http';
import {SocketService} from "./socket/shared/socket.service";
import {ShareModuleModule} from "./share-module/share-module.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'minimal-app'}),
        BrowserModule,
        BrowserAnimationsModule,
        HttpModule,
        HttpClientModule,
        ShareModuleModule.forRoot(),
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [SocketService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
