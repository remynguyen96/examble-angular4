"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Part1DerectiveComponent = (function () {
    function Part1DerectiveComponent(part1Service) {
        this.part1Service = part1Service;
        this.showDialog = false;
    }
    Part1DerectiveComponent.prototype.ngOnInit = function () {
        this.part1Service.blink('GOod boy 2');
    };
    return Part1DerectiveComponent;
}());
Part1DerectiveComponent = __decorate([
    core_1.Component({
        selector: 'app-part1-derective',
        templateUrl: './part1-derective.component.html',
        styles: ["\n    .demo-tooltip {\n      color: #FF454A;\n      text-align: center;\n      font-weight: bold;\n      font-size: 1.4rem;\n    }\n    .copy {\n      color: #0DFF6E;\n      text-align: center;\n      font-weight: bold;\n      font-size: 1.4rem;\n    }\n    .btn {\n      color: #fff;\n      padding: 10px 20px;\n      background: #24FF80;\n    }\n    .btn-close {\n      background: #FF401B;\n      padding: 10px 20px;\n      color: #fff;\n    }\n  "]
    })
], Part1DerectiveComponent);
exports.Part1DerectiveComponent = Part1DerectiveComponent;
