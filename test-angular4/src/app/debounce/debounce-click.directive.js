"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Subject_1 = require("rxjs/Subject");
require("rxjs/add/operator/debounceTime");
var DebounceClickDirective = (function () {
    function DebounceClickDirective() {
        this.time = 500;
        this.debounceClick = new core_1.EventEmitter();
        this.clicks = new Subject_1.Subject();
    }
    DebounceClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription =
            this.clicks.debounceTime(this.time).subscribe(function (e) { return _this.debounceClick.emit(e); });
    };
    DebounceClickDirective.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    DebounceClickDirective.prototype.clickEvent = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
        console.log('click from host element !');
    };
    return DebounceClickDirective;
}());
__decorate([
    core_1.Input()
], DebounceClickDirective.prototype, "time", void 0);
__decorate([
    core_1.Output()
], DebounceClickDirective.prototype, "debounceClick", void 0);
__decorate([
    core_1.HostListener('click', ['$event'])
], DebounceClickDirective.prototype, "clickEvent", null);
DebounceClickDirective = __decorate([
    core_1.Directive({
        selector: '[appDebounceClick]'
    })
], DebounceClickDirective);
exports.DebounceClickDirective = DebounceClickDirective;
