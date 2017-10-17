"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TooltipDirective = (function () {
    function TooltipDirective(elementRef) {
        this.elementRef = elementRef;
        this.tooltipOffset = 8;
        this.tooltipText = "";
        this.placement = "bottom";
        this.delay = 0;
        this.showDelay = 0;
        this.hideDelay = 300;
        this.zIndex = false;
    }
    TooltipDirective.prototype.onMouseEnter = function () {
        this.getElemPosition();
        document.body.appendChild(this.createElem());
        this.setPosition();
    };
    TooltipDirective.prototype.onMouseLeave = function () {
        this.removeElem();
    };
    TooltipDirective.prototype.getElemPosition = function () {
        this.elemPosition = this.elementRef.nativeElement.getBoundingClientRect();
    };
    TooltipDirective.prototype.createElem = function () {
        var _this = this;
        this.showDelay = this.delay || this.showDelay;
        if (this.tooltip)
            this.tooltip.remove();
        this.tooltip = document.createElement('span');
        this.tooltip.className += "hnn-tooltip hnn-tooltip-" + this.placement;
        this.tooltip.textContent = this.tooltipText;
        if (this.zIndex)
            this.tooltip.style.zIndex = this.zIndex;
        setTimeout(function () {
            _this.tooltip.className += " hnn-tooltip-show";
        }, this.showDelay);
        return this.tooltip;
    };
    TooltipDirective.prototype.removeElem = function () {
        var _this = this;
        this.tooltip.classList.remove("hnn-tooltip-show");
        setTimeout(function () {
            _this.tooltip.remove();
        }, this.hideDelay);
    };
    TooltipDirective.prototype.setPosition = function () {
        var elemHeight = this.elementRef.nativeElement.offsetHeight;
        var elemWidth = this.elementRef.nativeElement.offsetWidth;
        var tooltipHeight = this.tooltip.clientHeight;
        var tooltipWidth = this.tooltip.offsetWidth;
        if (this.placement == 'top') {
            this.tooltip.style.top = (this.elemPosition.top + window.scrollY) - (tooltipHeight + this.tooltipOffset) + 'px';
        }
        if (this.placement == 'bottom') {
            this.tooltip.style.top = (this.elemPosition.top + window.scrollY) + elemHeight + this.tooltipOffset + 'px';
        }
        if (this.placement == 'top' || this.placement == 'bottom') {
            this.tooltip.style.left = (this.elemPosition.left + elemWidth / 2) - tooltipWidth / 2 + 'px';
        }
        if (this.placement == 'left') {
            this.tooltip.style.left = this.elemPosition.left - tooltipWidth - this.tooltipOffset + 'px';
        }
        if (this.placement == 'right') {
            this.tooltip.style.left = this.elemPosition.left + elemWidth + this.tooltipOffset + 'px';
        }
        if (this.placement == 'left' || this.placement == 'right') {
            this.tooltip.style.top = (this.elemPosition.top + window.scrollY) + elemHeight / 2 - this.tooltip.clientHeight / 2 + 'px';
        }
    };
    return TooltipDirective;
}());
__decorate([
    core_1.Input('tooltip')
], TooltipDirective.prototype, "tooltipText", void 0);
__decorate([
    core_1.Input()
], TooltipDirective.prototype, "placement", void 0);
__decorate([
    core_1.Input()
], TooltipDirective.prototype, "delay", void 0);
__decorate([
    core_1.Input('show-delay')
], TooltipDirective.prototype, "showDelay", void 0);
__decorate([
    core_1.Input('hide-delay')
], TooltipDirective.prototype, "hideDelay", void 0);
__decorate([
    core_1.Input('z-index')
], TooltipDirective.prototype, "zIndex", void 0);
__decorate([
    core_1.HostListener("focusin"),
    core_1.HostListener("mouseenter")
], TooltipDirective.prototype, "onMouseEnter", null);
__decorate([
    core_1.HostListener("focusout"),
    core_1.HostListener("mouseleave")
], TooltipDirective.prototype, "onMouseLeave", null);
TooltipDirective = __decorate([
    core_1.Directive({
        selector: '[tooltip]'
    })
], TooltipDirective);
exports.TooltipDirective = TooltipDirective;
