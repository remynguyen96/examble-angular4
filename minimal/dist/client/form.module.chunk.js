webpackJsonp(["form.module"],{

/***/ "../../../../../src/app/form/form-part1/form-error/form-error.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"errorMessage !== null\">{{errorMessage}}</ng-container>"

/***/ }),

/***/ "../../../../../src/app/form/form-part1/form-error/form-error.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form-part1/form-error/form-error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormErrorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_service_service__ = __webpack_require__("../../../../../src/app/form/form-part1/form-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormErrorComponent = (function () {
    function FormErrorComponent() {
    }
    Object.defineProperty(FormErrorComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return __WEBPACK_IMPORTED_MODULE_2__form_service_service__["a" /* ValidationService */].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    return FormErrorComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* AbstractControl */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* AbstractControl */]) === "function" && _a || Object)
], FormErrorComponent.prototype, "control", void 0);
FormErrorComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form-error',
        template: __webpack_require__("../../../../../src/app/form/form-part1/form-error/form-error.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form-part1/form-error/form-error.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FormErrorComponent);

var _a;
//# sourceMappingURL=form-error.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-part1/form-part1.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formData\" novalidate>\n    <div class=\"form-control\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" id=\"name\" formControlName=\"name\">\n        <p>\n            <app-form-error [control]=\"formData.controls.name\"></app-form-error>\n        </p>\n        {{formData.controls.name.errors | json}}\n    </div>\n    <div class=\"form-control\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" id=\"email\" formControlName=\"email\">\n        <p>\n            <app-form-error [control]=\"formData.controls.email\"></app-form-error>\n        </p>\n        {{formData.controls.email.errors | json}}\n    </div>\n    <div class=\"form-control\">\n        <label for=\"description\">Description</label>\n        <textarea id=\"description\" formControlName=\"description\" cols=\"30\" rows=\"10\"></textarea>\n        <p>\n            <app-form-error [control]=\"formData.controls.description\"></app-form-error>\n        </p>\n        {{formData.controls.description.errors | json}}\n    </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/form/form-part1/form-part1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  width: 100%;\n  display: block;\n  margin-bottom: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form-part1/form-part1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPart1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_service_service__ = __webpack_require__("../../../../../src/app/form/form-part1/form-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormPart1Component = (function () {
    function FormPart1Component(formBuilder) {
        this.formBuilder = formBuilder;
        this.loadFormData();
    }
    FormPart1Component.prototype.ngOnInit = function () {
    };
    FormPart1Component.prototype.loadFormData = function () {
        this.formData = this.formBuilder.group({
            // name: this.formBuilder.control(null, Validators.required),
            // email: this.formBuilder.control(null, Validators.required),
            // description: this.formBuilder.control(null,Validators.required)
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__form_service_service__["a" /* ValidationService */].emailValidator]]
        });
    };
    FormPart1Component.prototype.onSubmit = function () {
    };
    return FormPart1Component;
}());
FormPart1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form-part1',
        template: __webpack_require__("../../../../../src/app/form/form-part1/form-part1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form-part1/form-part1.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object])
], FormPart1Component);

var _a;
//# sourceMappingURL=form-part1.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-part1/form-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (validatorName, validatorValue) {
        var config = {
            'required': 'Required',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Minimum length " + validatorValue.requiredLength
        };
        return config[validatorName];
    };
    ValidationService.creditCardValidator = function (control) {
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.validateEmail = function (controlName) {
        var Email_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return Email_REGEXP.test(controlName.value) ? null : { validateEmail: true };
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());

//# sourceMappingURL=form-service.service.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-part2/form-part2.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Angular Custom Form Control</h1>\n  <h3>Reactive Forms</h3>\n<form [formGroup]=\"myForm\" (ngSubmit)=\"submit()\">\n  <app-switch formControlName=\"mySwitch\" [label]=\"'My Switch'\"></app-switch>\n  <button>Submit</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/form/form-part2/form-part2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form-part2/form-part2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPart2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormPart2Component = (function () {
    function FormPart2Component(formBuilder) {
        this.formBuilder = formBuilder;
    }
    FormPart2Component.prototype.ngOnInit = function () {
        this.myForm = this.formBuilder.group({
            // mySwitch: this.formBuilder.control(true)
            mySwitch: [false]
        });
    };
    FormPart2Component.prototype.submit = function () {
        alert("Value: " + this.myForm.controls.mySwitch.value);
        console.log("Value: " + this.myForm.controls.mySwitch.value);
    };
    return FormPart2Component;
}());
FormPart2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form-part2',
        template: __webpack_require__("../../../../../src/app/form/form-part2/form-part2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form-part2/form-part2.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object])
], FormPart2Component);

