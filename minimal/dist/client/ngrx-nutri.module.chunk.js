webpackJsonp(["ngrx-nutri.module"],{

/***/ "../../../../../src/app/ngrx-nutri/food-detail/food-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  food-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/food-detail/food-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/food-detail/food-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodDetailComponent; });
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

var FoodDetailComponent = (function () {
    function FoodDetailComponent() {
    }
    FoodDetailComponent.prototype.ngOnInit = function () {
    };
    return FoodDetailComponent;
}());
FoodDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-food-detail',
        template: __webpack_require__("../../../../../src/app/ngrx-nutri/food-detail/food-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ngrx-nutri/food-detail/food-detail.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FoodDetailComponent);

//# sourceMappingURL=food-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/food-list/food-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom: 30px\" fxLayoutAlign=\"row\" fxLayoutWrap=\"wrap\" fxLayoutGap=\"15px\" *ngIf=\"(listResult | async)\">\n  <md-card class=\"example-card\" fxFlex=\"30\"  *ngFor=\"let item of (listResult | async); let key = index\">\n    <md-card-header>\n      <div md-card-avatar>\n        <img src=\"{{item.author.avatar}}\" alt=\"{{item.author.name}}\">\n      </div>\n      <md-card-title>{{item.title}}</md-card-title>\n      <md-card-subtitle>{{item._id}}</md-card-subtitle>\n    </md-card-header>\n    <img md-card-image src=\"http://localhost:2222/images/blogs/{{item.images}}\" alt=\"{{item.title}}\">\n    <md-card-content>\n      <p [innerHTML]=\"item.description\"></p>\n    </md-card-content>\n    <md-card-actions>\n      <button md-raised-button color=\"warn\" (click)=\"onDelete(item)\">Delete</button>\n    </md-card-actions>\n  </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/food-list/food-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/food-list/food-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions__ = __webpack_require__("../../../../../src/app/ngrx-nutri/store/actions.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodListComponent = (function () {
    function FoodListComponent(store, router) {
        this.store = store;
        this.router = router;
    }
    FoodListComponent.prototype.ngOnInit = function () {
        this.listResult = this.store.select(function (state) { return state.nutriState.listResult; });
    };
    FoodListComponent.prototype.onDelete = function (detail) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_actions__["d" /* DeleteResult */](detail));
    };
    return FoodListComponent;
}());
FoodListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-food-list',
        template: __webpack_require__("../../../../../src/app/ngrx-nutri/food-list/food-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ngrx-nutri/food-list/food-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], FoodListComponent);

var _a, _b;
//# sourceMappingURL=food-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/food-result/food-result.component.html":
/***/ (function(module, exports) {

module.exports = "<md-progress-bar mode=\"indeterminate\" *ngIf=\"loading | async\" color=\"warn\"></md-progress-bar>\n<div fxLayoutAlign=\"row\" fxLayoutWrap=\"wrap\" fxLayoutGap=\"15px\" *ngIf=\"postDetail\">\n        <md-card >\n            <button md-raised-button color=\"accent\" (click)=\"addList(postDetail)\">Add List</button>\n            <md-card-header>\n                <img src=\"http://localhost:2222/images/blogs/{{postDetail?.images}}\"  style=\"width: 120px; height: 120px; border-radius: 50%\" alt=\"{{postDetail?.title}}\">\n                <p>{{postDetail?._id}}</p>\n                <p>{{postDetail?.title}}</p>\n            </md-card-header>\n            <md-card-content>\n                <div [innerHTML]=\"postDetail?.description\"></div>\n                <img src=\"{{postDetail?.author.avatar}}\"  alt=\"{{postDetail?.author.name}}\" style=\"width: 60px; height: 60px; border-radius: 50%\">\n                <p><strong>{{postDetail?.author.name}}</strong></p>\n                <p><strong>{{postDetail?.categories}}</strong></p>\n            </md-card-content>\n        </md-card>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/food-result/food-result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/food-result/food-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions__ = __webpack_require__("../../../../../src/app/ngrx-nutri/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FoodResultComponent = (function () {
    function FoodResultComponent(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
        this.resultPost = [];
    }
    FoodResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = this.store.select(function (state) { return state.nutriState.loading; });
        this.post = this.store.select(function (state) { return state.nutriState.searchReuslts; });
        this.subscription = this.post.subscribe(function (result) {
            _this.resultPost = result;
            var idPost = _this.route.snapshot.params.id;
            _this.postDetail = _this.resultPost.find(function (item) {
                if (item._id === idPost) {
                    // this.store.dispatch(new AllAction.FetchResultDone(item));
                    _this.loading = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(false);
                    return item;
                }
            });
        });
    };
    FoodResultComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FoodResultComponent.prototype.addList = function (postDetail) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_actions__["b" /* AddResult */](postDetail));
        this.router.navigate(['ngrx-nutrition/my-results']);
    };
    return FoodResultComponent;
}());
FoodResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-food-result',
        template: __webpack_require__("../../../../../src/app/ngrx-nutri/food-result/food-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ngrx-nutri/food-result/food-result.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _c || Object])
], FoodResultComponent);

