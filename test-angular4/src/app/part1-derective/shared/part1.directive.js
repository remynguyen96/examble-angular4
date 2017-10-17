"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Part1Directive = (function () {
    function Part1Directive(renderer, elm) {
        this.renderer = renderer;
        this.elm = elm;
        this.onCopy = new core_1.EventEmitter();
        this.element = elm.nativeElement;
    }
    Part1Directive.prototype.onDblClick = function (event) {
        var selection = getSelection();
        var range = document.createRange();
        range.selectNodeContents(this.element);
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        this.onCopy.emit(range);
        this.renderer.setStyle(this.element, 'background', '#FF260F');
        console.log("Copied " + range + " to your clipboard!");
    };
    Part1Directive.prototype.removeStyle = function () {
        this.renderer.setStyle(this.element, 'background', 'transparent');
    };
    return Part1Directive;
}());
__decorate([
    core_1.Output()
], Part1Directive.prototype, "onCopy", void 0);
__decorate([
    core_1.HostListener('dblclick', ['$event'])
], Part1Directive.prototype, "onDblClick", null);
__decorate([
    core_1.HostListener('mouseleave')
], Part1Directive.prototype, "removeStyle", null);
Part1Directive = __decorate([
    core_1.Directive({
        selector: '[dbl-click-copy]'
    })
], Part1Directive);
exports.Part1Directive = Part1Directive;
