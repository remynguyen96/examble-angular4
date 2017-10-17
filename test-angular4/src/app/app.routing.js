"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routing_loader_1 = require("./app.routing-loader");
var routes = [
    {
        path: '',
        redirectTo: 'reactive-form',
        pathMatch: 'full'
    },
    {
        path: 'dj',
        loadChildren: './dj/dj.module#DjModule'
    },
    {
        path: 'part1-directive',
        loadChildren: './part1-derective/part1-derective.module#Part1DerectiveModule'
    },
    {
        path: 'view',
        loadChildren: './view/view.module#ViewModule'
    },
    {
        path: 'tip',
        loadChildren: './tip/tip.module#TipModule'
    },
    {
        path: 'animation',
        loadChildren: './animation/animation.module#AnimationModule'
    },
    {
        path: 'reactive-form',
        loadChildren: './reactive-form/reactive-form.module#ReactiveFormModule'
    },
    // {
    //   path: 'ngrx',
    //   loadChildren: 'app/ngrx/ngrx.module#NgrxModule'
    // },
    {
        path: 'dynamic',
        loadChildren: './dynamic/dynamic.module#DynamicModule'
    },
];
var AppRouting = (function () {
    function AppRouting() {
    }
    return AppRouting;
}());
AppRouting = __decorate([
    core_1.NgModule({
        // imports: [RouterModule.forRoot(routes)],
        imports: [router_1.RouterModule.forRoot(routes, { preloadingStrategy: app_routing_loader_1.AppCustomPreloader })],
        exports: [router_1.RouterModule],
        providers: [app_routing_loader_1.AppCustomPreloader]
    })
], AppRouting);
exports.AppRouting = AppRouting;