var _a, _b, _c;
//# sourceMappingURL=food-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/models/search-result.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResult; });
var SearchResult = (function () {
    function SearchResult(object) {
        this.id = object.ndbno || '';
        this.name = object.name || '';
    }
    return SearchResult;
}());

//# sourceMappingURL=search-result.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/ngrx-nutri-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgrxNutriRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_nutri_component__ = __webpack_require__("../../../../../src/app/ngrx-nutri/ngrx-nutri.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__food_list_food_list_component__ = __webpack_require__("../../../../../src/app/ngrx-nutri/food-list/food-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_result_search_result_component__ = __webpack_require__("../../../../../src/app/ngrx-nutri/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__food_detail_food_detail_component__ = __webpack_require__("../../../../../src/app/ngrx-nutri/food-detail/food-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__food_result_food_result_component__ = __webpack_require__("../../../../../src/app/ngrx-nutri/food-result/food-result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ngrx_nutri_component__["a" /* NgrxNutriComponent */],
        children: [
            { path: 'my-results', component: __WEBPACK_IMPORTED_MODULE_3__food_list_food_list_component__["a" /* FoodListComponent */] },
            { path: 'my-results/:id', component: __WEBPACK_IMPORTED_MODULE_5__food_detail_food_detail_component__["a" /* FoodDetailComponent */] },
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_4__search_result_search_result_component__["a" /* SearchResultComponent */] },
            { path: 'result-search/:id', component: __WEBPACK_IMPORTED_MODULE_6__food_result_food_result_component__["a" /* FoodResultComponent */] },
        ]
    }
];
var NgrxNutriRoutingModule = (function () {
    function NgrxNutriRoutingModule() {
    }
    return NgrxNutriRoutingModule;
}());
NgrxNutriRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], NgrxNutriRoutingModule);

//# sourceMappingURL=ngrx-nutri-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/ngrx-nutri.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span>Search Nutrition Foods</span>\n  <md-toolbar-row>\n    <app-search-input></app-search-input>\n  </md-toolbar-row>\n</md-toolbar>\n\n<div style=\"width: 100%\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/ngrx-nutri.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/ngrx-nutri.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgrxNutriComponent; });
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

