"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var Part1Service = (function () {
    function Part1Service(title) {
        this.title = title;
        this.tooltips = new BehaviorSubject_1.BehaviorSubject('');
    }
    Part1Service.prototype.blink = function (msg, count) {
        var _this = this;
        if (count === void 0) { count = 5; }
        var prevTitle = this.title.getTitle();
        var step = function () {
            var newTitle = _this.title.getTitle() === prevTitle ? msg : prevTitle;
            _this.title.setTitle(newTitle);
            if (--count) {
                _this.timeout = setTimeout(step.bind(_this), 1000);
            }
            else {
                _this.title.setTitle(prevTitle);
            }
        };
        clearTimeout(this.timeout);
        step();
    };
    return Part1Service;
}());
Part1Service = __decorate([
    core_1.Injectable()
], Part1Service);
exports.Part1Service = Part1Service;