var _a;
//# sourceMappingURL=form-part2.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-part2/switch/switch.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"switch()\" class=\"switch\" [ngClass]=\"{'checked': valueSwitch}\" [attr.title]=\"label\">\n    <input type=\"checkbox\" class=\"switch-input\" [value]=\"valueSwitch\" [attr.checked]=\"valueSwitch\" [attr.aria-label]=\"label\">\n    <span class=\"switch-label\" data-on=\"On\" data-off=\"Off\"></span>\n    <span class=\"switch-handle\"></span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/form/form-part2/switch/switch.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".switch {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: 80px;\n  height: 30px;\n  padding: 3px;\n  background-color: none;\n  cursor: pointer;\n  overflow: visible; }\n\n.switch-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0; }\n\n.switch-label {\n  position: relative;\n  display: block;\n  height: inherit;\n  font-size: 16px;\n  font-weight: normal;\n  text-transform: uppercase;\n  background: #ccc;\n  border-radius: 20px;\n  transition: 0.15s ease-out;\n  transition-property: opacity background;\n  color: #2d2d2d; }\n\n.switch-label::before, .switch-label::after {\n  position: absolute;\n  top: 50%;\n  margin-top: -.5em;\n  line-height: 1;\n  transition: inherit; }\n\n.switch-label::before {\n  content: attr(data-off);\n  right: 11px;\n  color: #fff;\n  transition: all .4s; }\n\n.switch-label::after {\n  content: attr(data-on);\n  left: 11px;\n  color: #fff;\n  opacity: 0;\n  transition: all .4s; }\n\n.switch-handle {\n  position: absolute;\n  top: 9px;\n  left: 12px;\n  width: 18px;\n  height: 18px;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: 1px 1px 5px #2d2d2d;\n  transition: left 0.15s ease-out; }\n\n.checked .switch-label {\n  background: #4CAF50;\n  box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.5), inset 0 0 3px rgba(0, 0, 0, 0.15); }\n\n.checked .switch-label::before {\n  opacity: 0; }\n\n.checked .switch-label::after {\n  opacity: 1; }\n\n.checked .switch-handle {\n  left: 50px;\n  box-shadow: -1px 1px 5px rgba(45, 45, 45, 0.41); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form-part2/switch/switch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* forwardRef */])(function () { return SwitchComponent; }),
    multi: true
};
var SwitchComponent = (function () {
    function SwitchComponent() {
        this.label = 'switch';
        this.onChange = function () { };
        this.onTouched = function () { };
    }
    Object.defineProperty(SwitchComponent.prototype, "valueSwitch", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.onChange(val);
            this.onTouched();
        },
        enumerable: true,
        configurable: true
    });
    SwitchComponent.prototype.writeValue = function (value) {
        console.log(value);
        if (value) {
            this.valueSwitch = value;
        }
    };
    SwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    SwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SwitchComponent.prototype.switch = function () {
        this.valueSwitch = !this.valueSwitch;
    };
    return SwitchComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SwitchComponent.prototype, "label", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])('value'),
    __metadata("design:type", Object)
], SwitchComponent.prototype, "_value", void 0);
SwitchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-switch',
        template: __webpack_require__("../../../../../src/app/form/form-part2/switch/switch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form-part2/switch/switch.component.scss")],
        providers: [VALUE_ACCESSOR]
    })
], SwitchComponent);

//# sourceMappingURL=switch.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-part3/form-part3.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <input type=\"text\" class=\"form-control\" [formControl]=\"testInput\">\n    {{testInput | json}}\n</div>"

