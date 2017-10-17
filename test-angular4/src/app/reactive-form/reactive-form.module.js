"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var reactive_form_routing_module_1 = require("./reactive-form-routing.module");
var reactive_form_component_1 = require("./reactive-form.component");
var part1_component_1 = require("./part1/part1.component");
var part2_component_1 = require("./part2/part2.component");
var forms_1 = require("@angular/forms");
var splitter_control_directive_1 = require("./part1/splitter-control.directive");
var part4_component_1 = require("./part4/part4.component");
var part3_component_1 = require("./part3/part3.component");
var ReactiveFormModule = (function () {
    function ReactiveFormModule() {
    }
    return ReactiveFormModule;
}());
ReactiveFormModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            reactive_form_routing_module_1.ReactiveFormRoutingModule,
            forms_1.ReactiveFormsModule
        ],
        declarations: [
            reactive_form_component_1.ReactiveFormComponent,
            part1_component_1.Part1Component,
            part2_component_1.Part2Component,
            splitter_control_directive_1.SplitterControlDirective,
            part4_component_1.Part4Component,
            part3_component_1.Part3Component
        ]
    })
], ReactiveFormModule);
exports.ReactiveFormModule = ReactiveFormModule;
