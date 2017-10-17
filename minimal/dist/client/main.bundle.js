webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./canvas/canvas.module": [
		"../../../../../src/app/canvas/canvas.module.ts",
		"canvas.module",
		"common"
	],
	"./carousel/carousel.module": [
		"../../../../../src/app/carousel/carousel.module.ts",
		"common",
		"carousel.module"
	],
	"./directive/directive.module": [
		"../../../../../src/app/directive/directive.module.ts",
		"common",
		"directive.module"
	],
	"./drapdrop/drapdrop.module": [
		"../../../../../src/app/drapdrop/drapdrop.module.ts",
		"common",
		"drapdrop.module"
	],
	"./form/form.module": [
		"../../../../../src/app/form/form.module.ts",
		"form.module",
		"common"
	],
	"./image-canvas/image-canvas.module": [
		"../../../../../src/app/image-canvas/image-canvas.module.ts",
		"common",
		"image-canvas.module"
	],
	"./ngrx-nutri/ngrx-nutri.module": [
		"../../../../../src/app/ngrx-nutri/ngrx-nutri.module.ts",
		"common",
		"ngrx-nutri.module"
	],
	"./ngrx/ngrx.module": [
		"../../../../../src/app/ngrx/ngrx.module.ts",
		"common",
		"ngrx.module"
	],
	"./socket/socket.module": [
		"../../../../../src/app/socket/socket.module.ts",
		"common",
		"socket.module"
	],
	"./synthetic/synthetic.module": [
		"../../../../../src/app/synthetic/synthetic.module.ts",
		"common",
		"synthetic.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing-loader.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppCustomPreloader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);


var AppCustomPreloader = (function () {
    function AppCustomPreloader() {
    }
    AppCustomPreloader.prototype.preload = function (route, load) {
        return route.data && route.data.preload ? load() : __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null);
    };
    return AppCustomPreloader;
}());

