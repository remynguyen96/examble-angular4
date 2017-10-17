"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
exports.EPANDED_TEXTAREA_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return Part1Component; }),
    multi: true,
};
var Part1Component = (function () {
    function Part1Component(renderer) {
        this.renderer = renderer;
    }
    Part1Component.prototype.writeValue = function (value) {
        var div = this.textarea.nativeElement;
        var demo = this.renderer.setProperty(div, 'textContent', value);
    };
    Part1Component.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    Part1Component.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    Part1Component.prototype.change = function ($event) {
        this.onChange($event.target.textContent);
        this.onTouched($event.target.textContent);
    };
    Part1Component.prototype.setDisabledState = function (isDisabled) {
        var div = this.textarea.nativeElement;
        var action = isDisabled ? 'addClass' : 'removeClass';
        this.renderer[action](div, 'disabled');
    };
    return Part1Component;
}());
__decorate([
    core_1.ViewChild('textarea')
], Part1Component.prototype, "textarea", void 0);
Part1Component = __decorate([
    core_1.Component({
        selector: 'app-part1',
        templateUrl: './part1.component.html',
        styleUrls: ['./part1.component.scss'],
        providers: [exports.EPANDED_TEXTAREA_VALUE_ACCESSOR]
    })
], Part1Component);
exports.Part1Component = Part1Component;
