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
var reactive_form_component_1 = require("./reactive-form.component");
var part1_component_1 = require("./part1/part1.component");
var part2_component_1 = require("./part2/part2.component");
var part4_component_1 = require("./part4/part4.component");
var part3_component_1 = require("./part3/part3.component");
var routes = [
    {
        path: '',
        component: reactive_form_component_1.ReactiveFormComponent,
        children: [
            { path: 'part1', component: part1_component_1.Part1Component },
            { path: 'part2', component: part2_component_1.Part2Component },
            { path: 'part3', component: part3_component_1.Part3Component },
            { path: 'part4', component: part4_component_1.Part4Component },
        ]
    },
];
var ReactiveFormRoutingModule = (function () {
    function ReactiveFormRoutingModule() {
    }
    return ReactiveFormRoutingModule;
}());
ReactiveFormRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule]
    })
], ReactiveFormRoutingModule);
exports.ReactiveFormRoutingModule = ReactiveFormRoutingModule;
