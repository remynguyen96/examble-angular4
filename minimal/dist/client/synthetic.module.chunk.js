webpackJsonp(["synthetic.module"],{

/***/ "../../../../../src/app/synthetic/synthetic-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyntheticRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__synthetic_component__ = __webpack_require__("../../../../../src/app/synthetic/synthetic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__synthetic_component__["a" /* SyntheticComponent */],
    }
];
var SyntheticRoutingModule = (function () {
    function SyntheticRoutingModule() {
    }
    return SyntheticRoutingModule;
}());
SyntheticRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], SyntheticRoutingModule);

//# sourceMappingURL=synthetic-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/synthetic/synthetic.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  synthetic works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/synthetic/synthetic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/synthetic/synthetic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SyntheticComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SyntheticComponent = (function () {
    function SyntheticComponent() {
    }
    SyntheticComponent.prototype.ngOnInit = function () {
    };
    return SyntheticComponent;
}());
SyntheticComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-synthetic',
        template: __webpack_require__("../../../../../src/app/synthetic/synthetic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/synthetic/synthetic.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SyntheticComponent);

//# sourceMappingURL=synthetic.component.js.map

/***/ }),

/***/ "../../../../../src/app/synthetic/synthetic.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyntheticModule", function() { return SyntheticModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__synthetic_routing_module__ = __webpack_require__("../../../../../src/app/synthetic/synthetic-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__synthetic_component__ = __webpack_require__("../../../../../src/app/synthetic/synthetic.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SyntheticModule = (function () {
    function SyntheticModule() {
    }
    return SyntheticModule;
}());
SyntheticModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__synthetic_routing_module__["a" /* SyntheticRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__synthetic_component__["a" /* SyntheticComponent */]
        ]
    })
], SyntheticModule);

//# sourceMappingURL=synthetic.module.js.map

/***/ })

});
//# sourceMappingURL=synthetic.module.chunk.js.map