//# sourceMappingURL=app-routing-loader.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_loader__ = __webpack_require__("../../../../../src/app/app-routing-loader.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        redirectTo: 'image-canvas',
        pathMatch: 'full',
    },
    {
        path: 'form',
        loadChildren: './form/form.module#FormModule',
    },
    {
        path: 'directive',
        loadChildren: './directive/directive.module#DirectiveModule',
    },
    {
        path: 'ngrx',
        loadChildren: './ngrx/ngrx.module#NgrxModule',
    },
    {
        path: 'ngrx-nutrition',
        loadChildren: './ngrx-nutri/ngrx-nutri.module#NgrxNutriModule',
    },
    {
        path: 'socket',
        loadChildren: './socket/socket.module#SocketModule',
    },
    {
        path: 'canvas',
        loadChildren: './canvas/canvas.module#CanvasModule',
        data: {
            title: 'Canvas Tutorial',
            depth: 1,
        }
    },
    {
        path: 'drapdrop',
        loadChildren: './drapdrop/drapdrop.module#DrapdropModule',
        data: {
            preload: true,
            title: 'Drapdrop Tutorial',
            depth: 2,
        }
    },
    {
        path: 'synthetic',
        loadChildren: './synthetic/synthetic.module#SyntheticModule',
    },
    {
        path: 'image-canvas',
        loadChildren: './image-canvas/image-canvas.module#ImageCanvasModule',
    },
    {
        path: 'carousel',
        loadChildren: './carousel/carousel.module#CarouselModule',
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_2__app_routing_loader__["a" /* AppCustomPreloader */] })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__app_routing_loader__["a" /* AppCustomPreloader */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(meta, title, router, activatedRoute) {
        this.navLinks = [
            // {label: 'Sign Up', href: '/socket'},
            // {label: 'Chat Room', href: '/socket/chat-room'},
            // {label: 'Canvas 5', href: '/canvas/part5'},
            // {label: 'Canvas 6', href: '/canvas/part6'},
            // {label: 'Canvas 7', href: '/canvas/part7'},
            // {label: 'Canvas 13', href: '/canvas/part13'},
            // {label: 'Canvas 15', href: '/canvas/part15'},
            { label: 'Canvas 16', href: '/canvas/part16' },
            { label: 'Dradrop2', href: '/drapdrop/part2' },
        ];
        router.events.filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (n) {
            var pageTitle = router.routerState.snapshot.root.children[0].data['title'];
            if (pageTitle) {
                title.setTitle(pageTitle);
            }
            window.scrollTo(0, 0);
        });
        // const pageTitle = 'Minimal | Homepage';
        // title.setTitle(pageTitle);
        // meta.addTags([
        //     {name: 'author', content: 'Remy Nguyen'},
        //     {property: 'fb:app_id', content: '1560442157353717'},
        //     {property: 'og:title', content: pageTitle},
        //     {property: 'og:site_name', content: 'Sagenic'},
        //     {
        //         property: 'og:image',
        //         content: 'https://images.unsplash.com/photo-1485458029194-00cff7de3ef7?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop='
        //     }
        // ]);
    }
    AppComponent.prototype.getDeath = function (outlet) {
        return outlet.activatedRouteData['depth'];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: "\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around\" style=\"width:100%\">\n            <nav md-tab-nav-bar style=\"background: #a739b5; color: #ffffff\">\n                <a md-tab-link *ngFor=\"let item of navLinks\" [routerLink]=\"item.href\"\n                   routerLinkActive #rla=\"routerLinkActive\"\n                   [active]=\"rla.isActive\">\n                    {{item.label}}\n                </a>\n            </nav>\n        </div>\n        <div class=\"routerContainer\" [@routerAnimation]=\"getDeath(myOutlet)\">\n            <router-outlet #myOutlet=\"outlet\"></router-outlet>\n        </div>\n    ",
        styles: [],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* trigger */])('routeAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('1 => 2, 2 => 3', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({ height: '!' }),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({
                        transform: 'translateX(100%)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* group */])([
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':leave', [
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('.4s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({
                                transform: 'translateX(-100%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', [
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('.4s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({
                                transform: 'translateX(0)'
                            }))
                        ])
                    ])
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('2 => 1', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({ height: '!' }),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({ transform: 'translateX(-100%)' })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["f" /* group */])([
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':leave', [
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('.4s cubic-bezier(.35, 0, .25, 1)', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({
                                transform: 'translateX(100%)'
                            }))
                        ]),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', [
                            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('.4s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({
                                transform: 'translateX(0)'
                            }))
                        ])
                        // query(':enter', animate('.3s cubic-bezier(.35,0,.25,1)', style({
                        //      transform: 'translateX(0)'
                        // })))
                    ]),
                ])
            ]),
            Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* trigger */])('routerAnimation', [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* transition */])('* <=> *', [
                    // Initial state of new route
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({
                        position: 'fixed',
                        width: '100%',
                        transform: 'translateX(-100%)'
                    }), { optional: true }),
                    // move page off screen right on leave
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':leave', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({
                        position: 'fixed',
                        width: '100%',
                        transform: 'translateX(100%)'
                    })), { optional: true }),
                    // move page in screen from left to right
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('500ms ease', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["j" /* style */])({
                        opacity: 1,
                        transform: 'translateX(0%)'
                    })), { optional: true }),
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Meta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["f" /* Meta */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["g" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__socket_shared_socket_service__ = __webpack_require__("../../../../../src/app/socket/shared/socket.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__share_module_share_module_module__ = __webpack_require__("../../../../../src/app/share-module/share-module.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */].withServerTransition({ appId: 'minimal-app' }),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_8__share_module_share_module_module__["a" /* ShareModuleModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["k" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["f" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__socket_shared_socket_service__["a" /* SocketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/share-module/share-module.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareModuleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {CdkTableModule} from "@angular/cdk";















// import {MaterialModule, MdAutocompleteModule} from '@angular/material';
// import {MdDatepickerModule} from '@angular/material';
// import {MdSlideToggleModule} from '@angular/material';
// import {MdButtonToggleModule} from '@angular/material';
// import {MdSidenavModule} from '@angular/material';
// import {MdDialogModule} from '@angular/material';
// import {MdSnackBarModule} from '@angular/material';
// import {MdTooltipModule} from '@angular/material';
// import {MdTableModule} from '@angular/material';
// import {MdSortModule} from '@angular/material';
// import {MdPaginatorModule} from '@angular/material';
var ShareModuleModule = ShareModuleModule_1 = (function () {
    function ShareModuleModule() {
    }
    ShareModuleModule.forRoot = function () {
        return {
            ngModule: ShareModuleModule_1,
            providers: []
        };
    };
    return ShareModuleModule;
}());
ShareModuleModule = ShareModuleModule_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["FlexLayoutModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["FlexLayoutModule"],
            // CdkTableModule,
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MdRadioModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MdTabsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdGridListModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MdProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MdProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MdListModule */]
        ],
        declarations: []
    })
], ShareModuleModule);

var ShareModuleModule_1;
//# sourceMappingURL=share-module.module.js.map

/***/ }),

