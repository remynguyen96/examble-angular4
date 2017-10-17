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
var view_routing_module_1 = require("./view-routing.module");
var view_component_1 = require("./view.component");
var part1_component_1 = require("./part1/part1.component");
var form_component_1 = require("./form/form.component");
var forms_1 = require("@angular/forms");
var form2_component_1 = require("./form2/form2.component");
var ViewModule = (function () {
    function ViewModule() {
    }
    return ViewModule;
}());
ViewModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            view_routing_module_1.ViewRoutingModule,
            forms_1.ReactiveFormsModule,
        ],
        declarations: [
            view_component_1.ViewComponent,
            part1_component_1.Part1Component,
            form_component_1.FormComponent,
            form2_component_1.Form2Component,
        ]
    })
], ViewModule);
exports.ViewModule = ViewModule;
