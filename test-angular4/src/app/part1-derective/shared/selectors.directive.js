"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SelectorsDirective = (function () {
    function SelectorsDirective() {
        this.role = 'checkbox';
        this.checked = false;
        this.tabIndex = 0;
    }
    SelectorsDirective.prototype.change = function (checked) {
        this.checked = checked;
    };
    return SelectorsDirective;
}());
__decorate([
    core_1.HostBinding('attr.role')
], SelectorsDirective.prototype, "role", void 0);
__decorate([
    core_1.HostBinding('attr.aria-checked')
], SelectorsDirective.prototype, "checked", void 0);
__decorate([
    core_1.HostBinding('attr.tabindex')
], SelectorsDirective.prototype, "tabIndex", void 0);
__decorate([
    core_1.HostListener('change', ['$event.target.checked'])
], SelectorsDirective.prototype, "change", null);
SelectorsDirective = __decorate([
    core_1.Directive({
        selector: '.ngx-checkbox'
    })
], SelectorsDirective);
exports.SelectorsDirective = SelectorsDirective;