var NgrxNutriComponent = (function () {
    function NgrxNutriComponent() {
    }
    NgrxNutriComponent.prototype.ngOnInit = function () {
    };
    return NgrxNutriComponent;
}());
NgrxNutriComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ngrx-nutri',
        template: __webpack_require__("../../../../../src/app/ngrx-nutri/ngrx-nutri.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ngrx-nutri/ngrx-nutri.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NgrxNutriComponent);

//# sourceMappingURL=ngrx-nutri.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/ngrx-nutri.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxNutriModule", function() { return NgrxNutriModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_nutri_routing_module__ = __webpack_require__("../../../../../src/app/ngrx-nutri/ngrx-nutri-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_nutri_component__ = __webpack_require__("../../../../../src/app/ngrx-nutri/ngrx-nutri.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_input_search_input_component__ = __webpack_require__("../../../../../src/app/ngrx-nutri/search-input/search-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_result_search_result_component__ = __webpack_require__("../../../../../src/app/ngrx-nutri/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__food_detail_food_detail_component__ = __webpack_require__("../../../../../src/app/ngrx-nutri/food-detail/food-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__food_list_food_list_component__ = __webpack_require__("../../../../../src/app/ngrx-nutri/food-list/food-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__food_result_food_result_component__ = __webpack_require__("../../../../../src/app/ngrx-nutri/food-result/food-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_effects__ = __webpack_require__("../../../../../src/app/ngrx-nutri/store/effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_core__ = __webpack_require__("../../../../../src/app/ngrx-nutri/store/core.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_nutrition_service__ = __webpack_require__("../../../../../src/app/ngrx-nutri/shared/nutrition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var NgrxNutriModule = (function () {
    function NgrxNutriModule() {
    }
    return NgrxNutriModule;
}());
NgrxNutriModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_nutri_routing_module__["a" /* NgrxNutriRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__share_module_share_module_module__["a" /* ShareModuleModule */],
            __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_15__store_core__["a" /* RootReducerNutrition */]),
            __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_12__store_effects__["a" /* EffectsNutrition */]]),
            !__WEBPACK_IMPORTED_MODULE_13__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_14__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({ maxAge: 50 }) : []
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__ngrx_nutri_component__["a" /* NgrxNutriComponent */],
            __WEBPACK_IMPORTED_MODULE_4__search_input_search_input_component__["a" /* SearchInputComponent */],
            __WEBPACK_IMPORTED_MODULE_5__search_result_search_result_component__["a" /* SearchResultComponent */],
            __WEBPACK_IMPORTED_MODULE_6__food_detail_food_detail_component__["a" /* FoodDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__food_list_food_list_component__["a" /* FoodListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__food_result_food_result_component__["a" /* FoodResultComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__shared_nutrition_service__["a" /* NutritionService */]]
    })
], NgrxNutriModule);

//# sourceMappingURL=ngrx-nutri.module.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/search-input/search-input.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formData\">\n    <md-input-container color=\"accent\">\n        <input mdInput placeholder=\"Favorite food\" formControlName=\"search\">\n    </md-input-container>\n</form>"

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/search-input/search-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/search-input/search-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_actions__ = __webpack_require__("../../../../../src/app/ngrx-nutri/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SearchInputComponent = (function () {
    function SearchInputComponent(router, formBuilder, store) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.store = store;
    }
    SearchInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formData = this.formBuilder.group({
            search: this.formBuilder.control(null)
        });
        this.subscription = this.formData.valueChanges
            .debounceTime(800)
            .distinctUntilChanged()
            .map(function (result) { return (result.search).trim(); })
            .subscribe(function (result) {
            _this.router.navigate(['ngrx-nutrition/search'], { queryParams: { q: result.trim() } });
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_6__store_actions__["i" /* Search */](result));
        });
    };
    SearchInputComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return SearchInputComponent;
}());
SearchInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-input',
        template: __webpack_require__("../../../../../src/app/ngrx-nutri/search-input/search-input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ngrx-nutri/search-input/search-input.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["h" /* Store */]) === "function" && _c || Object])
], SearchInputComponent);

var _a, _b, _c;
//# sourceMappingURL=search-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<md-progress-bar mode=\"indeterminate\" *ngIf=\"loading | async\" color=\"accent\"></md-progress-bar>\n<div fxLayoutAlign=\"row\" fxLayoutWrap=\"wrap\" fxLayoutGap=\"15px\">\n    <div style=\"margin-bottom: 35px\" fxFlex=\"45\" *ngFor=\"let item of (searchResult | async)\">\n        <md-card >\n            <md-card-header>\n                <img (click)=\"moveState(item)\" src=\"http://localhost:2222/images/blogs/{{item.images}}\"  style=\"width: 120px; height: 120px; border-radius: 50%\">\n                <p>{{item._id}}</p>\n                <p>{{item.title}}</p>\n            </md-card-header>\n            <md-card-content>\n                <div (setHTML)=\"item.description\"></div>\n                <!--<div [innerHTML]=\"item.description\"></div>-->\n                <img src=\"{{item.author.avatar}}\"  style=\"width: 60px; height: 60px; border-radius: 50%\">\n                <p><strong>{{item.author.name}}</strong></p>\n                <p><strong>{{item.categories}}</strong></p>\n            </md-card-content>\n        </md-card>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/search-result/search-result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions__ = __webpack_require__("../../../../../src/app/ngrx-nutri/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchResultComponent = (function () {
    function SearchResultComponent(sanitizer, router, store) {
        this.sanitizer = sanitizer;
        this.router = router;
        this.store = store;
        this._anyHTML = 'lorem lorem lorem lorem lorem lorem  ';
    }
    Object.defineProperty(SearchResultComponent.prototype, "setValueHTML", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustHtml(this._anyHTML);
        },
        set: function (anyHTML) {
            this._anyHTML = anyHTML;
        },
        enumerable: true,
        configurable: true
    });
    SearchResultComponent.prototype.ngOnInit = function () {
        this.loading = this.store.select(function (state) { return state.nutriState.loading; });
        this.searchResult = this.store.select(function (state) { return state.nutriState.searchReuslts; });
    };
    SearchResultComponent.prototype.moveState = function (item) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_3__store_actions__["f" /* FetchResult */](item));
        this.router.navigate(['/ngrx-nutrition/result-search', item._id]);
    };
    SearchResultComponent.prototype.setHTML = function (textHTML) {
        return this.sanitizer.bypassSecurityTrustHtml(textHTML);
    };
    return SearchResultComponent;
}());
SearchResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-result',
        template: __webpack_require__("../../../../../src/app/ngrx-nutri/search-result/search-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ngrx-nutri/search-result/search-result.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _c || Object])
], SearchResultComponent);

