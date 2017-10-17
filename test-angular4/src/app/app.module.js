"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var part1_derective_module_1 = require("./part1-derective/part1-derective.module");
var app_routing_1 = require("./app.routing");
var debounce_click_directive_1 = require("./debounce/debounce-click.directive");
var debounce_click_component_1 = require("./debounce/debounce-click/debounce-click.component");
// import {ToolTipModule} from './tooltip-src/tool-tip.module';
var components_1 = require("ng2-tooltip-directive/components");
var salfeHTML_1 = require("./salfeHTML");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            debounce_click_directive_1.DebounceClickDirective,
            debounce_click_component_1.DebounceClickComponent,
            components_1.TooltipDirective,
            salfeHTML_1.Safe,
        ],
        imports: [
            platform_browser_1.BrowserModule.withServerTransition({ appId: 'my-app' }),
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule,
            http_1.HttpModule,
            app_routing_1.AppRouting,
            part1_derective_module_1.Part1DerectiveModule,
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
