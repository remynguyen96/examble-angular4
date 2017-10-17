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
exports.SPLITTER_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return SplitterControlDirective; }),
    multi: true,
};
var SplitterControlDirective = (function () {
    function SplitterControlDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
    }
    SplitterControlDirective.prototype.input = function (value) {
        this.onChange(value.split(',').filter(Boolean));
    };
    SplitterControlDirective.prototype.writeValue = function (value) {
        var element = this.element.nativeElement;
        this.renderer.setProperty(element, 'value', value.join(','));
    };
    SplitterControlDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SplitterControlDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return SplitterControlDirective;
}());
__decorate([
    core_1.HostListener('input', ['$event.target.value'])
], SplitterControlDirective.prototype, "input", null);
SplitterControlDirective = __decorate([
    core_1.Directive({
        selector: '[appSplitterControl]',
        providers: [exports.SPLITTER_VALUE_ACCESSOR]
    })
], SplitterControlDirective);
exports.SplitterControlDirective = SplitterControlDirective;
