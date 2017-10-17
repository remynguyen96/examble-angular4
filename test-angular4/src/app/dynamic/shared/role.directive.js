"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/do");
require("rxjs/add/operator/filter");
var RoleDirective = (function () {
    function RoleDirective(templateRef, viewContainerRef, dynamicService) {
        this.templateRef = templateRef;
        this.viewContainerRef = viewContainerRef;
        this.dynamicService = dynamicService;
    }
    RoleDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.user$ = this.dynamicService.user()
            .do(function () { return _this.viewContainerRef.clear(); })
            .filter(function (user) { return user.role === _this.roleName; })
            .subscribe(function () {
            _this.viewContainerRef.createEmbeddedView(_this.templateRef);
        });
    };
    RoleDirective.prototype.ngOnDestroy = function () {
        this.user$.unsubscribe();
    };
    return RoleDirective;
}());
__decorate([
    core_1.Input('ifRole')
], RoleDirective.prototype, "roleName", void 0);
RoleDirective = __decorate([
    core_1.Directive({
        selector: '[ifRole]'
    })
], RoleDirective);
exports.RoleDirective = RoleDirective;
