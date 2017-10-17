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
var Form2Component = (function () {
    function Form2Component() {
        this.options = [
            { id: 1, label: 'Option one' },
            { id: 2, label: 'Option two' },
            { id: 3, label: 'Option three' }
        ];
        this.control = new forms_1.FormControl(this.options[1]);
    }
    Form2Component.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.options = [
                { id: 1, label: 'Option one' },
                { id: 2, label: 'Option two' },
                { id: 3, label: 'Option three' },
                { id: 4, label: 'Option four' }
            ];
        }, 2000);
    };
    Form2Component.prototype.compareFn = function (optionOne, optionTwo) {
        return optionOne.id === optionTwo.id;
    };
    return Form2Component;
}());
Form2Component = __decorate([
    core_1.Component({
        selector: 'app-form2',
        templateUrl: './form2.component.html',
        styleUrls: ['./form2.component.scss']
    })
], Form2Component);
exports.Form2Component = Form2Component;
