"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dynamic_directive_1 = require("../models/dynamic.directive");
// import {Subscription} from 'rxjs/Subscription';
var LoadViewComponent = (function () {
    function LoadViewComponent(componentFactoryResolver) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.currentAddIndex = -1;
    }
    LoadViewComponent.prototype.ngOnInit = function () {
        this.loadComponent();
        this.getAds();
    };
    LoadViewComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.numInterval);
    };
    LoadViewComponent.prototype.loadComponent = function () {
        this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
        var adItem = this.ads[this.currentAddIndex];
        var componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);
        var viewContainerRef = this.directiveDynamic.viewContainerRef;
        viewContainerRef.clear();
        var componentRef = viewContainerRef.createComponent(componentFactory);
        componentRef.instance.infomation = adItem.data;
    };
    LoadViewComponent.prototype.getAds = function () {
        var _this = this;
        this.numInterval = setInterval(function () {
            _this.loadComponent();
        }, 1000);
    };
    return LoadViewComponent;
}());
__decorate([
    core_1.Input()
], LoadViewComponent.prototype, "ads", void 0);
__decorate([
    core_1.ViewChild(dynamic_directive_1.DynamicDirective)
], LoadViewComponent.prototype, "directiveDynamic", void 0);
LoadViewComponent = __decorate([
    core_1.Component({
        selector: 'app-load-view',
        templateUrl: './load-view.component.html',
        styleUrls: ['./load-view.component.scss'],
    })
], LoadViewComponent);
exports.LoadViewComponent = LoadViewComponent;