var _a, _b, _c;
//# sourceMappingURL=search-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/shared/nutrition.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NutritionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_search_result__ = __webpack_require__("../../../../../src/app/ngrx-nutri/models/search-result.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NutritionService = (function () {
    function NutritionService(http) {
        this.http = http;
        this.urlServer = 'http://localhost:2222';
        this.token = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWExN2I2OTU5Zjg2NjZlNGM0OGI2YjEiLCJpYXQiOjE1MDM3NTUxMTMsImV4cCI6MTUwNDg3ODkxM30.7StKUmxAjBx5Dj_DtiqRnH83GXgJRGtTI03u7R88XmM';
        this.apiKey = 'KxhNfT3pMwlnn21HUCCs61iG2JwT9EmMrgOnOiU7';
    }
    NutritionService.prototype.searchFood = function (query) {
        var url = 'https://api.nal.usda.gov/ndb/search/?format=json&';
        var params = [
            "q=" + query,
            "sort=r",
            "max=25",
            "offset=0",
            "ds=Standard%20Reference",
            "api_key=" + this.apiKey // Your api key
        ].join('&');
        var queryURL = "" + url + params;
        return this.http.get(queryURL).map(function (response) {
            return response.json().list ? response.json().list.item.map(function (item) {
                return new __WEBPACK_IMPORTED_MODULE_4__models_search_result__["a" /* SearchResult */](item);
            }) : [];
        });
    };
    NutritionService.prototype.searchPost = function (query) {
        var url = "http://localhost:2222/api/blogs/search-blogs?q=" + query;
        return this.http.get(url).map(function (res) { return res.json(); });
    };
    NutritionService.prototype.fetchPost = function (query) {
        var url = "http://localhost:2222/api/blogs";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'X-Requested-With': 'XMLHttpRequest' });
        headers.append('Authorization', this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: headers
        });
        return this.http.get(url, options).map(function (res) { return res.json(); });
    };
    return NutritionService;
}());
NutritionService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NutritionService);

var _a;
//# sourceMappingURL=nutrition.service.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/store/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SEARCHRESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FETCHRESULT; });
/* unused harmony export FETCHRESULTDONE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADDRESULT; });
/* unused harmony export LISTRESULT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DELETERESULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SearchResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FetchResult; });
/* unused harmony export FetchResultDone */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddResult; });
/* unused harmony export ListResult */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DeleteResult; });
var SEARCH = '[SEARCH NUTRITION] Seacrh All About Nutrition';
var SEARCHRESULT = '[SEARCHRESULT NUTRITION] Search Result All About Nutrition';
var FETCHRESULT = '[FETCHRESULT NUTRITION] Fetch Result About Nutrition';
var FETCHRESULTDONE = '[FETCHRESULTDONE NUTRITION] Fetch Result About Nutrition';
var ADDRESULT = '[ADDRESULT NUTRITION] Add Result About Nutrition';
var LISTRESULT = '[LISTRESULT NUTRITION] List Result About Nutrition';
var DELETERESULT = '[DELETERESULT NUTRITION] Delete Result About Nutrition';
var Search = (function () {
    function Search(payload) {
        this.payload = payload;
        this.type = SEARCH;
    }
    return Search;
}());