/***/ "../../../../../src/app/socket/shared/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SocketService = (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.totalClients = 0;
        this.totalRooms = 0;
        this.socketConnected$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.host = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port;
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].socket.baseUrl, __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].socket.opts);
        this.socket.on('connect', function () { return _this.socketConnected$.next(true); });
        // this.socket.on('disconnect', () => this.socketConnected$.next(false));
        this.socketConnected$.asObservable().subscribe(function (connected) {
            console.log('Socket connected: ', connected);
        });
        // this.getServerStats().subscribe(res => {
        // this.totalClients = res.clientsCount;
        // this.totalRooms = res.roomsCount;
        // console.log(res);
        // });
        this.emit('join', 'app');
        this.on('roomUpdate').subscribe(function (res) {
            console.log(res);
            _this.totalRooms = res.roomsCount;
            _this.totalClients = res.clientsCount;
        });
    }
    SocketService.prototype.demo = function () {
        console.log("SAdsadsadsa");
    };
    SocketService.prototype.getServerStats = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].api.baseUrl + "/socket").map(function (res) { return res.json(); });
    };
    SocketService.prototype.listen = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on(event, function (data) {
                observer.next(data);
            });
            return function () {
                _this.socket.off(event);
            };
        });
    };
    SocketService.prototype.on = function (event) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.on(event, function (data) {
                observer.next(data);
            });
        });
    };
    SocketService.prototype.emit = function (name, data) {
        this.socket.emit(name, data);
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], SocketService);

var _a;
//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    socket: {
        baseUrl: 'http://localhost:2222',
        opts: {}
    },
    api: {
        baseUrl: 'http://localhost:4000'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applicationServerPublicKey", function() { return applicationServerPublicKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushButton", function() { return pushButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSubscribed", function() { return isSubscribed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swRegistration", function() { return swRegistration; });
/* harmony export (immutable) */ __webpack_exports__["urlB64ToUint8Array"] = urlB64ToUint8Array;
/* harmony export (immutable) */ __webpack_exports__["updateBtn"] = updateBtn;
/* harmony export (immutable) */ __webpack_exports__["subscribeUser"] = subscribeUser;
/* harmony export (immutable) */ __webpack_exports__["unsubscribeUser"] = unsubscribeUser;
/* harmony export (immutable) */ __webpack_exports__["initialiseUI"] = initialiseUI;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
// .then(() => registerServiceWorker());
var applicationServerPublicKey = 'BLREzeCVF-WmRxCA25xqcuSpY0jpRwCB5VYEmfLnEPeELWvpV8K24zJn5pCYQdhaRM0FljymcnyuZ9r7yBF2xtA';
// Private Key:
//     3_5h06dAIfY3r4OhX0XxKi8Oh9NZxCB7q6X9qpmdb2s
var pushButton = document.querySelector('.js-push-btn');
var isSubscribed = false;
var swRegistration = null;
function urlB64ToUint8Array(base64String) {
    var padding = '='.repeat((4 - base64String.length % 4) % 4);
    var base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');
    var rawData = window.atob(base64);
    var outputArray = new Uint8Array(rawData.length);
    for (var i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
function updateBtn() {
    if (isSubscribed) {
        pushButton.textContent = 'Disable Push Messaging';
    }
    else {
        pushButton.textContent = 'Enable Push Messaging';
    }
    pushButton.setAttribute('disabled', 'disabled');
}
function subscribeUser() {
    var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
    swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey
    })
        .then(function (subscription) {
        console.log('User is subscribed.');
        isSubscribed = true;
        updateBtn();
    })
        .catch(function (err) {
        console.log('Failed to subscribe the user: ', err);
        updateBtn();
    });
}
function unsubscribeUser() {
    swRegistration.pushManager.getSubscription()
        .then(function (subscription) {
        if (subscription) {
            return subscription.unsubscribe();
        }
    })
        .catch(function (error) {
        console.log('Error unsubscribing', error);
    })
        .then(function () {
        console.log('User is unsubscribed.');
        isSubscribed = false;
        updateBtn();
    });
}
function initialiseUI() {
    pushButton.addEventListener('click', function () {
        pushButton.removeAttribute('disabled');
        if (isSubscribed) {
            unsubscribeUser();
        }
        else {
            subscribeUser();
        }
    });
    // Set the initial subscription value
    swRegistration.pushManager.getSubscription()
        .then(function (subscription) {
        isSubscribed = !(subscription === null);
        if (isSubscribed) {
            console.log('User IS subscribed.');
        }
        else {
            console.log('User is NOT subscribed.');
        }
        updateBtn();
    });
}
function registerServiceWorker() {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
        navigator.serviceWorker.register('service-worker.js')
            .then(function (swReg) {
            swRegistration = swReg;
            initialiseUI();
            console.log(swRegistration);
        })
            .catch(function (error) {
            console.error('Service Worker Error', error);
        });
    }
    else {
        console.warn('Push messaging is not supported');
    }
}
// ng serve --ssl 1 --ssl-key "ssl/local.brianflove.com.key" --ssl-cert "ssl/local.brianflove.com.crt"
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map