/***/ }),

/***/ "../../../../../src/app/form/form-part3/form-part3.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\n  padding: 5px 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form-part3/form-part3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPart3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormPart3Component = (function () {
    function FormPart3Component() {
        this.testInput = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormControl */]();
    }
    FormPart3Component.prototype.ngOnInit = function () {
    };
    FormPart3Component.prototype.onSubmit = function () {
        console.log(this.testInput);
    };
    return FormPart3Component;
}());
FormPart3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form-part3',
        template: __webpack_require__("../../../../../src/app/form/form-part3/form-part3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form-part3/form-part3.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FormPart3Component);

//# sourceMappingURL=form-part3.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-part3/spilit-input.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpilitInputDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VALUE_ACCESSTOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* forwardRef */])(function () { return SpilitInputDirective; }),
    multi: true
};
var SpilitInputDirective = (function () {
    function SpilitInputDirective(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.onTouched = function () { };
        this.onChange = function () { };
    }
    SpilitInputDirective.prototype.changeInput = function (value) {
        this.onChange(value.split(',').filter(Boolean));
    };
    SpilitInputDirective.prototype.writeValue = function (value) {
        console.log(value);
        var element = this.element.nativeElement;
        // this.renderer.setProperty(element,'value', value.join(','));
    };
    SpilitInputDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    SpilitInputDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    return SpilitInputDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('input', ['$event.target.value']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SpilitInputDirective.prototype, "changeInput", null);
SpilitInputDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[appSpilitInput]',
        providers: [VALUE_ACCESSTOR]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Renderer2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Renderer2 */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object])
], SpilitInputDirective);

var _a, _b;
//# sourceMappingURL=spilit-input.directive.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-part4/form-part4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPart4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VALUE_ACCESSTOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["h" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* forwardRef */])(function () { return FormPart4Component; }),
    multi: true,
};
var FormPart4Component = (function () {
    function FormPart4Component() {
        this.stars = new Array(5).fill(false);
        this.onTouched = function () { };
        this.onChange = function (rating) { };
        this.disabled = false;
    }
    Object.defineProperty(FormPart4Component.prototype, "opacity", {
        get: function () {
            return this.disabled ? 0.25 : 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormPart4Component.prototype, "value", {
        get: function () {
            return this.stars.reduce(function (total, starred) {
                return total + (starred ? 1 : 0);
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    FormPart4Component.prototype.rate = function (rating) {
        if (!this.disabled) {
            this.writeValue(rating);
        }
    };
    FormPart4Component.prototype.writeValue = function (rating) {
        this.stars = this.stars.map(function (_, i) {
            return rating > i;
        });
        this.onChange(this.value);
    };
    FormPart4Component.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    FormPart4Component.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    FormPart4Component.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return FormPart4Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], FormPart4Component.prototype, "disabled", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('style.opacity'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], FormPart4Component.prototype, "opacity", null);
FormPart4Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form-part4',
        template: "\n        <!--  <style>\n              span {\n                  display: inline-block;\n                  width: 25px;\n                  line-height: 25px;\n                  text-align: center;\n                  cursor: pointer;\n              }\n          </style>-->\n        <span *ngFor=\"let starred of stars; let i = index\"\n              (click)=\"onTouched(); rate(i + (starred ? (value > i + 1 ? 1 : 0) : 1) )\">\n          <ng-container *ngIf=\"starred; else noStar\">\u2B50</ng-container>\n          <ng-template #noStar>\u00B7</ng-template>\n        </span>\n    ",
        styles: ["\n        span {\n            display: inline-block;\n            width: 25px;\n            line-height: 25px;\n            text-align: center;\n            cursor: pointer;\n        }\n    "],
        providers: [VALUE_ACCESSTOR]
    })
], FormPart4Component);

//# sourceMappingURL=form-part4.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-part5/container/container.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n    <span>Search Username</span>\n    <md-toolbar-row>\n        <form [formGroup]=\"form\" fxLayout=\"row\" fxFlex=\"40\" fxFlexOffset=\"30\">\n            <md-input-container fxFlex=\"100\" color=\"accent\">\n                <input mdInput placeholder=\"Username\" formControlName=\"username\">\n            </md-input-container>\n        </form>\n        <span fxFlex></span>\n        <md-icon>favorite</md-icon>\n    </md-toolbar-row>\n</md-toolbar>\n\n<div fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutGap=\"15px\">\n    <div *ngFor=\"let item of users\" fxFlex>\n        <h4>{{item.login}}</h4>\n        <img src=\"{{item.avatar_url}}\" alt=\"\" style=\"width: 120px;height: 120px\">\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/form/form-part5/container/container.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form-part5/container/container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContainerComponent = (function () {
    function ContainerComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    ContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.formBuilder.group({
            username: [null]
        });
        this._subscription = this.form.valueChanges
            .map(function (values) { return values.username; })
            .subscribe(function (result) {
            _this.observer.next(result);
        });
    };
    ContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    return ContainerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]) === "function" && _a || Object)
], ContainerComponent.prototype, "observer", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], ContainerComponent.prototype, "users", void 0);
ContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-container',
        template: __webpack_require__("../../../../../src/app/form/form-part5/container/container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form-part5/container/container.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object])
], ContainerComponent);

