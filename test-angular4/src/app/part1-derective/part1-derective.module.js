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
var part1_derective_component_1 = require("./part1-derective.component");
var part1_directive_1 = require("./shared/part1.directive");
var part1_derective_routing_1 = require("./part1-derective.routing");
var tooltip_directive_1 = require("./shared/tooltip.directive");
var part1_service_1 = require("./shared/part1.service");
var create_element_directive_1 = require("./shared/create-element.directive");
var selectors_directive_1 = require("./shared/selectors.directive");
var modal_component_1 = require("./modal/modal.component");
var Part1DerectiveModule = (function () {
    function Part1DerectiveModule() {
    }
    return Part1DerectiveModule;
}());
Part1DerectiveModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            part1_derective_routing_1.Part1DerectiveRouting,
        ],
        declarations: [
            part1_derective_component_1.Part1DerectiveComponent,
            part1_directive_1.Part1Directive,
            tooltip_directive_1.TooltipDirective,
            create_element_directive_1.CreateElementDirective,
            selectors_directive_1.SelectorsDirective,
            modal_component_1.ModalComponent
        ],
        providers: [part1_service_1.Part1Service],
    })
], Part1DerectiveModule);
exports.Part1DerectiveModule = Part1DerectiveModule;
