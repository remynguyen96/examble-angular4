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
var ngrx_routing_module_1 = require("./ngrx-routing.module");
var ngrx_component_1 = require("./ngrx.component");
var freelancer_grid_component_1 = require("./freelancer-grid/freelancer-grid.component");
var filter_component_1 = require("./filter/filter.component");
var forms_1 = require("@angular/forms");
var NgrxModule = (function () {
    function NgrxModule() {
    }
    return NgrxModule;
}());
NgrxModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            ngrx_routing_module_1.NgrxRoutingModule,
            forms_1.ReactiveFormsModule,
        ],
        declarations: [
            ngrx_component_1.NgrxComponent,
            freelancer_grid_component_1.FreelancerGridComponent,
            filter_component_1.FilterComponent,
        ]
    })
], NgrxModule);
exports.NgrxModule = NgrxModule;