var _a, _b;
//# sourceMappingURL=container.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-part5/form-part5.component.html":
/***/ (function(module, exports) {

module.exports = "<app-container\n        [observer]=\"subject\"\n        [users]=\"users | async\">\n</app-container>"

/***/ }),

/***/ "../../../../../src/app/form/form-part5/form-part5.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form-part5/form-part5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPart5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_search_service__ = __webpack_require__("../../../../../src/app/form/form-part5/user-search.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormPart5Component = (function () {
    function FormPart5Component(service) {
        this.service = service;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    FormPart5Component.prototype.ngOnInit = function () {
        var _this = this;
        this.users = this.subject
            .debounceTime(1000)
            .distinctUntilChanged()
            .switchMap(function (username) { return _this.service.searchUsers(username); });
    };
    return FormPart5Component;
}());
FormPart5Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form-part5',
        template: __webpack_require__("../../../../../src/app/form/form-part5/form-part5.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form-part5/form-part5.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_5__user_search_service__["a" /* UserSearchService */]],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectionStrategy */].OnPush,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__user_search_service__["a" /* UserSearchService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_search_service__["a" /* UserSearchService */]) === "function" && _a || Object])
], FormPart5Component);

var _a;
//# sourceMappingURL=form-part5.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-part5/user-search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserSearchService = (function () {
    function UserSearchService(_http) {
        this._http = _http;
    }
    UserSearchService.prototype.searchUsers = function (username) {
        return username ?
            this._http.get("https://api.github.com/search/users?q=" + username)
                .map(function (response) { return response.json(); })
                .map(function (content) { return content.items; }) :
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
    };
    return UserSearchService;
}());
UserSearchService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserSearchService);

var _a;
//# sourceMappingURL=user-search.service.js.map

/***/ }),

/***/ "../../../../../src/app/form/form-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_part1_form_part1_component__ = __webpack_require__("../../../../../src/app/form/form-part1/form-part1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_part2_form_part2_component__ = __webpack_require__("../../../../../src/app/form/form-part2/form-part2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_part4_form_part4_component__ = __webpack_require__("../../../../../src/app/form/form-part4/form-part4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_part3_form_part3_component__ = __webpack_require__("../../../../../src/app/form/form-part3/form-part3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_part5_form_part5_component__ = __webpack_require__("../../../../../src/app/form/form-part5/form-part5.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__form_component__["a" /* FormComponent */],
        children: [
            {
                path: 'part1',
                component: __WEBPACK_IMPORTED_MODULE_3__form_part1_form_part1_component__["a" /* FormPart1Component */]
            },
            {
                path: 'part2',
                component: __WEBPACK_IMPORTED_MODULE_4__form_part2_form_part2_component__["a" /* FormPart2Component */]
            },
            {
                path: 'part3',
                component: __WEBPACK_IMPORTED_MODULE_6__form_part3_form_part3_component__["a" /* FormPart3Component */]
            },
            {
                path: 'part4',
                component: __WEBPACK_IMPORTED_MODULE_5__form_part4_form_part4_component__["a" /* FormPart4Component */]
            },
            {
                path: 'part5',
                component: __WEBPACK_IMPORTED_MODULE_7__form_part5_form_part5_component__["a" /* FormPart5Component */]
            },
        ]
    }
];
var FormRoutingModule = (function () {
    function FormRoutingModule() {
    }
    return FormRoutingModule;
}());
FormRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], FormRoutingModule);

