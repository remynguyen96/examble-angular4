"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var View2Component = (function () {
    function View2Component() {
    }
    return View2Component;
}());
__decorate([
    core_1.Input()
], View2Component.prototype, "infomation", void 0);
View2Component = __decorate([
    core_1.Component({
        selector: 'app-view2',
        templateUrl: './view2.component.html',
        styleUrls: ['./view2.component.scss']
    })
], View2Component);
exports.View2Component = View2Component;
