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
var custom_validators_1 = require("./custom-validators");
var FormComponent = (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.welcome = false;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.formTest();
    };
    FormComponent.prototype.formTest = function () {
        var _this = this;
        this.formData = this.formBuilder.group({
            name: this.formBuilder.control(null, [forms_1.Validators.required, forms_1.Validators.minLength(4)]),
            specialtySandwich: this.formBuilder.control(null),
            size: this.formBuilder.control(null),
            bread: this.formBuilder.control(null),
            weird: this.formBuilder.array([
                this.formBuilder.control(null)
            ]),
            meats: this.formBuilder.group({
                meatHam: this.formBuilder.control(null),
                meatTurkey: this.formBuilder.control(null),
                meatRoastBeef: this.formBuilder.control(null)
            }),
            cheeses: this.formBuilder.group({
                cheeseProvolone: this.formBuilder.control(null),
                cheeseCheddar: this.formBuilder.control(null),
                cheeseSwiss: this.formBuilder.control(null)
            }),
            veggiesAndSuch: this.formBuilder.group({
                veggieLettuce: this.formBuilder.control(null),
                veggieTomato: this.formBuilder.control(null),
                veggieMustard: this.formBuilder.control(null)
            })
        }, {
            validator: custom_validators_1.CustomValidators.requiredWhen('size', 'bread')
        });
        this.formArr = this.formData.get('weird');
        this.customerNameControl = this.formData.get('name');
        this.customerNameControl.valueChanges.subscribe(function (value) {
            _this.welcome = value && value.toLowerCase().trim() === 'Remy';
        });
    };
    FormComponent.prototype.onAddWeirdRequest = function () {
        this.formArr.push(this.formBuilder.control(null));
    };
    FormComponent.prototype.onRemoveWeirdRequest = function (index) {
        this.formArr.removeAt(index);
    };
    FormComponent.prototype.onResetForm = function () {
        this.formData.reset();
    };
    FormComponent.prototype.onSubmitForm = function () {
        console.log(this.formData.value);
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        selector: 'app-form',
        templateUrl: './form.component.html',
        styleUrls: ['./form.component.scss']
    })
], FormComponent);
exports.FormComponent = FormComponent;