//# sourceMappingURL=form-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent(meta, title) {
        title.setTitle('Minimal | Form');
        meta.updateTag({ name: 'keywords', content: 'Formodule Key words for angular seo, angular 4 universal' });
        meta.updateTag({ name: 'description', content: 'Name Description For Form Angular 4' });
        meta.updateTag({ property: 'og:title', content: 'Property Title For Form Angular 4' });
        meta.updateTag({ property: 'og:description', content: 'Property Description For Form Angular 4' });
        meta.updateTag({
            property: 'og:image',
            content: 'https://images.unsplash.com/photo-1478766318990-362013e9cd01?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='
        });
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    return FormComponent;
}());
FormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-form',
        template: __webpack_require__("../../../../../src/app/form/form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */]) === "function" && _b || Object])
], FormComponent);

var _a, _b;
//# sourceMappingURL=form.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_routing_module__ = __webpack_require__("../../../../../src/app/form/form-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form_component__ = __webpack_require__("../../../../../src/app/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_part2_form_part2_component__ = __webpack_require__("../../../../../src/app/form/form-part2/form-part2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_part2_switch_switch_component__ = __webpack_require__("../../../../../src/app/form/form-part2/switch/switch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_part3_form_part3_component__ = __webpack_require__("../../../../../src/app/form/form-part3/form-part3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_part4_form_part4_component__ = __webpack_require__("../../../../../src/app/form/form-part4/form-part4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__form_part3_spilit_input_directive__ = __webpack_require__("../../../../../src/app/form/form-part3/spilit-input.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__form_part1_form_error_form_error_component__ = __webpack_require__("../../../../../src/app/form/form-part1/form-error/form-error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__form_part1_form_part1_component__ = __webpack_require__("../../../../../src/app/form/form-part1/form-part1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__form_part5_form_part5_component__ = __webpack_require__("../../../../../src/app/form/form-part5/form-part5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__form_part5_container_container_component__ = __webpack_require__("../../../../../src/app/form/form-part5/container/container.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var FormModule = (function () {
    function FormModule() {
    }
    return FormModule;
}());
FormModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__form_routing_module__["a" /* FormRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_11__share_module_share_module_module__["a" /* ShareModuleModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__form_component__["a" /* FormComponent */],
            __WEBPACK_IMPORTED_MODULE_10__form_part1_form_part1_component__["a" /* FormPart1Component */],
            __WEBPACK_IMPORTED_MODULE_9__form_part1_form_error_form_error_component__["a" /* FormErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_4__form_part2_form_part2_component__["a" /* FormPart2Component */],
            __WEBPACK_IMPORTED_MODULE_5__form_part2_switch_switch_component__["a" /* SwitchComponent */],
            __WEBPACK_IMPORTED_MODULE_6__form_part3_form_part3_component__["a" /* FormPart3Component */],
            __WEBPACK_IMPORTED_MODULE_7__form_part4_form_part4_component__["a" /* FormPart4Component */],
            __WEBPACK_IMPORTED_MODULE_8__form_part3_spilit_input_directive__["a" /* SpilitInputDirective */],
            __WEBPACK_IMPORTED_MODULE_12__form_part5_form_part5_component__["a" /* FormPart5Component */],
            __WEBPACK_IMPORTED_MODULE_13__form_part5_container_container_component__["a" /* ContainerComponent */]
        ]
    })
], FormModule);

//# sourceMappingURL=form.module.js.map

/***/ })

});
//# sourceMappingURL=form.module.chunk.js.map