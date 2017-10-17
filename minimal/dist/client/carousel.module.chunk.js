webpackJsonp(["carousel.module"],{

/***/ "../../../../../src/app/carousel/carousel-component/carousel-component.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"carousel-wrapper\" [ngStyle]=\"carouselWrapperStyle\">\n  <ul class=\"carousel-inner\" #carousel>\n    <li *ngFor=\"let item of items;\" class=\"carousel-item\">\n      <ng-container [ngTemplateOutlet]=\"item.tpl\"></ng-container>\n    </li>\n  </ul>\n</section>\n<div *ngIf=\"showControls\" style=\"margin-top: 1em\">\n  <button (click)=\"next()\" class=\"btn btn-default\">Next</button>\n  <button (click)=\"prev()\" class=\"btn btn-default\">Prev</button>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel-component/carousel-component.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  width: 6000px; }\n\n.carousel-wrapper {\n  overflow: hidden; }\n\n.carousel-inner {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel-component/carousel-component.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CarouselItemElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponentComponent; });
/* unused harmony export CarouselComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__carousel_directive__ = __webpack_require__("../../../../../src/app/carousel/carousel.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CarouselItemElement = (function () {
    function CarouselItemElement() {
    }
    return CarouselItemElement;
}());
CarouselItemElement = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '.carousel-item'
    })
], CarouselItemElement);

var CarouselComponentComponent = (function () {
    function CarouselComponentComponent() {
    }
    return CarouselComponentComponent;
}());
CarouselComponentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'carousel',
        exportAs: 'carousel',
        template: __webpack_require__("../../../../../src/app/carousel/carousel-component/carousel-component.component.html"),
        styles: [__webpack_require__("../../../../../src/app/carousel/carousel-component/carousel-component.component.scss")]
    })
], CarouselComponentComponent);

var CarouselComponent = (function () {
    function CarouselComponent(builder) {
        this.builder = builder;
        this.timing = '250ms ease-in';
        this.showControls = true;
        this.currentSlide = 0;
        this.carouselWrapperStyle = {};
    }
    CarouselComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // For some reason only here I need to add setTimeout, in my local env it's working without this.
        setTimeout(function () {
            _this.itemWidth = _this.itemsElements.first.nativeElement.getBoundingClientRect().width;
            _this.carouselWrapperStyle = {
                width: _this.itemWidth + "px"
            };
        });
    };
    CarouselComponent.prototype.buildAnimation = function (offset) {
        return this.builder.build([
            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(this.timing, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* style */])({ transform: "translateX(-" + offset + "px)" }))
        ]);
    };
    CarouselComponent.prototype.next = function () {
        if (this.currentSlide + 1 === this.items.length)
            return;
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        var offset = this.currentSlide * this.itemWidth;
        var myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    };
    CarouselComponent.prototype.prev = function () {
        if (this.currentSlide === 0)
            return;
        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        var offset = this.currentSlide * this.itemWidth;
        var myAnimation = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    };
    return CarouselComponent;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_1__carousel_directive__["a" /* CarouselDirective */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* QueryList */]) === "function" && _a || Object)
], CarouselComponent.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewChildren */])(CarouselItemElement, { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* QueryList */]) === "function" && _b || Object)
], CarouselComponent.prototype, "itemsElements", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('carousel'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object)
], CarouselComponent.prototype, "carousel", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CarouselComponent.prototype, "timing", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CarouselComponent.prototype, "showControls", void 0);
var _a, _b, _c;
//# sourceMappingURL=carousel-component.component.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/carousel-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__carousel_component__["a" /* CarouselComponent */]
    }
];
var CarouselRoutingModule = (function () {
    function CarouselRoutingModule() {
    }
    return CarouselRoutingModule;
}());
CarouselRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], CarouselRoutingModule);

//# sourceMappingURL=carousel-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 2em\" class=\"container\">\n  <carousel>\n    <ng-container *ngFor=\"let item of items\">\n      <ng-container *carouselItem>\n        <div class=\"item\">{{item.title}}</div>\n      </ng-container>\n    </ng-container>\n  </carousel>\n\n  <!--<div style=\"margin-top: 1em;\">\n    <a (click)=\"carousel.next()\" class=\"btn btn-success\">Next</a>\n    <a (click)=\"carousel.prev()\" class=\"btn btn-success\">Prev</a>\n  </div>-->\n\n  <button (click)=\"addSlide()\">Add Slide</button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item {\n  padding: 0;\n  width: 300px;\n  height: 300px;\n  background-color: crimson;\n  color: #fff;\n  font-size: 50px;\n  line-height: 300px;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
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

var CarouselComponent = (function () {
    function CarouselComponent() {
        this.items = [
            { title: 'Slide 1' },
            { title: 'Slide 2' },
            { title: 'Slide 3' },
        ];
    }
    CarouselComponent.prototype.ngAfterViewInit = function () {
    };
    CarouselComponent.prototype.addSlide = function () {
        this.items.push({
            title: "Slide 4"
        });
    };
    return CarouselComponent;
}());
CarouselComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-carousel',
        template: __webpack_require__("../../../../../src/app/carousel/carousel.component.html"),
        styles: [__webpack_require__("../../../../../src/app/carousel/carousel.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CarouselComponent);

//# sourceMappingURL=carousel.component.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselDirective; });
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

var CarouselDirective = (function () {
    function CarouselDirective(tpl) {
        this.tpl = tpl;
    }
    return CarouselDirective;
}());
CarouselDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[carouselItem]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* TemplateRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* TemplateRef */]) === "function" && _a || Object])
], CarouselDirective);

var _a;
//# sourceMappingURL=carousel.directive.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/carousel.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselModule", function() { return CarouselModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__carousel_routing_module__ = __webpack_require__("../../../../../src/app/carousel/carousel-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__carousel_component__ = __webpack_require__("../../../../../src/app/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__item_item_component__ = __webpack_require__("../../../../../src/app/carousel/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__carousel_directive__ = __webpack_require__("../../../../../src/app/carousel/carousel.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carousel_component_carousel_component_component__ = __webpack_require__("../../../../../src/app/carousel/carousel-component/carousel-component.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CarouselModule = (function () {
    function CarouselModule() {
    }
    return CarouselModule;
}());
CarouselModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__carousel_routing_module__["a" /* CarouselRoutingModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__carousel_component__["a" /* CarouselComponent */], __WEBPACK_IMPORTED_MODULE_4__item_item_component__["a" /* ItemComponent */], __WEBPACK_IMPORTED_MODULE_5__carousel_directive__["a" /* CarouselDirective */], __WEBPACK_IMPORTED_MODULE_6__carousel_component_carousel_component_component__["a" /* CarouselComponentComponent */], __WEBPACK_IMPORTED_MODULE_6__carousel_component_carousel_component_component__["b" /* CarouselItemElement */]]
    })
], CarouselModule);

//# sourceMappingURL=carousel.module.js.map

/***/ }),

/***/ "../../../../../src/app/carousel/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  item works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/carousel/item/item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/carousel/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
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

var ItemComponent = (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    return ItemComponent;
}());
ItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-item',
        template: __webpack_require__("../../../../../src/app/carousel/item/item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/carousel/item/item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ItemComponent);

//# sourceMappingURL=item.component.js.map

/***/ })

});
//# sourceMappingURL=carousel.module.chunk.js.map