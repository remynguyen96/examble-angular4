webpackJsonp(["ngrx.module"],{

/***/ "../../../../../src/app/ngrx/ngrx-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgrxRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_component__ = __webpack_require__("../../../../../src/app/ngrx/ngrx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_result_search_result_component__ = __webpack_require__("../../../../../src/app/ngrx/search-result/search-result.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__ngrx_component__["a" /* NgrxComponent */],
        children: [
            {
                path: 'search-result',
                component: __WEBPACK_IMPORTED_MODULE_3__search_result_search_result_component__["a" /* SearchResultComponent */]
            }
        ]
    }
];
var NgrxRoutingModule = (function () {
    function NgrxRoutingModule() {
    }
    return NgrxRoutingModule;
}());
NgrxRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], NgrxRoutingModule);

//# sourceMappingURL=ngrx-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx/ngrx.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span routerLink=\"/ngrx\">Search Username Github</span>\n  <md-toolbar-row fxFlex=\"100\" fxLayout=\"row\">\n    <app-search-input fxFlex=\"40\" fxFlexOffset=\"30\"></app-search-input>\n    <span fxFlex></span>\n    <md-icon class=\"example-icon\">verified_user</md-icon>\n  </md-toolbar-row>\n</md-toolbar>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/ngrx/ngrx.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngrx/ngrx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgrxComponent; });
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

var NgrxComponent = (function () {
    function NgrxComponent() {
    }
    NgrxComponent.prototype.ngOnInit = function () {
    };
    return NgrxComponent;
}());
NgrxComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-ngrx',
        template: __webpack_require__("../../../../../src/app/ngrx/ngrx.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ngrx/ngrx.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NgrxComponent);

//# sourceMappingURL=ngrx.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx/ngrx.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgrxModule", function() { return NgrxModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_routing_module__ = __webpack_require__("../../../../../src/app/ngrx/ngrx-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_component__ = __webpack_require__("../../../../../src/app/ngrx/ngrx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_input_search_input_component__ = __webpack_require__("../../../../../src/app/ngrx/search-input/search-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_result_search_result_component__ = __webpack_require__("../../../../../src/app/ngrx/search-result/search-result.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_effects__ = __webpack_require__("../../../../../src/app/ngrx/store/effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_core_reducer__ = __webpack_require__("../../../../../src/app/ngrx/store/core.reducer.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var NgrxModule = (function () {
    function NgrxModule() {
    }
    return NgrxModule;
}());
NgrxModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ngrx_routing_module__["a" /* NgrxRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__share_module_share_module_module__["a" /* ShareModuleModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngrx_store__["i" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__store_core_reducer__["a" /* rootReducers */]),
            __WEBPACK_IMPORTED_MODULE_10__ngrx_effects__["c" /* EffectsModule */].forRoot([__WEBPACK_IMPORTED_MODULE_11__store_effects__["a" /* SearchEffect */]]),
            !__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].production ? __WEBPACK_IMPORTED_MODULE_5__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({ maxAge: 50 }) : []
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__ngrx_component__["a" /* NgrxComponent */],
            __WEBPACK_IMPORTED_MODULE_6__search_input_search_input_component__["a" /* SearchInputComponent */],
            __WEBPACK_IMPORTED_MODULE_7__search_result_search_result_component__["a" /* SearchResultComponent */],
        ]
    })
], NgrxModule);

//# sourceMappingURL=ngrx.module.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx/search-input/search-input.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formData\">\n    <md-input-container style=\"width: 100%;\" color=\"accent\">\n        <input mdInput placeholder=\"Search User\" formControlName=\"username\"  routerLink=\"search-result\">\n    </md-input-container>\n</form>"

/***/ }),

/***/ "../../../../../src/app/ngrx/search-input/search-input.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngrx/search-input/search-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_actions__ = __webpack_require__("../../../../../src/app/ngrx/store/actions.ts");
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
    function SearchInputComponent(formBuilder, store) {
        this.formBuilder = formBuilder;
        this.store = store;
    }
    SearchInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formData = this.formBuilder.group({
            username: this.formBuilder.control(null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required),
        });
        this.subscription = this.formData.valueChanges
            .map(function (value) { return value.username.trim(); })
            .debounceTime(600)
            .distinctUntilChanged()
            .subscribe(function (result) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_5__store_actions__["d" /* Search */](result));
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
        template: __webpack_require__("../../../../../src/app/ngrx/search-input/search-input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ngrx/search-input/search-input.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["h" /* Store */]) === "function" && _b || Object])
], SearchInputComponent);