var SearchResult = (function () {
    function SearchResult(payload) {
        this.payload = payload;
        this.type = SEARCHRESULT;
    }
    return SearchResult;
}());

var FetchResult = (function () {
    function FetchResult(payload) {
        this.payload = payload;
        this.type = FETCHRESULT;
    }
    return FetchResult;
}());

var FetchResultDone = (function () {
    function FetchResultDone(payload) {
        this.payload = payload;
        this.type = FETCHRESULTDONE;
    }
    return FetchResultDone;
}());

var AddResult = (function () {
    function AddResult(payload) {
        this.payload = payload;
        this.type = ADDRESULT;
    }
    return AddResult;
}());

var ListResult = (function () {
    function ListResult() {
        this.type = LISTRESULT;
    }
    return ListResult;
}());

var DeleteResult = (function () {
    function DeleteResult(payload) {
        this.payload = payload;
        this.type = DELETERESULT;
    }
    return DeleteResult;
}());

//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/store/core.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootReducerNutrition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__("../../../../../src/app/ngrx-nutri/store/reducers.ts");

var RootReducerNutrition = {
    nutriState: __WEBPACK_IMPORTED_MODULE_0__reducers__["a" /* NutriReducers */]
};
//# sourceMappingURL=core.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/store/effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EffectsNutrition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_actions__ = __webpack_require__("../../../../../src/app/ngrx-nutri/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_nutrition_service__ = __webpack_require__("../../../../../src/app/ngrx-nutri/shared/nutrition.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EffectsNutrition = (function () {
    function EffectsNutrition(action$, nutriService) {
        var _this = this;
        this.action$ = action$;
        this.nutriService = nutriService;
        // @Effect()
        this.search$ = this.action$.ofType(__WEBPACK_IMPORTED_MODULE_1__store_actions__["g" /* SEARCH */])
            .map(function (action) { return action.payload; })
            .switchMap(function (query) {
            return _this.nutriService.searchPost(query)
                .map(function (results) { return new __WEBPACK_IMPORTED_MODULE_1__store_actions__["j" /* SearchResult */](results); });
        });
    }
    return EffectsNutrition;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])({ dispatch: false }),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], EffectsNutrition.prototype, "search$", void 0);
EffectsNutrition = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["a" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__shared_nutrition_service__["a" /* NutritionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_nutrition_service__["a" /* NutritionService */]) === "function" && _c || Object])
], EffectsNutrition);

var _a, _b, _c;
//# sourceMappingURL=effects.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx-nutri/store/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = NutriReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/ngrx-nutri/store/actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    loading: false,
    search: null,
    searchReuslts: [],
    result: null,
    listResult: [],
};
function NutriReducers(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["g" /* SEARCH */]:
            return __assign({}, state, { loading: true, search: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["h" /* SEARCHRESULT */]:
            return __assign({}, state, { loading: false, searchReuslts: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["e" /* FETCHRESULT */]:
            return __assign({}, state, { loading: true, result: action.payload });
        // case AllAction.FETCHRESULTDONE:
        //     return {
        //         ...state,
        //         loading: false,
        //         result: action.payload
        //     }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* ADDRESULT */]:
            // const resultLIST : any= {};
            var demo = state.listResult.find(function (post) {
                return post._id === action.payload._id;
            });
            if (demo) {
                return __assign({}, state, { loading: true });
            }
            else {
                return __assign({}, state, { loading: true, listResult: state.listResult.concat([state.result]) });
            }
        // case AllAction.LISTRESULT:
        //     return {
        //         ...state,
        //         loading: false,
        //         listResult: [...state.listResult, state.result]
        //     }
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* DELETERESULT */]:
            return __assign({}, state, { loading: true, listResult: state.listResult.filter(function (post) { return post._id !== action.payload._id; }) });
        default:
            return state;
    }
}
//# sourceMappingURL=reducers.js.map

/***/ })

});
//# sourceMappingURL=ngrx-nutri.module.chunk.js.map