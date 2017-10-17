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
var ReactiveFormComponent = (function () {
    function ReactiveFormComponent() {
        this.control = new forms_1.FormControl();
        this.control2 = new forms_1.FormControl(['a@a.com']);
    }
    ReactiveFormComponent.prototype.ngAfterViewInit = function () {
        // outputs `I am span`
        console.log(this.tref.nativeElement.textContent);
    };
    return ReactiveFormComponent;
}());
__decorate([
    core_1.ViewChild("tref", { read: core_1.ElementRef })
], ReactiveFormComponent.prototype, "tref", void 0);
ReactiveFormComponent = __decorate([
    core_1.Component({
        selector: 'app-reactive-form',
        templateUrl: './reactive-form.component.html',
        styleUrls: ['./reactive-form.component.scss']
    })
], ReactiveFormComponent);
exports.ReactiveFormComponent = ReactiveFormComponent;