var _a, _b;
//# sourceMappingURL=search-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx/search-result/search-result.component.html":
/***/ (function(module, exports) {

module.exports = "<md-progress-bar mode=\"indeterminate\" *ngIf=\"loading | async\"></md-progress-bar>\n<md-list style=\"background: #8E01FF;\">\n  <md-list-item *ngFor=\"let item of (userGithub | async)\">\n    <h4 md-line>{{item.id}}</h4>\n    <h4 md-line>{{item.login}}</h4>\n    <h4 md-line>{{item.score}}</h4>\n    <h4 md-line>{{item.followers_url}}</h4>\n    <img src=\"{{item.avatar_url}}\" alt=\"\" width=\"120px\" height=\"120px\">\n  </md-list-item>\n</md-list>\n"

/***/ }),

/***/ "../../../../../src/app/ngrx/search-result/search-result.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ngrx/search-result/search-result.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
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
    function SearchResultComponent(store) {
        this.store = store;
    }
    SearchResultComponent.prototype.ngOnInit = function () {
        this.userGithub = this.store.select(function (state) { return state.githubState.results; });
        this.loading = this.store.select(function (state) { return state.githubState.loading; });
    };
    return SearchResultComponent;
}());
SearchResultComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search-result',
        template: __webpack_require__("../../../../../src/app/ngrx/search-result/search-result.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ngrx/search-result/search-result.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object])
], SearchResultComponent);

var _a;
//# sourceMappingURL=search-result.component.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx/store/actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RESULTSEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResultSearch; });
var SEARCH = '[SEARCHBASIC] SearchInput';
var RESULTSEARCH = '[SEARCHBASIC] Result Search';
var Search = (function () {
    function Search(payload) {
        this.payload = payload;
        this.type = SEARCH;
    }
    return Search;
}());

var ResultSearch = (function () {
    function ResultSearch(payload) {
        this.payload = payload;
        this.type = RESULTSEARCH;
    }
    return ResultSearch;
}());

//# sourceMappingURL=actions.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx/store/core.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers__ = __webpack_require__("../../../../../src/app/ngrx/store/reducers.ts");

var rootReducers = {
    githubState: __WEBPACK_IMPORTED_MODULE_0__reducers__["a" /* searchReducers */],
};
//# sourceMappingURL=core.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx/store/effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchEffect; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("../../../../../src/app/ngrx/store/actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("../../../../rxjs/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_switchMap__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SearchEffect = (function () {
    function SearchEffect(http, actions$) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.search$ = this.actions$.ofType(__WEBPACK_IMPORTED_MODULE_3__actions__["c" /* SEARCH */])
            .map(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["d" /* toPayload */])
            .switchMap(function (payload) {
            return _this.http.get("https://api.github.com/search/users?q=" + payload)
                .map(function (response) { return new __WEBPACK_IMPORTED_MODULE_3__actions__["b" /* ResultSearch */](response.json().items); });
        });
    }
    return SearchEffect;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], SearchEffect.prototype, "search$", void 0);
SearchEffect = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_effects__["a" /* Actions */]) === "function" && _c || Object])
], SearchEffect);

var _a, _b, _c;
//# sourceMappingURL=effects.js.map

/***/ }),

/***/ "../../../../../src/app/ngrx/store/reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = searchReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("../../../../../src/app/ngrx/store/actions.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    search: '',
    loading: false,
    results: [],
};
function searchReducers(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions__["c" /* SEARCH */]:
            return __assign({}, state, { loading: true, search: action.payload });
        case __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* RESULTSEARCH */]:
            return __assign({}, state, { loading: false, results: action.payload });
        default:
            return state;
    }
}
//# sourceMappingURL=reducers.js.map

/***/ })

});
//# sourceMappingURL=ngrx.module.chunk.js.map