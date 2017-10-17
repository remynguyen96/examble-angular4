"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var type_1 = require("../models/type");
var view1_component_1 = require("../view1/view1.component");
var view2_component_1 = require("../view2/view2.component");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/from");
require("rxjs/add/observable/of");
var DynamicService = (function () {
    function DynamicService() {
    }
    DynamicService.prototype.user = function () {
        var data = [
            { name: 'Admin', role: 'admin' },
            { name: 'Admin2', role: 'admin' },
            { name: 'Member', role: 'member' },
            { name: 'Member2', role: 'member' },
        ];
        return Observable_1.Observable.from(data);
    };
    DynamicService.prototype.infomationComponent = function () {
        return [
            new type_1.TypeComponent(view1_component_1.View1Component, { job: 'View part 1  1' }),
            new type_1.TypeComponent(view1_component_1.View1Component, { job: 'View part 1-1' }),
            new type_1.TypeComponent(view2_component_1.View2Component, { view: 'View part 2' }),
            new type_1.TypeComponent(view2_component_1.View2Component, { view: 'View part 2-2' }),
        ];
    };
    return DynamicService;
}());
DynamicService = __decorate([
    core_1.Injectable()
], DynamicService);
exports.DynamicService = DynamicService;
