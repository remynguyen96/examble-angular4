"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var ModalComponent = (function () {
    function ModalComponent() {
        this.visibleChange = new core_1.EventEmitter();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.close = function () {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    };
    return ModalComponent;
}());
__decorate([
    core_1.Input()
], ModalComponent.prototype, "visible", void 0);
__decorate([
    core_1.Input()
], ModalComponent.prototype, "visibleChange", void 0);
ModalComponent = __decorate([
    core_1.Component({
        selector: 'app-modal',
        templateUrl: './modal.component.html',
        styleUrls: ['./modal.component.scss'],
        animations: [
            animations_1.trigger('dialog', [
                animations_1.transition(':enter', [
                    animations_1.style({ transform: 'scale3d(.3,.3,.3)' }),
                    animations_1.animate(100)
                ]),
                animations_1.transition(':leave', [
                    animations_1.animate(100, animations_1.style({ transform: 'scale3d(.0,.0,.0)' }))
                ]),
            ]),
        ],
    })
], ModalComponent);
exports.ModalComponent = ModalComponent;
