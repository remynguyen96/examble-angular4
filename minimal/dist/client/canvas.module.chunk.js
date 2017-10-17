webpackJsonp(["canvas.module"],{

/***/ "../../../../../src/app/canvas/canvas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvas_component__ = __webpack_require__("../../../../../src/app/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__part1_part1_component__ = __webpack_require__("../../../../../src/app/canvas/part1/part1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__part2_part2_component__ = __webpack_require__("../../../../../src/app/canvas/part2/part2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__part3_part3_component__ = __webpack_require__("../../../../../src/app/canvas/part3/part3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__part4_part4_component__ = __webpack_require__("../../../../../src/app/canvas/part4/part4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__part5_part5_component__ = __webpack_require__("../../../../../src/app/canvas/part5/part5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__part6_part6_component__ = __webpack_require__("../../../../../src/app/canvas/part6/part6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__part7_part7_component__ = __webpack_require__("../../../../../src/app/canvas/part7/part7.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__part8_part8_component__ = __webpack_require__("../../../../../src/app/canvas/part8/part8.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__part9_part9_component__ = __webpack_require__("../../../../../src/app/canvas/part9/part9.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__part10_part10_component__ = __webpack_require__("../../../../../src/app/canvas/part10/part10.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__part11_part11_component__ = __webpack_require__("../../../../../src/app/canvas/part11/part11.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__part12_part12_component__ = __webpack_require__("../../../../../src/app/canvas/part12/part12.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__part13_part13_component__ = __webpack_require__("../../../../../src/app/canvas/part13/part13.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__part14_part14_component__ = __webpack_require__("../../../../../src/app/canvas/part14/part14.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__part15_part15_component__ = __webpack_require__("../../../../../src/app/canvas/part15/part15.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__part16_part16_component__ = __webpack_require__("../../../../../src/app/canvas/part16/part16.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__part17_part17_component__ = __webpack_require__("../../../../../src/app/canvas/part17/part17.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__part18_part18_component__ = __webpack_require__("../../../../../src/app/canvas/part18/part18.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__part19_part19_component__ = __webpack_require__("../../../../../src/app/canvas/part19/part19.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__part20_part20_component__ = __webpack_require__("../../../../../src/app/canvas/part20/part20.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__canvas_component__["a" /* CanvasComponent */],
        children: [
            {
                path: 'part1',
                component: __WEBPACK_IMPORTED_MODULE_3__part1_part1_component__["a" /* Part1Component */]
            },
            {
                path: 'part2',
                component: __WEBPACK_IMPORTED_MODULE_4__part2_part2_component__["a" /* Part2Component */]
            },
            {
                path: 'part3',
                component: __WEBPACK_IMPORTED_MODULE_5__part3_part3_component__["a" /* Part3Component */]
            },
            {
                path: 'part4',
                component: __WEBPACK_IMPORTED_MODULE_6__part4_part4_component__["a" /* Part4Component */]
            },
            {
                path: 'part5',
                component: __WEBPACK_IMPORTED_MODULE_7__part5_part5_component__["a" /* Part5Component */]
            },
            {
                path: 'part6',
                component: __WEBPACK_IMPORTED_MODULE_8__part6_part6_component__["a" /* Part6Component */]
            },
            {
                path: 'part7',
                component: __WEBPACK_IMPORTED_MODULE_9__part7_part7_component__["a" /* Part7Component */]
            },
            {
                path: 'part8',
                component: __WEBPACK_IMPORTED_MODULE_10__part8_part8_component__["a" /* Part8Component */]
            },
            {
                path: 'part9',
                component: __WEBPACK_IMPORTED_MODULE_11__part9_part9_component__["a" /* Part9Component */]
            },
            {
                path: 'part10',
                component: __WEBPACK_IMPORTED_MODULE_12__part10_part10_component__["a" /* Part10Component */]
            },
            {
                path: 'part11',
                component: __WEBPACK_IMPORTED_MODULE_13__part11_part11_component__["a" /* Part11Component */]
            },
            {
                path: 'part12',
                component: __WEBPACK_IMPORTED_MODULE_14__part12_part12_component__["a" /* Part12Component */]
            },
            {
                path: 'part13',
                component: __WEBPACK_IMPORTED_MODULE_15__part13_part13_component__["a" /* Part13Component */]
            },
            {
                path: 'part14',
                component: __WEBPACK_IMPORTED_MODULE_16__part14_part14_component__["a" /* Part14Component */]
            },
            {
                path: 'part15',
                component: __WEBPACK_IMPORTED_MODULE_17__part15_part15_component__["a" /* Part15Component */]
            },
            {
                path: 'part16',
                component: __WEBPACK_IMPORTED_MODULE_18__part16_part16_component__["a" /* Part16Component */]
            },
            {
                path: 'part17',
                component: __WEBPACK_IMPORTED_MODULE_19__part17_part17_component__["a" /* Part17Component */]
            },
            {
                path: 'part18',
                component: __WEBPACK_IMPORTED_MODULE_20__part18_part18_component__["a" /* Part18Component */]
            },
            {
                path: 'part19',
                component: __WEBPACK_IMPORTED_MODULE_21__part19_part19_component__["a" /* Part19Component */]
            },
            {
                path: 'part20',
                component: __WEBPACK_IMPORTED_MODULE_22__part20_part20_component__["a" /* Part20Component */]
            },
        ]
    },
];
var CanvasRoutingModule = (function () {
    function CanvasRoutingModule() {
    }
    return CanvasRoutingModule;
}());
CanvasRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], CanvasRoutingModule);

//# sourceMappingURL=canvas-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasComponent; });
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

var CanvasComponent = (function () {
    function CanvasComponent() {
    }
    CanvasComponent.prototype.ngOnInit = function () {
    };
    return CanvasComponent;
}());
CanvasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-canvas',
        template: __webpack_require__("../../../../../src/app/canvas/canvas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/canvas.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CanvasComponent);

//# sourceMappingURL=canvas.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/canvas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasModule", function() { return CanvasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__canvas_routing_module__ = __webpack_require__("../../../../../src/app/canvas/canvas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canvas_component__ = __webpack_require__("../../../../../src/app/canvas/canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__part1_part1_component__ = __webpack_require__("../../../../../src/app/canvas/part1/part1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__part2_part2_component__ = __webpack_require__("../../../../../src/app/canvas/part2/part2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__part3_part3_component__ = __webpack_require__("../../../../../src/app/canvas/part3/part3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__part4_part4_component__ = __webpack_require__("../../../../../src/app/canvas/part4/part4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__part5_part5_component__ = __webpack_require__("../../../../../src/app/canvas/part5/part5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__part6_part6_component__ = __webpack_require__("../../../../../src/app/canvas/part6/part6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__part7_part7_component__ = __webpack_require__("../../../../../src/app/canvas/part7/part7.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__part8_part8_component__ = __webpack_require__("../../../../../src/app/canvas/part8/part8.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__part9_part9_component__ = __webpack_require__("../../../../../src/app/canvas/part9/part9.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__part10_part10_component__ = __webpack_require__("../../../../../src/app/canvas/part10/part10.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__part11_part11_component__ = __webpack_require__("../../../../../src/app/canvas/part11/part11.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__part12_part12_component__ = __webpack_require__("../../../../../src/app/canvas/part12/part12.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__part13_part13_component__ = __webpack_require__("../../../../../src/app/canvas/part13/part13.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__part14_part14_component__ = __webpack_require__("../../../../../src/app/canvas/part14/part14.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__part15_part15_component__ = __webpack_require__("../../../../../src/app/canvas/part15/part15.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__part16_part16_component__ = __webpack_require__("../../../../../src/app/canvas/part16/part16.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__part17_part17_component__ = __webpack_require__("../../../../../src/app/canvas/part17/part17.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__part18_part18_component__ = __webpack_require__("../../../../../src/app/canvas/part18/part18.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__part19_part19_component__ = __webpack_require__("../../../../../src/app/canvas/part19/part19.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__part20_part20_component__ = __webpack_require__("../../../../../src/app/canvas/part20/part20.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var CanvasModule = (function () {
    function CanvasModule() {
    }
    return CanvasModule;
}());
CanvasModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__canvas_routing_module__["a" /* CanvasRoutingModule */],
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__canvas_component__["a" /* CanvasComponent */], __WEBPACK_IMPORTED_MODULE_4__part1_part1_component__["a" /* Part1Component */], __WEBPACK_IMPORTED_MODULE_5__part2_part2_component__["a" /* Part2Component */], __WEBPACK_IMPORTED_MODULE_6__part3_part3_component__["a" /* Part3Component */], __WEBPACK_IMPORTED_MODULE_7__part4_part4_component__["a" /* Part4Component */], __WEBPACK_IMPORTED_MODULE_8__part5_part5_component__["a" /* Part5Component */], __WEBPACK_IMPORTED_MODULE_9__part6_part6_component__["a" /* Part6Component */], __WEBPACK_IMPORTED_MODULE_10__part7_part7_component__["a" /* Part7Component */], __WEBPACK_IMPORTED_MODULE_11__part8_part8_component__["a" /* Part8Component */], __WEBPACK_IMPORTED_MODULE_12__part9_part9_component__["a" /* Part9Component */], __WEBPACK_IMPORTED_MODULE_13__part10_part10_component__["a" /* Part10Component */], __WEBPACK_IMPORTED_MODULE_14__part11_part11_component__["a" /* Part11Component */], __WEBPACK_IMPORTED_MODULE_15__part12_part12_component__["a" /* Part12Component */], __WEBPACK_IMPORTED_MODULE_16__part13_part13_component__["a" /* Part13Component */], __WEBPACK_IMPORTED_MODULE_17__part14_part14_component__["a" /* Part14Component */], __WEBPACK_IMPORTED_MODULE_18__part15_part15_component__["a" /* Part15Component */], __WEBPACK_IMPORTED_MODULE_19__part16_part16_component__["a" /* Part16Component */], __WEBPACK_IMPORTED_MODULE_20__part17_part17_component__["a" /* Part17Component */], __WEBPACK_IMPORTED_MODULE_21__part18_part18_component__["a" /* Part18Component */], __WEBPACK_IMPORTED_MODULE_22__part19_part19_component__["a" /* Part19Component */], __WEBPACK_IMPORTED_MODULE_23__part20_part20_component__["a" /* Part20Component */],
        ]
    })
], CanvasModule);

//# sourceMappingURL=canvas.module.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part1/part1.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #myCanvas1></canvas>\n\n<div id=\"animateText\">\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/canvas/part1/part1.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part1/part1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part1Component; });
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

var Part1Component = (function () {
    function Part1Component() {
    }
    Part1Component.prototype.ngOnInit = function () {
    };
    Part1Component.prototype.ngAfterViewInit = function () {
        var canvasPart1 = this.myCanvas1.nativeElement;
        this.ctx = canvasPart1.getContext('2d');
        canvasPart1.style.background = '#774FFF';
        canvasPart1.style.margin = '0 auto';
        canvasPart1.style.display = 'block';
        canvasPart1.width = 600;
        canvasPart1.height = 400;
        // this.ctx.fillStyle = '#0DFF6E';
        // this.ctx.fillRect(300, 200, 200, 100);
        // this.ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
        // this.ctx.fill();
        var scores = [100, 90, 85, 50, 75, 88];
        var width = 50;
        var currX = 0;
        this.ctx.fillStyle = '#0DFF6E';
        // for  (let i = 0; i < scores.length; i++ ) {
        //     let height = scores[i];
        //     this.ctx.fillRect(currX,canvasPart1.height - height, width, height);
        //     currX += width + 10;
        // }
        //  this.ctx.strokeRect(50,canvasPart1.height - 45,50,50);
        // this.ctx.translate(450, 250);
        // this.ctx.rotate(1 * Math.PI);
        //
        // for  (let i = 0; i < scores.length; i++ ) {
        //     let height = scores[i];
        //     this.ctx.fillRect(currX,0, width, height);
        //     currX += width + 10;
        // }
        // this.ctx.strokeStyle = "#FF000E";
        // this.ctx.arc(100, 100, 30, 0, 1 * Math.PI,false);
        // this.ctx.stroke();
        // this.ctx.fill();
        //    circle
        this.ctx.strokeStyle = '#02FFBB';
        this.ctx.beginPath();
        this.ctx.moveTo(80, 50);
        // //top right
        // this.ctx.arcTo(210, 50, 210, 70, 20);
        // //bottom right
        // this.ctx.arcTo(210, 200, 160, 200, 20);
        // //bottom left
        // this.ctx.arcTo(60,200,60,180,20);
        // //top left
        // this.ctx.arcTo(60,50,100,50,20);
        this.ctx.stroke();
        // this.ctx.fill();
        this.animateText();
    };
    Part1Component.prototype.animateText = function () {
        var text = document.getElementById('animateText');
        var myString = 'Hello this is basic tutorial about animation text in angular 2';
        var arrString = myString.split('');
        var loopTimer;
        function frameLooper() {
            if (arrString.length > 0) {
                text.innerHTML += arrString.shift();
            }
            else {
                clearTimeout(loopTimer);
            }
            loopTimer = setTimeout(frameLooper, 70);
        }
        frameLooper();
    };
    return Part1Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('myCanvas1'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part1Component.prototype, "myCanvas1", void 0);
Part1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part1',
        template: __webpack_require__("../../../../../src/app/canvas/part1/part1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part1/part1.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part1Component);

var _a;
//Rectangle function
// clearRect(x,y,w,h);
// fillRect(x,y,w,h);
// rect(x,y,w,h);
// strokeRect(x,y,w,h);
//Arc/ Ellipse function
//arc(x, y, radius, startAngle, endAngle, antiClockwise)
//arcTo(x1,y1,x2,y2,radius)
// property
// fillStyle //background
//strokeStyle //border 
//# sourceMappingURL=part1.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part10/part10.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"grid\" id=\"grid\">\n\n    <div class=\"thumb\" style=\"height: 180px\">\n        <div style=\"padding: 20px\">\n            <h4>Hello Boy1</h4>\n            <img src=\"http://www.pensio2000.com/en/files/2013/05/150513_PrimaveraSound_Avatar-214x214.jpg\" alt=\"\">\n        </div>\n    </div>\n\n\n    <div class=\"thumb\" style=\"height: 210px\">\n        <div style=\"padding: 20px\">\n            <h4>Hello Boy1</h4>\n            <img src=\"http://www.syriangeeks.com/wp-content/uploads/2015/03/MV5BNjc5NTU1NDc5MF5BMl5BanBnXkFtZTgwMDQwMzQ2MzE@._V1_SY317_CR00214317_AL_-214x160.jpg\"\n                 alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"thumb\" style=\"height: 230px\">\n        <div style=\"padding: 20px\">\n            <h4>Hello Boy1</h4>\n            <img src=\"http://www.wested.com/ekmps/shops/westedcom/images/new-classic-leather-briefcase-3813-p[ekm]214x183[ekm].jpg\"\n                 alt=\"\">\n        </div>\n    </div>\n\n    <div class=\"thumb\">\n        <h4>Hello Boy1</h4>\n        <img src=\"http://www.sinemablog.com/wp-content/uploads/2012/02/killer-elite-film-afisi-214x320.jpeg\" alt=\"\">\n    </div>\n</div>-->\n\n\n<div id=\"grid\">\n    <div style=\"height: 336px\">\n        <h4>Hello Boy1</h4>\n        <img style=\"height: 336px\" src=\"http://www.sinemablog.com/wp-content/uploads/2012/02/killer-elite-film-afisi-214x320.jpeg\" alt=\"\">\n    </div>\n    <div style=\"height: 368px\">\n        <h4>Hello Boy2</h4>\n    </div>\n    <div style=\"height: 310px\">\n        <h4>Hello Boy3</h4>\n    </div>\n    <div style=\"height: 478px\">\n        <h4>Hello Boy4</h4>\n    </div>\n    <div style=\"height: 368px\">\n        <h4>Hello Boy5</h4>\n    </div>\n    <div style=\"height: 478px\">\n        <h4>Hello Boy6</h4>\n    </div>\n    <div style=\"height: 368px\">\n        <h4>Hello Boy7</h4>\n    </div>\n    <div style=\"height: 336px\">\n        <h4>Hello Boy8</h4>\n    </div>\n    <div style=\"height: 368px\">\n        <h4>Hello Boy9</h4>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/canvas/part10/part10.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#grid {\n  width: 772px;\n  margin: 0 auto; }\n\n#grid > div {\n  width: 241px;\n  position: absolute;\n  border: 1px solid #000; }\n\n#grid > div:nth-child(2n + 0) {\n  background: #FF6574; }\n\n#grid > div:nth-child(2n + 1) {\n  background: #7C16FF; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part10/part10.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part10Component; });
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

var Part10Component = (function () {
    function Part10Component() {
    }
    Part10Component.prototype.ngAfterViewInit = function () {
        var blocks = document.getElementById('grid').children;
        var pad = 12, cols = 3, newLeft, newTop;
        for (var i = 1; i < blocks.length; i++) {
            if (i % cols === 0) {
                newTop = (blocks[i - cols].offsetTop + blocks[i - cols].offsetHeight) + pad;
                blocks[i].style.top = newTop + "px";
            }
            else {
                if (blocks[i - cols]) {
                    newTop = (blocks[i - cols].offsetTop + blocks[i - cols].offsetHeight) + pad;
                    blocks[i].style.top = newTop + "px";
                }
                newLeft = (blocks[i - 1].offsetLeft + blocks[i - 1].offsetWidth) + pad;
                blocks[i].style.left = newLeft + "px";
            }
        }
    };
    return Part10Component;
}());
Part10Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part10',
        template: __webpack_require__("../../../../../src/app/canvas/part10/part10.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part10/part10.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part10Component);

//# sourceMappingURL=part10.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part11/part11.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width: 400px; margin: auto\">\n    <canvas #mycanvas id=\"panel\" width=\"400\" height=\"400\"></canvas>\n</div>\n\n<img id=\"crop_result\">\nZoom it:\n<input id='scaleSlider'  type='range' min='0.1' max='2.0' step='0.01' value='1.0' />\n<input type=\"color\" id=\"changeBg\">\n<button id=\"btnCrop\">CROP IMAGE</button>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/canvas/part11/part11.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part11/part11.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part11Component; });
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

var Part11Component = (function () {
    function Part11Component() {
    }
    Part11Component.prototype.ngAfterViewInit = function () {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        var resultImg = document.getElementById('crop_result');
        var image = new Image();
        var baseX = 0;
        var baseY = 0;
        var lastPointX = 0;
        var lastPointY = 0;
        var cutoutWidth = 50;
        var windowWidth = 300;
        // (400 - windowWidth) / 2 = cutoutWidth
        var scale = 1;
        var click = false;
        image.onload = imageLoad;
        image.src = '../../../assets/the-good-life.jpg';
        document.getElementById('btnCrop').onclick = showCropImage;
        document.getElementById('scaleSlider').oninput = updateScale;
        document.getElementById('changeBg').oninput = updateBg;
        function imageLoad() {
            drawImageToCanvas(0, 0);
            ctx.canvas.onmousedown = onMouseDown;
            ctx.canvas.onmousemove = onMouseMove;
            ctx.canvas.onmouseup = onMouseUp;
        }
        function drawImageToCanvas(x, y) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            baseX = baseX + (x - lastPointX);
            baseY = baseY + (y - lastPointY);
            lastPointX = x;
            lastPointY = y;
            var imageWidth = Math.floor(image.width * scale);
            var imageHeight = Math.floor(image.height * scale);
            ctx.drawImage(image, baseX, baseY, imageWidth, imageHeight);
            drawCutout();
        }
        function drawCutout() {
            ctx.fillStyle = 'rgba(128, 128, 128, 0.7)';
            ctx.beginPath();
            ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.moveTo(cutoutWidth, cutoutWidth);
            ctx.lineTo(cutoutWidth, windowWidth + cutoutWidth);
            ctx.lineTo(cutoutWidth + windowWidth, cutoutWidth + windowWidth);
            ctx.lineTo(cutoutWidth + windowWidth, cutoutWidth);
            ctx.closePath();
            ctx.fill();
        }
        function onMouseDown(e) {
            e.preventDefault();
            var loc = windowToCanvas(e.clientX, e.clientY);
            click = true;
            lastPointX = loc.x;
            lastPointY = loc.y;
        }
        function onMouseMove(e) {
            e.preventDefault();
            if (click) {
                var loc = windowToCanvas(e.clientX, e.clientY);
                drawImageToCanvas(loc.x, loc.y);
                showCropImage();
            }
        }
        function onMouseUp(e) {
            e.preventDefault();
            click = false;
        }
        function windowToCanvas(x, y) {
            var bbox = ctx.canvas.getBoundingClientRect();
            // => ctx.canvas.width === bbox.width
            // => ctx.canvas.offsetLeft === bbox.left
            // => ctx.canvas.offsetTop === bbox.top
            return {
                x: x - bbox.left * (ctx.canvas.width / bbox.width),
                y: y - bbox.top * (ctx.canvas.height / bbox.height),
            };
        }
        function showCropImage() {
            var temp_canvas = document.createElement('canvas');
            var temp_ctx = temp_canvas.getContext('2d');
            temp_canvas.width = windowWidth;
            temp_canvas.height = windowWidth;
            temp_ctx.drawImage(ctx.canvas, cutoutWidth, cutoutWidth, windowWidth, windowWidth, 0, 0, windowWidth, windowWidth);
            var data = temp_canvas.toDataURL();
            // resultImg.style.borderRadius = "50%";
            resultImg.src = data;
        }
        function updateScale(e) {
            scale = e.target.value;
            drawImageToCanvas(lastPointX, lastPointY);
        }
        function updateBg(e) {
            var color = e.target.value;
            // resultImg.style.background = color;
            ctx.canvas.style.background = color;
        }
    };
    return Part11Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('mycanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part11Component.prototype, "mycanvas", void 0);
Part11Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part11',
        template: __webpack_require__("../../../../../src/app/canvas/part11/part11.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part11/part11.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part11Component);

var _a;
//# sourceMappingURL=part11.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part12/part12.component.html":
/***/ (function(module, exports) {

module.exports = "  <canvas #mycanvas id=\"panel\" width=\"500\" height=\"500\"></canvas>\n  <img src=\"\" id=\"croppedImage\">\n  <button id=\"cropBtn\" >Crop Image</button>\n"

/***/ }),

/***/ "../../../../../src/app/canvas/part12/part12.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part12/part12.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part12Component; });
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

var Part12Component = (function () {
    function Part12Component() {
    }
    Part12Component.prototype.ngAfterViewInit = function () {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        var click = false;
        var downPointX = 0;
        var downPointY = 0;
        var lastPointX = 0;
        var lastPointY = 0;
        var hoverBoxSize = 5;
        var resize = false;
        var canvasBackground = '#FF2042';
        document.getElementById('cropBtn').onclick = cropImage;
        var image = new Image();
        image.onload = function () {
            ctx.canvas.width = image.width;
            ctx.canvas.height = image.height;
            reDrawCanvas();
            initEventsOnCanvas();
        };
        image.src = "../../../assets/the-good-life.jpg";
        function initEventsOnCanvas() {
            ctx.canvas.onmousedown = onMouseDown;
            ctx.canvas.onmouseup = onMouseUp;
        }
        function onMouseDown(e) {
            e.preventDefault();
            var loc = windowToCanvas(e.clientX, e.clientY);
            click = true;
            if (!resize) {
                ctx.canvas.onmousemove = onMouseMove;
                downPointX = loc.x;
                downPointY = loc.y;
                lastPointX = loc.x;
                lastPointY = loc.y;
            }
        }
        function onMouseMove(e) {
            e.preventDefault();
            if (click) {
                var loc = windowToCanvas(e.clientX, e.clientY);
                lastPointX = loc.x;
                lastPointY = loc.y;
                reDrawCanvas();
            }
        }
        function reDrawCanvas() {
            clearCanvas();
            drawImage();
            drawSelect();
            drawResizerBox();
        }
        function clearCanvas() {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = canvasBackground;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
        function drawImage() {
            ctx.drawImage(image, 0, 0);
        }
        function drawSelect() {
            ctx.strokeStyle = '#C729BE';
            ctx.lineWidth = 1;
            ctx.strokeRect(downPointX, downPointY, (lastPointX - downPointX), (lastPointY - downPointY));
        }
        function onImageResize(e) {
            var centerPointX = (lastPointX + downPointX) / 2;
            var centerPointY = (lastPointY + downPointY) / 2;
            var loc = windowToCanvas(e.clientX, e.clientY);
            ctx.fillStyle = '#FF0000';
            ctx.lineWidth = 1;
            if (isResizeBoxHover(loc, centerPointX, downPointY)) {
                if (click) {
                    downPointY = loc.y;
                    reDrawCanvas();
                }
            }
            else if (isResizeBoxHover(loc, lastPointX, centerPointY)) {
                if (click) {
                    lastPointX = loc.x;
                    reDrawCanvas();
                }
            }
            else if (isResizeBoxHover(loc, centerPointX, lastPointY)) {
                if (click) {
                    lastPointY = loc.y;
                    reDrawCanvas();
                }
            }
            else if (isResizeBoxHover(loc, downPointX, centerPointY)) {
                if (click) {
                    downPointX = loc.x;
                    reDrawCanvas();
                }
            }
            else {
                resize = false;
                reDrawCanvas();
            }
        }
        function isResizeBoxHover(loc, xPoint, yPoint) {
            var hoverMargin = 3;
            if (loc.x > (xPoint - hoverBoxSize - hoverMargin) && loc.x < (xPoint + hoverBoxSize + hoverMargin) && loc.y > (yPoint - hoverBoxSize - hoverMargin) && loc.y < (yPoint + hoverBoxSize + hoverMargin)) {
                ctx.fillRect(xPoint - hoverBoxSize, yPoint - hoverBoxSize, hoverBoxSize * 2, hoverBoxSize * 2);
                resize = true;
                return true;
            }
            return false;
        }
        function drawResizerBox() {
            var centerPointX = (lastPointX + downPointX) / 2;
            var centerPointY = (lastPointY + downPointY) / 2;
            ctx.fillStyle = '#000000';
            ctx.lineWidth = 1;
            ctx.fillRect(centerPointX - hoverBoxSize, downPointY - hoverBoxSize, hoverBoxSize * 2, hoverBoxSize * 2);
            ctx.fillRect(lastPointX - hoverBoxSize, centerPointY - hoverBoxSize, hoverBoxSize * 2, hoverBoxSize * 2);
            ctx.fillRect(centerPointX - hoverBoxSize, lastPointY - hoverBoxSize, hoverBoxSize * 2, hoverBoxSize * 2);
            ctx.fillRect(downPointX - hoverBoxSize, centerPointY - hoverBoxSize, hoverBoxSize * 2, hoverBoxSize * 2);
        }
        function onMouseUp(e) {
            e.preventDefault();
            ctx.canvas.onmousemove = onImageResize;
            click = false;
        }
        function windowToCanvas(x, y) {
            var bbox = ctx.canvas.getBoundingClientRect();
            return {
                x: x - bbox.left * (ctx.canvas.width / bbox.width),
                y: y - bbox.top * (ctx.canvas.height / bbox.height)
            };
        }
        function cropImage() {
            var temp_canvas = document.createElement('canvas');
            var temp_ctx = temp_canvas.getContext('2d');
            temp_canvas.width = image.width;
            temp_canvas.height = image.height;
            temp_ctx.drawImage(image, downPointX, downPointY, (lastPointX - downPointX), (lastPointY - downPointY), 0, 0, (lastPointX - downPointX), (lastPointY - downPointY));
            var imageData = temp_canvas.toDataURL();
            var resultImg = document.getElementById('croppedImage');
            resultImg.src = imageData;
        }
    };
    return Part12Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('mycanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part12Component.prototype, "mycanvas", void 0);
Part12Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part12',
        template: __webpack_require__("../../../../../src/app/canvas/part12/part12.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part12/part12.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part12Component);

var _a;
//# sourceMappingURL=part12.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part13/part13.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #mycanvas width=\"400\" height=\"400\"></canvas>\n<div id=\"main\">\n    <div class=\"container\">\n        <h1 class=\"title-page\">Style Checkbox</h1>\n        <div class=\"squaredcheck\">\n            <input type=\"checkbox\" value=\"None\" id=\"squaredcheck\" class=\"checkbox1\" name=\"check\" checked />\n            <label for=\"squaredcheck\">\n                <span>Checkbox Blue Color</span>\n            </label>\n        </div>\n        <div class=\"squaredcheck\">\n            <input type=\"checkbox\" value=\"None\" id=\"squaredcheck2\" class=\"checkbox2\" name=\"check\"  />\n            <label for=\"squaredcheck2\"><span>Checkbox Green Color</span></label>\n        </div>\n        <div class=\"squaredcheck\">\n            <input type=\"checkbox\" value=\"None\" id=\"squaredcheck3\" class=\"checkbox3\" name=\"check\"  />\n            <label for=\"squaredcheck3\"><span>Checkbox Violet Color</span></label>\n        </div>\n    </div>\n</div>\n\n\n<div id=\"main2\">\n    <div class=\"container\">\n        <h1 class=\"title-page\">Style Radio Button</h1>\n        <div class=\"circlecheck\">\n            <input type=\"radio\" id=\"f-option\" class=\"circle-1\" name=\"selector\" checked>\n            <label for=\"f-option\">Radio Mint Color</label>\n\n            <div class=\"outer-circle\"></div>\n        </div>\n        <div class=\"circlecheck\">\n            <input type=\"radio\" id=\"g-option\" class=\"circle-2\" name=\"selector\">\n            <label for=\"g-option\">Radio Orange Color</label>\n\n            <div class=\"outer-circle\"></div>\n        </div>\n        <div class=\"circlecheck\">\n            <input type=\"radio\" id=\"h-option\" class=\"circle-3\" name=\"selector\">\n            <label for=\"h-option\">Radio Purple Color</label>\n\n            <div class=\"outer-circle\"></div>\n        </div>\n    </div>\n</div>\n\n<div id=\"main3\">\n    <div class=\"container\">\n        <h1 class=\"title-page\">Style Select Option</h1>\n        <div class=\"styled-select green\">\n            <select>\n                <option>Here is the first option</option>\n                <option>The second option</option>\n                <option>The third option</option>\n            </select>\n        </div>\n\n        <div class=\"styled-select blue\">\n            <select>\n                <option>Here is language option</option>\n                <option>English language</option>\n                <option>Viet Nam language</option>\n            </select>\n        </div>\n    </div>\n</div>\n\n<div class=\"textSlider\">\n    <div class=\"part1\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <img class=\"slide-in align-left\" src=\"assets/the-good-life.jpg\" alt=\"\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n    </div>\n    <div class=\"part2\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <img class=\"slide-in align-right\" src=\"assets/the-good-life.jpg\" alt=\"\" style=\"margin-left: 155px;\">\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequatur deleniti nulla quae quos. Ab asperiores blanditiis distinctio eaque enim eveniet fugiat id magnam nam, non sit ullam? Praesentium, vero!</p>\n    </div>\n</div>\n\n<button style=\"padding: 25px; background: #39C768; color: #ffffff\" (click)=\"test()\">\n    RXJS with Buffering Operators\n</button>"

/***/ }),

/***/ "../../../../../src/app/canvas/part13/part13.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".squaredcheck {\n  width: 210px;\n  position: relative; }\n  .squaredcheck label {\n    width: 16px;\n    height: 16px;\n    cursor: pointer;\n    position: absolute;\n    top: 5px;\n    left: 0;\n    background: #66c0ff;\n    border-radius: 4px; }\n    .squaredcheck label:after {\n      content: '';\n      width: 10px;\n      height: 5px;\n      position: absolute;\n      top: 4px;\n      left: 3px;\n      border: 2px solid #fff;\n      border-top: none;\n      border-right: none;\n      background: transparent;\n      opacity: 0;\n      -webkit-transform: rotate(-45deg);\n              transform: rotate(-45deg); }\n    .squaredcheck label:hover::after {\n      opacity: 0.3; }\n  .squaredcheck span {\n    position: absolute;\n    width: 300px;\n    left: 30px; }\n  .squaredcheck input[type=checkbox] {\n    visibility: hidden; }\n    .squaredcheck input[type=checkbox]:checked + label {\n      background: #0096FF; }\n    .squaredcheck input[type=checkbox]:checked + label:after {\n      opacity: 1; }\n    .squaredcheck input[type=checkbox].checkbox2 + label {\n      background: #67cead; }\n    .squaredcheck input[type=checkbox].checkbox2:checked + label {\n      background: #329d7b; }\n    .squaredcheck input[type=checkbox].checkbox3 + label {\n      background: #eeccff; }\n    .squaredcheck input[type=checkbox].checkbox3:checked + label {\n      background: #CC66FF; }\n\n.circlecheck {\n  display: block;\n  position: relative;\n  width: 19%;\n  margin: 0 auto; }\n  .circlecheck input[type=radio] {\n    position: absolute;\n    visibility: hidden; }\n  .circlecheck label {\n    display: block;\n    position: relative;\n    font-size: 16px;\n    line-height: 30px;\n    padding: 5px 10px 5px 40px;\n    margin: 5px auto;\n    height: 30px;\n    z-index: 9;\n    cursor: pointer;\n    -webkit-transition: all 0.25s linear; }\n  .circlecheck .outer-circle {\n    display: block;\n    position: absolute;\n    border: 3px solid #AAAAAA;\n    border-radius: 100%;\n    height: 20px;\n    width: 20px;\n    top: 10px;\n    left: 0px;\n    z-index: 5;\n    transition: border .25s linear;\n    -webkit-transition: border .25s linear; }\n    .circlecheck .outer-circle:before {\n      display: block;\n      position: absolute;\n      content: '';\n      border-radius: 100%;\n      height: 14px;\n      width: 14px;\n      top: 3px;\n      left: 3px;\n      margin: auto;\n      transition: background 0.25s linear;\n      -webkit-transition: background 0.25s linear; }\n  .circlecheck input[type=radio].circle-1 ~ .outer-circle {\n    border-color: #00cccc; }\n  .circlecheck input[type=radio].circle-2 ~ .outer-circle {\n    border-color: #ffa366; }\n  .circlecheck input[type=radio].circle-3 ~ .outer-circle {\n    border-color: #cc33ff; }\n  .circlecheck input[type=radio].circle-1:checked ~ .outer-circle {\n    border: 3px solid #009999; }\n  .circlecheck input[type=radio].circle-1:checked ~ .outer-circle::before {\n    background: #009999; }\n  .circlecheck input[type=radio].circle-2:checked ~ .outer-circle {\n    border: 3px solid #FF6600; }\n  .circlecheck input[type=radio].circle-2:checked ~ .outer-circle::before {\n    background: #FF6600; }\n  .circlecheck input[type=radio].circle-3:checked ~ .outer-circle {\n    border: 3px solid #9900CC; }\n  .circlecheck input[type=radio].circle-3:checked ~ .outer-circle::before {\n    background: #9900CC; }\n\n.styled-select {\n  height: 29px;\n  overflow: hidden;\n  width: 240px;\n  border-radius: 20px;\n  margin-bottom: 20px;\n  position: relative;\n  cursor: pointer; }\n  .styled-select:after {\n    content: \"...\";\n    color: #fff;\n    right: 0;\n    top: 0px;\n    padding: 0 0 2px;\n    border-left: 1px solid #ddd;\n    position: absolute;\n    pointer-events: none;\n    height: 29px;\n    width: 30px;\n    text-align: center;\n    line-height: 29px;\n    cursor: pointer; }\n  .styled-select.green {\n    background-color: #009900;\n    box-shadow: 1px 1px 11px #003300 inset; }\n  .styled-select.blue {\n    background-color: #0033FF;\n    box-shadow: 1px 1px 11px #001f99 inset; }\n  .styled-select select {\n    background: transparent;\n    border: none;\n    font-size: 14px;\n    height: 29px;\n    padding: 5px;\n    /* If you add too much padding here, the options won't show in IE */\n    width: 250px;\n    color: #fff; }\n  .styled-select option {\n    color: #333; }\n\n.textSlider {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .textSlider img {\n    width: 350px;\n    height: 350px; }\n\n.part1 {\n  -webkit-box-flex: 50%;\n      -ms-flex: 50%;\n          flex: 50%; }\n\n.part2 {\n  -webkit-box-flex: 50%;\n      -ms-flex: 50%;\n          flex: 50%; }\n\n.slide-in {\n  opacity: 0;\n  transition: all .5s; }\n\n.align-left.slide-in {\n  -webkit-transform: translateX(-30%) scale(0.95);\n          transform: translateX(-30%) scale(0.95); }\n\n.align-right.slide-in {\n  -webkit-transform: translateX(30%) scale(0.95);\n          transform: translateX(30%) scale(0.95); }\n\n.slide-in.active {\n  opacity: 1;\n  -webkit-transform: translateX(0%) scale(1);\n          transform: translateX(0%) scale(1); }\n\nbody::before {\n  display: none;\n  content: \"small\"; }\n\n@media only screen and (min-width: 54em) {\n  body::before {\n    content: \"medium\"; } }\n\n@media only screen and (min-width: 84em) {\n  body::before {\n    content: \"large\"; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part13/part13.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part13Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_buffer__ = __webpack_require__("../../../../rxjs/add/operator/buffer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_buffer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_buffer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_bufferCount__ = __webpack_require__("../../../../rxjs/add/operator/bufferCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_bufferCount___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_bufferCount__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_bufferTime__ = __webpack_require__("../../../../rxjs/add/operator/bufferTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_bufferTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_bufferTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_bufferToggle__ = __webpack_require__("../../../../rxjs/add/operator/bufferToggle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_bufferToggle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_bufferToggle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_bufferWhen__ = __webpack_require__("../../../../rxjs/add/operator/bufferWhen.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_bufferWhen___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_bufferWhen__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_observable_fromEvent__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var Part13Component = (function () {
    function Part13Component(http) {
        this.http = http;
        this.pressed = [];
        this.secretCode = 'happiness';
        this.headers = new __WEBPACK_IMPORTED_MODULE_7__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    Part13Component.prototype.sequenceDetection = function (e) {
        this.pressed.push(e.key);
        this.pressed.splice(-this.secretCode.length - 1, this.pressed.length - this.secretCode.length);
        if (this.pressed.join('').includes(this.secretCode)) {
            // this.http.get('http://www.cornify.com/js/cornify.js', {headers: this.headers})
            //     .subscribe((result) => {
            //         console.log(result);
            // result.cornify_add();
            // });
            console.log("CONGRATULATION !!!! ---- " + this.pressed);
        }
    };
    Part13Component.prototype.ngAfterViewInit = function () {
        console.log('%cDừng lại!', 'color: red; font-size: 50px; font-family: sans-serif; text-shadow: 1px 1px 5px #000;');
        console.log('%cTruy cập http://kul.vn/ để biết thêm thông tin chi tiết.', 'color: #444; font-size: 25px; font-family: sans-serif;');
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        ctx.canvas.style.background = '#C9DFCA';
        // ctx.canvas.onmousedown = function (e) {
        //     e.preventDefault();
        //     let test = windowToCanvas(e.clientX, e.clientY);
        //     console.log(test);
        // }
        var canvasClick = __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].fromEvent(ctx.canvas, 'mousedown');
        canvasClick.subscribe(function (e) {
            e.preventDefault();
            var test = windowToCanvas(e.clientX, e.clientY);
            print(test);
        });
        function print(val) {
            var el = document.createElement('p');
            el.innerText = val;
            // document.body.appendChild(el);
            document.body.insertBefore(el, document.body.firstChild);
        }
        function windowToCanvas(x, y) {
            var bbox = ctx.canvas.getBoundingClientRect();
            return {
                x: x - bbox.left,
                y: y - bbox.top,
            };
        }
        var sliderImages = document.querySelectorAll('.slide-in');
        //pageYOffset = scrollY
        function checkSide(e) {
            sliderImages.forEach(function (slideImage) {
                var slideInAt = (window.scrollY + window.innerHeight) - slideImage.height;
                var imageBottom = slideImage.offsetTop + slideImage.height;
                var isHalfShown = slideInAt > slideImage.offsetTop;
                var isNotScrollPast = window.pageYOffset < imageBottom;
                if (isHalfShown && isNotScrollPast) {
                    slideImage.classList.add('active');
                }
                else {
                    slideImage.classList.remove('active');
                }
            });
        }
        window.addEventListener('scroll', checkSide);
        // window.addEventListener('scroll',this.debounce(checkSide))
    };
    // getSize() {
    //     return window.getComputedStyle(document.body, '::before')
    //         .getPropertyValue('content')
    //         .replace(/["']/g, '');
    // }
    Part13Component.prototype.debounce = function (func, wait, immediate) {
        if (wait === void 0) { wait = 20; }
        if (immediate === void 0) { immediate = true; }
        var timeout;
        return function () {
            var context = this, args = arguments;
            var later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    };
    ;
    Part13Component.prototype.test = function () {
    };
    return Part13Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('mycanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part13Component.prototype, "mycanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* HostListener */])('window:keyup', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], Part13Component.prototype, "sequenceDetection", null);
Part13Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part13',
        template: __webpack_require__("../../../../../src/app/canvas/part13/part13.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part13/part13.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_http__["b" /* Http */]) === "function" && _b || Object])
], Part13Component);

var _a, _b;
//# sourceMappingURL=part13.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part14/part14.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #mycanvas id=\"draw\" width=\"800\" height=\"800\"></canvas>\n"

/***/ }),

/***/ "../../../../../src/app/canvas/part14/part14.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part14/part14.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part14Component; });
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

var Part14Component = (function () {
    function Part14Component() {
    }
    Part14Component.prototype.ngAfterViewInit = function () {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.strokeStyle = '#BADA55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 30;
        // ctx.globalCompositeOperation = 'multiply';
        var isDrawing = false;
        var lastX = 0;
        var lastY = 0;
        var hue = 0;
        var direction = true;
        function draw(e) {
            if (!isDrawing)
                return;
            ctx.strokeStyle = "hsl(" + hue + ", 100%, 50%)";
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            // ctx.lineTo(e.clientX,e.clientY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            _a = [e.offsetX, e.offsetY], lastX = _a[0], lastY = _a[1];
            hue++;
            if (hue >= 360) {
                hue = 0;
            }
            if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
                direction = !direction;
            }
            if (direction) {
                ctx.lineWidth++;
            }
            else {
                ctx.lineWidth--;
            }
            var _a;
        }
        canvas.onmousedown = function (e) {
            isDrawing = true;
            _a = [e.offsetX, e.offsetY], lastX = _a[0], lastY = _a[1];
            var _a;
        };
        canvas.onmousemove = draw;
        canvas.onmouseup = function (e) {
            isDrawing = false;
        };
        canvas.onmouseout = function (e) {
            isDrawing = false;
        };
    };
    return Part14Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('mycanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part14Component.prototype, "mycanvas", void 0);
Part14Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part14',
        template: __webpack_require__("../../../../../src/app/canvas/part14/part14.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part14/part14.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part14Component);

var _a;
//# sourceMappingURL=part14.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part15/part15.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a href=\"pre\" id=\"pre\">pre</a>\n  <a href=\"next\" id=\"next\">next</a>\n  <ul id=\"slider\">\n    <li class=\"slide\">\n      <blockquote>\n        1\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n      </blockquote>\n      <cite>Hello World 1</cite>\n    </li>\n    <li class=\"slide\">\n      <blockquote>\n        2\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n      </blockquote>\n      <cite>Hello World 2</cite>\n    </li>\n    <li class=\"slide\">\n      <blockquote>\n        3\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n      </blockquote>\n      <cite>Hello World 3</cite>\n    </li>\n    <li class=\"slide\">\n      <blockquote>\n        4\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n      </blockquote>\n      <cite>Hello World 4</cite>\n    </li>\n    <li class=\"slide\">\n      <blockquote>\n        5\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam architecto cupiditate debitis, exercitationem expedita id, illum laboriosam, maiores maxime porro possimus quasi quisquam unde? Accusamus architecto blanditiis consequatur.\n      </blockquote>\n      <cite>Hello World 5</cite>\n    </li>\n\n  </ul>\n</div>"

/***/ }),

/***/ "../../../../../src/app/canvas/part15/part15.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#slider {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  overflow: hidden; }\n\n.slide {\n  width: 100%;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  position: absolute; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part15/part15.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part15Component; });
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

var Part15Component = (function () {
    function Part15Component() {
    }
    Part15Component.prototype.ngAfterViewInit = function () {
        var slides = document.getElementsByClassName('slide'), slider = document.getElementById('slider'), cursor = 0, slideWidth = 0, topHeight = 0, slideCount = slides.length;
        if (slideCount > 0) {
            slideWidth = slides[0].offsetWidth;
            for (var i = 0; i < slideCount; i++) {
                slides[i].style.left = slideWidth * i + "px";
            }
            calculateTallestSlide();
            for (var i = 0; i < slideCount; i++) {
                slides[i].classList.add('animated');
            }
            document.getElementById('next').addEventListener('click', function (e) {
                e.preventDefault();
                if (cursor < slideCount - 1) {
                    moveSlides('forward');
                    cursor++;
                }
            });
            document.getElementById('pre').addEventListener('click', function (e) {
                e.preventDefault();
                if (cursor > 0) {
                    moveSlides('backward');
                    cursor--;
                }
            });
            window.addEventListener('resize', function () {
                slideWidth = slides[0].offsetWidth;
                for (var i = 0; i < slides.length; i++) {
                    if (i <= cursor) {
                        slides[i].style.left = "-" + slideWidth * (cursor - i) + "px";
                    }
                    else if (i > cursor) {
                        slides[i].style.left = slideWidth * (i - cursor) + "px";
                    }
                }
                calculateTallestSlide();
            });
        }
        function calculateTallestSlide() {
            for (var i = 0; i < slideCount; i++) {
                if (slides[i].offsetHeight > topHeight) {
                    topHeight = slides[i].offsetHeight;
                }
            }
            slider.style.height = topHeight + "px";
        }
        function moveSlides(direction) {
            for (var i = 0; i < slides.length; i++) {
                if (direction === "backward") {
                    slides[i].style.left = +slides[i].style.left.replace(/[^-\d\.]/g, '') + slideWidth + "px";
                }
                else if (direction === 'forward') {
                    // slides[i].style.left = parseInt(slides[i].style.left, 10) - slideWidth + "px"
                    slides[i].style.left = slides[i].style.left.replace(/[^-\d\.]/g, '') - slideWidth + "px";
                    //replace all charecter not is number to ''
                }
            }
        }
    };
    return Part15Component;
}());
Part15Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part15',
        template: __webpack_require__("../../../../../src/app/canvas/part15/part15.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part15/part15.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part15Component);

//# sourceMappingURL=part15.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part16/part16.component.html":
/***/ (function(module, exports) {

module.exports = "<div #test style=\"width: 450px;margin: 0 auto; padding: 20px; background: #6FCF9A\">\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquam amet aspernatur aut eaque facilis illum modi odio, qui ratione repellat sed similique sint ullam, voluptates voluptatibus? Deserunt, unde?</p>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquam amet aspernatur aut eaque facilis illum modi odio, qui ratione repellat sed similique sint ullam, voluptates voluptatibus? Deserunt, unde?</p>\n  <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquam amet aspernatur aut eaque facilis illum modi odio, qui ratione repellat sed similique sint ullam, voluptates voluptatibus? Deserunt, unde?</p>\n</div>\n<button (click)=\"makeAnimation(test)\">Click</button>"

/***/ }),

/***/ "../../../../../src/app/canvas/part16/part16.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part16/part16.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part16Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/@angular/animations.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Part16Component = (function () {
    function Part16Component(_builder) {
        this._builder = _builder;
    }
    Part16Component.prototype.ngOnInit = function () {
    };
    Part16Component.prototype.makeAnimation = function (element) {
        var myAnimation = this._builder.build([
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ width: 0 }),
            Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(1000, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* style */])({ width: '100px' }))
        ]);
        var player = myAnimation.create(element);
        // console.log(player.hasStarted())
        // console.log(player.getPosition())
        console.log(player.totalTime);
        player.play();
    };
    return Part16Component;
}());
Part16Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part16',
        template: __webpack_require__("../../../../../src/app/canvas/part16/part16.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part16/part16.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* AnimationBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_animations__["b" /* AnimationBuilder */]) === "function" && _a || Object])
], Part16Component);

var _a;
// https://angular.io/api/animations/AnimationBuilder
// https://angular.io/api/animations/AnimationPlayer 
//# sourceMappingURL=part16.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part17/part17.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!--Small image-->\n  <img src=\"assets/icons/android-icon-48x48.png\" class=\"blur\" alt=\"avatar1\">\n  <img src=\"assets/icons/android-icon-48x48.png\" class=\"blur\" alt=\"avatar1\">\n  <img src=\"assets/icons/android-icon-48x48.png\" class=\"blur\" alt=\"avatar1\">\n  <img src=\"assets/icons/android-icon-48x48.png\" class=\"blur\" alt=\"avatar1\">\n  <img src=\"assets/icons/android-icon-48x48.png\" class=\"blur\" alt=\"avatar1\">\n  <img src=\"assets/icons/android-icon-48x48.png\" class=\"blur\" alt=\"avatar1\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/canvas/part17/part17.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  .container img {\n    width: 150px;\n    height: 150px; }\n\n.blur {\n  transition: all .5s;\n  -webkit-filter: blur(24px);\n          filter: blur(24px); }\n\n.noblur {\n  transition: all 3s; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part17/part17.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part17Component; });
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

var Part17Component = (function () {
    function Part17Component() {
    }
    Part17Component.prototype.ngAfterViewInit = function () {
        var image = document.images;
        var arrayImage = [].slice.call(image);
        var img = [
            '../../../assets/farrel-nobel-103393.jpg',
            '../../../assets/joshua-earle-133254.jpg',
            '../../../assets/leaf-2471187_1920.jpg',
            '../../../assets/mathieu-nicolet-122542.jpg',
            '../../../assets/ray-hennessy-118046.jpg',
            '../../../assets/the-good-life.jpg',
        ];
        arrayImage.forEach(function (item, key) {
            var createImg = document.createElement('img');
            createImg.onload = function () {
                item.src = createImg.src;
                item.className = 'noblur';
            };
            setTimeout(function () {
                createImg.src = img[key];
            }, 50);
        });
        // const image: any = document.images[0];
        // console.log(image);
        //     let createImg = document.createElement('img');
        //     createImg.onload = () => {
        //         image.src = createImg.src;
        //         image.className = 'noblur';
        //     };
        //     setTimeout(() => {
        //         createImg.src = '../../../assets/farrel-nobel-103393.jpg';
        //     },100)
    };
    return Part17Component;
}());
Part17Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part17',
        template: __webpack_require__("../../../../../src/app/canvas/part17/part17.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part17/part17.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part17Component);

//# sourceMappingURL=part17.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part18/part18.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  part18 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/canvas/part18/part18.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part18/part18.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part18Component; });
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

var Part18Component = (function () {
    function Part18Component() {
    }
    Part18Component.prototype.ngOnInit = function () {
    };
    return Part18Component;
}());
Part18Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part18',
        template: __webpack_require__("../../../../../src/app/canvas/part18/part18.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part18/part18.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part18Component);

//# sourceMappingURL=part18.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part19/part19.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  part19 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/canvas/part19/part19.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part19/part19.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part19Component; });
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

var Part19Component = (function () {
    function Part19Component() {
    }
    Part19Component.prototype.ngOnInit = function () {
    };
    return Part19Component;
}());
Part19Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part19',
        template: __webpack_require__("../../../../../src/app/canvas/part19/part19.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part19/part19.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part19Component);

//# sourceMappingURL=part19.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part2/part2.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #myCanvas2></canvas>\n"

/***/ }),

/***/ "../../../../../src/app/canvas/part2/part2.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part2/part2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part2Component; });
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

var Part2Component = (function () {
    function Part2Component() {
    }
    Part2Component.prototype.ngOnInit = function () {
    };
    Part2Component.prototype.ngAfterViewInit = function () {
        var canvasPart2 = this.myCanvas2.nativeElement;
        this.ctx = canvasPart2.getContext('2d');
        canvasPart2.style.background = '#76FFDB';
        canvasPart2.style.margin = '0 auto';
        canvasPart2.style.display = 'block';
        canvasPart2.width = 600;
        canvasPart2.height = 400;
        // this.ctx.strokeStyle = '#0B05FF';
        // this.ctx.translate(150,150)
        // this.ctx.lineWidth = 5;
        // this.ctx.beginPath();
        // this.ctx.moveTo(150, 10);
        // this.ctx.lineTo(75, 200);
        // this.ctx.lineTo(225, 200);
        // this.ctx.lineTo(150, 10);
        // this.ctx.lineJoin = 'miter';
        // this.ctx.miterLimit = 1;
        // this.ctx.lineCap = 'butt';
        // this.ctx.closePath();
        // this.ctx.stroke();
        // this.ctx.fillStyle = "#00D47D";
        // this.ctx.fill();
        //   use bezierCurveTo
        //     this.ctx.lineWidth = 3;
        //     this.ctx.beginPath();
        //     this.ctx.moveTo(50, 50);
        //     this.ctx.bezierCurveTo(50, 400, 400, 400, 400, 50);
        //     this.ctx.lineTo(50, 50);
        //     this.ctx.stroke()
        // text function
        //     fillText(text , x , y , maxwidth);
        // mesureText(text).width
        // strokeText(text, x , y, maxwidth)
        //     property : font, textAlign, textBaseline
        // this.ctx.strokeStyle = 'green';
        // this.ctx.fillStyle = 'yellow'
        // let text = 'Good job boy !!!';
        // this.ctx.font = '40px Arial';
        // this.ctx.strokeText(text, 50, 50);
        // this.ctx.fillText(text, 50, 50);
        // let fontSize = 10;
        // for (let i=5; i<=25; i+=5 ) {
        //     let text = 'Canvas text' + fontSize;
        //     this.ctx.font = fontSize+ 'px Arial';
        //     let y = this.ctx.measureText(text).width;
        //     this.ctx.fillText(text, 10, y);
        //     fontSize +=5;
        // }
        this.ctx.font = '30px Arial';
        this.ctx.fillText('Regular Text', 100, 50);
        this.ctx.save();
        this.ctx.translate(100, 150);
        this.ctx.rotate(-0.5 * Math.PI);
        var Rtext = 'Rotated Text';
        this.ctx.fillText(Rtext, 0, 0);
        this.ctx.restore();
        var Rwidth = this.ctx.measureText(Rtext).width;
        this.ctx.fillText("REGULAR TEXT " + Rwidth, 40, Rwidth + 100);
    };
    return Part2Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('myCanvas2'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part2Component.prototype, "myCanvas2", void 0);
Part2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part2',
        template: __webpack_require__("../../../../../src/app/canvas/part2/part2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part2/part2.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part2Component);

var _a;
//# sourceMappingURL=part2.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part20/part20.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  part20 works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/canvas/part20/part20.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part20/part20.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part20Component; });
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

var Part20Component = (function () {
    function Part20Component() {
    }
    Part20Component.prototype.ngOnInit = function () {
    };
    return Part20Component;
}());
Part20Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part20',
        template: __webpack_require__("../../../../../src/app/canvas/part20/part20.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part20/part20.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part20Component);

//# sourceMappingURL=part20.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part3/part3.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #mycanvas></canvas>\n<button id=\"demo\">Show image</button>"

/***/ }),

/***/ "../../../../../src/app/canvas/part3/part3.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part3/part3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part3Component; });
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

var Part3Component = (function () {
    // public ctx: CanvasRenderingContext2D;
    function Part3Component() {
    }
    Part3Component.prototype.ngOnInit = function () {
    };
    Part3Component.prototype.ngAfterViewInit = function () {
        var canvasPart3 = this.myCanvas3.nativeElement;
        var ctx = canvasPart3.getContext('2d');
        canvasPart3.style.margin = '0 auto';
        canvasPart3.style.display = 'block';
        canvasPart3.width = 600;
        canvasPart3.height = 400;
        // function
        // drawImage (img, destX, destY, destWidth, destHeight);
        // toDataURL ()
        // createPattern(object, pattern);
        var img = new Image();
        img.onload = function () {
            // drawImage(img);
        };
        img.src = '../../assets/icons/android-icon-144x144.png';
        var wallpaper = new Image();
        wallpaper.onload = function () {
            drawWallPaper(wallpaper);
        };
        wallpaper.src = '../../../assets/icons/android-icon-36x36.png';
        // wallpaper.src = '../../../assets/the-good-life.jpg';
        function drawImage(image) {
            var destX = 10;
            var destY = 20;
            var destWidth = 212;
            var destHeight = 212;
            ctx.drawImage(image, destX, destY, destWidth, destHeight);
            var sourceX = 0;
            var sourceY = 0;
            var sourceWidth = 512;
            var sourceHeight = 110;
            destX = 250;
            destY = 20;
            destWidth = 212;
            destHeight = 50;
            // ctx.textAlign = 'center'; //start, end , center , left , right
            // ctx.textBaseline = 'middle' // top, middle, bottom ,hanging, alphabetic, ideographic
            ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight);
        }
        function drawWallPaper(image) {
            var pattern = ctx.createPattern(image, 'repeat');
            ctx.fillStyle = pattern;
            ctx.rect(100, 100, 400, 300);
            ctx.fill();
        }
        document.querySelector('#demo').addEventListener('click', function () {
            var dataURL = canvasPart3.toDataURL();
            window.open(dataURL, 'Canvas as Images', 'width=300, height=300');
        });
    };
    return Part3Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('mycanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part3Component.prototype, "myCanvas3", void 0);
Part3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part3',
        template: __webpack_require__("../../../../../src/app/canvas/part3/part3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part3/part3.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part3Component);

var _a;
//# sourceMappingURL=part3.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part4/part4.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #mycanvas></canvas>"

/***/ }),

/***/ "../../../../../src/app/canvas/part4/part4.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part4/part4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part4Component; });
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

var Part4Component = (function () {
    function Part4Component() {
    }
    Part4Component.prototype.ngAfterViewInit = function () {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        canvas.style.margin = '0 auto';
        canvas.style.display = 'block';
        canvas.width = 600;
        canvas.height = 400;
        canvas.style.background = '#6fff93';
        // ctx.fillStyle = 'red';
        // ctx.fillRect(20, 20, 100, 100);
        //
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(40, 40, 100, 100);
        //
        // let src = ctx.getImageData(20, 20, 90, 90);
        // let copy = ctx.createImageData(src.width, src.height);
        // for (var i = 0; i < copy.data.length; i++) {
        //   copy.data[i] = src.data[i];
        // }
        //
        // ctx.putImageData(copy, 350, 120);
        var x = 0, y = 0;
        function animate() {
            ctx.save();
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            //  Draw here
            ctx.fillStyle = 'red';
            ctx.fillRect(30 + x, 0, 100, 100);
            ctx.fillStyle = 'blue';
            ctx.fillRect(40, y, 100, 100);
            x++;
            y++;
            //
            ctx.restore();
        }
        var animationInterval = setInterval(animate, 30);
    };
    return Part4Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('mycanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part4Component.prototype, "mycanvas", void 0);
Part4Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part4',
        template: __webpack_require__("../../../../../src/app/canvas/part4/part4.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part4/part4.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part4Component);

var _a;
//# sourceMappingURL=part4.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part5/part5.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 style=\"text-align: center\">Status X : Y (<span id=\"test\"></span>)</h4>\n<h4 style=\"text-align: center; color: red;\" id=\"touch\"></h4>\n<canvas #canvas></canvas>\n\n"

/***/ }),

/***/ "../../../../../src/app/canvas/part5/part5.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part5/part5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part5Component; });
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

var Part5Component = (function () {
    function Part5Component() {
    }
    Part5Component.prototype.ngAfterViewInit = function () {
        var canvas = this.myCanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        canvas.style.margin = '0 auto';
        canvas.style.display = 'block';
        canvas.width = 450;
        canvas.height = 350;
        // canvas.style.background = '#0DFF6E';
        var bg = new Image();
        bg.src = '../../assets/the-good-life.jpg';
        function bgImage() {
            var _this = this;
            this.x = 0;
            this.y = 0;
            this.w = bg.width;
            this.h = bg.height;
            this.render = function () {
                ctx.drawImage(bg, _this.x--, 0);
                if (_this.x <= -499) {
                    _this.x = 0;
                }
            };
        }
        function Player() {
            var _this = this;
            this.w = 80;
            this.h = 80;
            this.x = (ctx.canvas.width - this.w) * 0.5;
            this.y = (ctx.canvas.height - this.h) * 0.5;
            this.render = function () {
                ctx.fillStyle = '#A739B5';
                ctx.fillRect(_this.x, _this.y, _this.w, _this.h);
            };
        }
        var background = new bgImage();
        var player = new Player();
        function animate() {
            ctx.save();
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            //
            background.render();
            player.render();
            //
            ctx.restore();
        }
        var animationInterval = setInterval(animate, 30);
        var initNumber = 3;
        document.addEventListener('keydown', function (event) {
            var key_press = String.fromCharCode(event.keyCode);
            switch (key_press) {
                case 'W':
                    player.y -= initNumber;
                    break;
                case 'A':
                    player.x -= initNumber;
                    break;
                case 'S':
                    player.y += initNumber;
                    break;
                case 'D':
                    player.x += initNumber;
                    break;
            }
        });
        ctx.canvas.addEventListener('mousemove', function (event) {
            var mouseX = event.clientX - ctx.canvas.offsetLeft;
            var mouseY = event.clientY - ctx.canvas.offsetTop;
            document.getElementById('test').innerHTML = mouseX + " | " + mouseY;
            if (mouseX >= player['x'] && mouseX < player['x'] + player['w'] && mouseY >= player['y'] && mouseY < player['y'] + player['h']) {
                document.getElementById('touch').innerHTML = "TOUCHED";
            }
        });
    };
    return Part5Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('canvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part5Component.prototype, "myCanvas", void 0);
Part5Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part5',
        template: __webpack_require__("../../../../../src/app/canvas/part5/part5.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part5/part5.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part5Component);

var _a;
//# sourceMappingURL=part5.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part6/part6.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #mycanvas></canvas>"

/***/ }),

/***/ "../../../../../src/app/canvas/part6/part6.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  width: 100%;\n  height: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part6/part6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part6Component; });
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

var Part6Component = (function () {
    function Part6Component() {
    }
    Part6Component.prototype.ngAfterViewInit = function () {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        canvas.style.display = 'block';
        canvas.style.margin = '0 auto';
        canvas.style.background = '#B8FFAC';
        canvas.width = 600;
        canvas.height = 400;
        function drawCircle(x, y, dx, dy, radius) {
            var _this = this;
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.startDraw = function () {
                ctx.beginPath();
                ctx.arc(_this.x, _this.y, _this.radius, 0, Math.PI * 2, false);
                ctx.strokeStyle = '#FF4B69';
                ctx.fillStyle = '#44A6FF';
                ctx.fill();
                ctx.stroke();
            };
            this.updateDraw = function () {
                if (_this.x + _this.radius > ctx.canvas.width || _this.x - _this.radius < 0) {
                    _this.dx = -_this.dx;
                }
                if (_this.y + _this.radius > ctx.canvas.height || _this.y - _this.radius < 0) {
                    _this.dy = -_this.dy;
                }
                _this.x += _this.dx;
                _this.y += _this.dy;
                _this.startDraw();
            };
        }
        var arrCircle = [];
        for (var i = 0; i < 150; i++) {
            var radius = 2;
            var x = Math.random() * (ctx.canvas.width - radius * 2) + radius;
            var y = Math.random() * (ctx.canvas.height - radius * 2) + radius;
            var dx = (Math.random() - 0.5) * 9;
            var dy = (Math.random() - 0.5) * 9;
            arrCircle.push(new drawCircle(x, y, dx, dy, radius));
        }
        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            for (var _i = 0, arrCircle_1 = arrCircle; _i < arrCircle_1.length; _i++) {
                var item = arrCircle_1[_i];
                item.updateDraw();
            }
        }
        animate();
    };
    return Part6Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('mycanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part6Component.prototype, "mycanvas", void 0);
Part6Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part6',
        template: __webpack_require__("../../../../../src/app/canvas/part6/part6.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part6/part6.component.scss")],
    }),
    __metadata("design:paramtypes", [])
], Part6Component);

var _a;
//# sourceMappingURL=part6.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part7/part7.component.html":
/***/ (function(module, exports) {

module.exports = "<canvas #mycanvas></canvas>"

/***/ }),

/***/ "../../../../../src/app/canvas/part7/part7.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part7/part7.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part7Component; });
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

var Part7Component = (function () {
    function Part7Component() {
    }
    Part7Component.prototype.ngAfterViewInit = function () {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        canvas.width = 100;
        canvas.height = 100;
        canvas.style.background = '#C3FFF7';
        var al = 0;
        var start = 3.72;
        var diff;
        function progressive() {
            diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.lineWidth = 10;
            ctx.globalAlpha = .7;
            var gradient = ctx.createLinearGradient(0, 0, 200, 0);
            gradient.addColorStop(0, '#D977EC');
            gradient.addColorStop(.5, '#A62FFF');
            gradient.addColorStop(1, '#FFB5E4');
            ctx.fillStyle = '#FF2042';
            ctx.strokeStyle = gradient;
            ctx.textAlign = 'center';
            ctx.fillText(al + "%", ctx.canvas.width * .5, (ctx.canvas.width * .5) + 2, ctx.canvas.width);
            ctx.beginPath();
            ctx.arc((canvas.width * .5), (canvas.height * .5), 30, start, diff / 10 + start, false);
            ctx.stroke();
            if (al >= 100) {
                clearInterval(animateProgress);
            }
            al++;
        }
        var animateProgress = setInterval(progressive, 50);
    };
    return Part7Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('mycanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part7Component.prototype, "mycanvas", void 0);
Part7Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part7',
        template: __webpack_require__("../../../../../src/app/canvas/part7/part7.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part7/part7.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part7Component);

var _a;
//# sourceMappingURL=part7.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part8/part8.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\n    <div class=\"tableRow\">\n        <div class=\"tableCell box\">\n            <canvas id=\"panel\" #mycanvas width=\"380\" height=\"380\"></canvas>\n        </div>\n        <div class=\"tableCell box\">\n            <img id=\"crop_result\" />\n        </div>\n    </div>\n\n    <div class=\"tableRow\">\n        <div class=\"tableCell\">\n            Zoom it:\n            <input id='scaleSlider' type='range' min='1' max='3.0' step='0.01' value='1.0' />\n\n        </div>\n        <div class=\"tableCell\">\n            <button id=\"cropImgButtn\">Crop It</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/canvas/part8/part8.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table {\n  display: table;\n  border-collapse: separate;\n  border-spacing: 10px 50px; }\n\n.tableRow {\n  display: table-row; }\n\n.tableCell {\n  display: table-cell;\n  vertical-align: top; }\n\n.box {\n  border: 10px solid rgba(238, 238, 238, 0.6);\n  background-color: rgba(238, 238, 238, 0.2); }\n\n#panel {\n  cursor: move; }\n\nbutton {\n  padding: 4px 10px;\n  font-size: 1em; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part8/part8.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part8Component; });
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

var Part8Component = (function () {
    function Part8Component() {
    }
    Part8Component.prototype.ngAfterViewInit = function () {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        var image = new Image();
        var baseX = 0;
        var baseY = 0;
        var lastPointX = 0;
        var lastPointY = 0;
        var cutoutWidth = 40;
        var windowWidth = 300;
        var scale = 1;
        var click = false;
        image.setAttribute('crossOrigin', 'anonymous');
        image.onload = onImageLoad;
        image.src = 'http://icodingclub.github.io/imagecropper/steve-jobs.jpg';
        document.getElementById("cropImgButtn").onclick = showCropedImage;
        document.getElementById("scaleSlider").oninput = updateScale;
        function onImageLoad() {
            drawImageToCanvas(0, 0);
            ctx.canvas.onmousedown = onMouseDown;
            ctx.canvas.onmousemove = onMouseMove;
            ctx.canvas.onmouseup = onMouseUp;
        }
        function drawImageToCanvas(x, y) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            baseX = baseX + (x - lastPointX);
            baseY = baseY + (y - lastPointY);
            lastPointX = x;
            lastPointY = y;
            ctx.drawImage(image, baseX, baseY, Math.floor(image.width * scale), Math.floor(image.height * scale));
            drawCutout();
        }
        function drawCutout() {
            ctx.fillStyle = 'rgba(128, 128, 128, 0.7)';
            ctx.beginPath();
            ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.moveTo(cutoutWidth, cutoutWidth);
            ctx.lineTo(cutoutWidth, windowWidth + cutoutWidth);
            ctx.lineTo(cutoutWidth + windowWidth, cutoutWidth + windowWidth);
            ctx.lineTo(cutoutWidth + windowWidth, cutoutWidth);
            ctx.closePath();
            ctx.fill();
        }
        function onMouseDown(e) {
            e.preventDefault();
            var loc = windowToCanvas(e.clientX, e.clientY);
            click = true;
            lastPointX = loc.x;
            lastPointY = loc.y;
        }
        function onMouseMove(e) {
            e.preventDefault();
            if (click) {
                var loc = windowToCanvas(e.clientX, e.clientY);
                drawImageToCanvas(loc.x, loc.y);
            }
        }
        function onMouseUp(e) {
            e.preventDefault();
            click = false;
        }
        ;
        function windowToCanvas(x, y) {
            var bbox = ctx.canvas.getBoundingClientRect();
            return {
                x: x - bbox.left * (ctx.canvas.width / bbox.width),
                y: y - bbox.top * (ctx.canvas.height / bbox.height)
            };
        }
        ;
        function showCropedImage() {
            var temp_canvas = document.createElement('canvas');
            var temp_ctx = temp_canvas.getContext('2d');
            temp_canvas.width = windowWidth;
            temp_canvas.height = windowWidth;
            temp_ctx.drawImage(ctx.canvas, cutoutWidth, cutoutWidth, windowWidth, windowWidth, 0, 0, windowWidth, windowWidth);
            var vData = temp_canvas.toDataURL();
            var imageResult = document.getElementById('crop_result');
            imageResult.src = vData;
        }
        function updateScale(e) {
            scale = e.target.value;
            drawImageToCanvas(lastPointX, lastPointY);
        }
    };
    return Part8Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('mycanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part8Component.prototype, "mycanvas", void 0);
Part8Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part8',
        template: __webpack_require__("../../../../../src/app/canvas/part8/part8.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part8/part8.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part8Component);

var _a;
//# sourceMappingURL=part8.component.js.map

/***/ }),

/***/ "../../../../../src/app/canvas/part9/part9.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table\">\n  <canvas id=\"mycanvas\" #mycanvas width=\"400\" height=\"400\"> </canvas>\n  <div class=\"box\">\n\n  </div>\n</div>\n<button class=\"btn\" id=\"cropImage\">CROP</button>"

/***/ }),

/***/ "../../../../../src/app/canvas/part9/part9.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n  padding: 10px 25px;\n  background: #00FF53;\n  color: #ffffff; }\n\n.box {\n  width: 450px;\n  height: 450px;\n  background: #CAFFE8;\n  margin-left: 25px; }\n\n.table {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n#mycanvas {\n  cursor: move; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas/part9/part9.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Part9Component; });
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

var Part9Component = (function () {
    function Part9Component() {
    }
    Part9Component.prototype.ngAfterViewInit = function () {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        var click = false;
        var image = new Image();
        image.onload = loadImage;
        image.src = 'http://icodingclub.github.io/imagecropper/steve-jobs.jpg';
        document.getElementById('cropImage').onclick = dropImage;
        function loadImage() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            ctx.canvas.onmousemove = onMouseMove;
            ctx.canvas.onmousedown = onMouseDown;
            ctx.canvas.onmouseup = onMouseUp;
        }
        function onMouseMove() {
        }
        function onMouseDown() {
        }
        function onMouseUp() {
        }
        function windowToCanvas() {
            var bbox = ctx.canvas.getBoundingClientRect();
            console.log(canvas.width);
            console.log(bbox);
        }
        function dropImage() {
        }
    };
    return Part9Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('mycanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], Part9Component.prototype, "mycanvas", void 0);
Part9Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-part9',
        template: __webpack_require__("../../../../../src/app/canvas/part9/part9.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas/part9/part9.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Part9Component);

var _a;
//# sourceMappingURL=part9.component.js.map

/***/ }),

/***/ "../../../../rxjs/add/observable/fromEvent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var fromEvent_1 = __webpack_require__("../../../../rxjs/observable/fromEvent.js");
Observable_1.Observable.fromEvent = fromEvent_1.fromEvent;
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var buffer_1 = __webpack_require__("../../../../rxjs/operator/buffer.js");
Observable_1.Observable.prototype.buffer = buffer_1.buffer;
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferCount_1 = __webpack_require__("../../../../rxjs/operator/bufferCount.js");
Observable_1.Observable.prototype.bufferCount = bufferCount_1.bufferCount;
//# sourceMappingURL=bufferCount.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferTime_1 = __webpack_require__("../../../../rxjs/operator/bufferTime.js");
Observable_1.Observable.prototype.bufferTime = bufferTime_1.bufferTime;
//# sourceMappingURL=bufferTime.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferToggle_1 = __webpack_require__("../../../../rxjs/operator/bufferToggle.js");
Observable_1.Observable.prototype.bufferToggle = bufferToggle_1.bufferToggle;
//# sourceMappingURL=bufferToggle.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/bufferWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var bufferWhen_1 = __webpack_require__("../../../../rxjs/operator/bufferWhen.js");
Observable_1.Observable.prototype.bufferWhen = bufferWhen_1.bufferWhen;
//# sourceMappingURL=bufferWhen.js.map

/***/ }),

/***/ "../../../../rxjs/operator/buffer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Buffers the source Observable values until `closingNotifier` emits.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when another Observable emits.</span>
 *
 * <img src="./img/buffer.png" width="100%">
 *
 * Buffers the incoming Observable values until the given `closingNotifier`
 * Observable emits a value, at which point it emits the buffer on the output
 * Observable and starts a new buffer internally, awaiting the next time
 * `closingNotifier` emits.
 *
 * @example <caption>On every click, emit array of most recent interval events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var interval = Rx.Observable.interval(1000);
 * var buffered = interval.buffer(clicks);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link window}
 *
 * @param {Observable<any>} closingNotifier An Observable that signals the
 * buffer to be emitted on the output Observable.
 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
 * values.
 * @method buffer
 * @owner Observable
 */
function buffer(closingNotifier) {
    return this.lift(new BufferOperator(closingNotifier));
}
exports.buffer = buffer;
var BufferOperator = (function () {
    function BufferOperator(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSubscriber = (function (_super) {
    __extends(BufferSubscriber, _super);
    function BufferSubscriber(destination, closingNotifier) {
        _super.call(this, destination);
        this.buffer = [];
        this.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
    }
    BufferSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        var buffer = this.buffer;
        this.buffer = [];
        this.destination.next(buffer);
    };
    return BufferSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=buffer.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferCount.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
/**
 * Buffers the source Observable values until the size hits the maximum
 * `bufferSize` given.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * that array only when its size reaches `bufferSize`.</span>
 *
 * <img src="./img/bufferCount.png" width="100%">
 *
 * Buffers a number of values from the source Observable by `bufferSize` then
 * emits the buffer and clears it, and starts a new buffer each
 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
 * `null`, then new buffers are started immediately at the start of the source
 * and when each buffer closes and is emitted.
 *
 * @example <caption>Emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>On every click, emit the last two click events as an array</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferCount(2, 1);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link pairwise}
 * @see {@link windowCount}
 *
 * @param {number} bufferSize The maximum size of the buffer emitted.
 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
 * For example if `startBufferEvery` is `2`, then a new buffer will be started
 * on every other value from the source. A new buffer is started at the
 * beginning of the source by default.
 * @return {Observable<T[]>} An Observable of arrays of buffered values.
 * @method bufferCount
 * @owner Observable
 */
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) { startBufferEvery = null; }
    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
}
exports.bufferCount = bufferCount;
var BufferCountOperator = (function () {
    function BufferCountOperator(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) {
            this.subscriberClass = BufferCountSubscriber;
        }
        else {
            this.subscriberClass = BufferSkipCountSubscriber;
        }
    }
    BufferCountOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferCountSubscriber = (function (_super) {
    __extends(BufferCountSubscriber, _super);
    function BufferCountSubscriber(destination, bufferSize) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.buffer = [];
    }
    BufferCountSubscriber.prototype._next = function (value) {
        var buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
        }
    };
    BufferCountSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer.length > 0) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber;
}(Subscriber_1.Subscriber));
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferSkipCountSubscriber = (function (_super) {
    __extends(BufferSkipCountSubscriber, _super);
    function BufferSkipCountSubscriber(destination, bufferSize, startBufferEvery) {
        _super.call(this, destination);
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        this.buffers = [];
        this.count = 0;
    }
    BufferSkipCountSubscriber.prototype._next = function (value) {
        var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
        this.count++;
        if (count % startBufferEvery === 0) {
            buffers.push([]);
        }
        for (var i = buffers.length; i--;) {
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                buffers.splice(i, 1);
                this.destination.next(buffer);
            }
        }
    };
    BufferSkipCountSubscriber.prototype._complete = function () {
        var _a = this, buffers = _a.buffers, destination = _a.destination;
        while (buffers.length > 0) {
            var buffer = buffers.shift();
            if (buffer.length > 0) {
                destination.next(buffer);
            }
        }
        _super.prototype._complete.call(this);
    };
    return BufferSkipCountSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=bufferCount.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferTime.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var async_1 = __webpack_require__("../../../../rxjs/scheduler/async.js");
var Subscriber_1 = __webpack_require__("../../../../rxjs/Subscriber.js");
var isScheduler_1 = __webpack_require__("../../../../rxjs/util/isScheduler.js");
/* tslint:enable:max-line-length */
/**
 * Buffers the source Observable values for a specific time period.
 *
 * <span class="informal">Collects values from the past as an array, and emits
 * those arrays periodically in time.</span>
 *
 * <img src="./img/bufferTime.png" width="100%">
 *
 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
 * Unless the optional argument `bufferCreationInterval` is given, it emits and
 * resets the buffer every `bufferTimeSpan` milliseconds. If
 * `bufferCreationInterval` is given, this operator opens the buffer every
 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
 * `maxBufferSize` is specified, the buffer will be closed either after
 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
 *
 * @example <caption>Every second, emit an array of the recent click events</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(1000);
 * buffered.subscribe(x => console.log(x));
 *
 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferTime(2000, 5000);
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferToggle}
 * @see {@link bufferWhen}
 * @see {@link windowTime}
 *
 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
 * @param {number} [bufferCreationInterval] The interval at which to start new
 * buffers.
 * @param {number} [maxBufferSize] The maximum buffer size.
 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
 * intervals that determine buffer boundaries.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferTime
 * @owner Observable
 */
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = async_1.async;
    if (isScheduler_1.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) {
        bufferCreationInterval = arguments[1];
    }
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) {
        maxBufferSize = arguments[2];
    }
    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
}
exports.bufferTime = bufferTime;
var BufferTimeOperator = (function () {
    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator;
}());
var Context = (function () {
    function Context() {
        this.buffer = [];
    }
    return Context;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferTimeSubscriber = (function (_super) {
    __extends(BufferTimeSubscriber, _super);
    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        _super.call(this, destination);
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
        this.contexts = [];
        var context = this.openContext();
        this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (this.timespanOnly) {
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
        else {
            var closeState = { subscriber: this, context: context };
            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: this, scheduler: scheduler };
            this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
    }
    BufferTimeSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for (var i = 0; i < len; i++) {
            var context = contexts[i];
            var buffer = context.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) {
                filledBufferContext = context;
            }
        }
        if (filledBufferContext) {
            this.onBufferFull(filledBufferContext);
        }
    };
    BufferTimeSubscriber.prototype._error = function (err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber.prototype._complete = function () {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while (contexts.length > 0) {
            var context = contexts.shift();
            destination.next(context.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber.prototype._unsubscribe = function () {
        this.contexts = null;
    };
    BufferTimeSubscriber.prototype.onBufferFull = function (context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber.prototype.openContext = function () {
        var context = new Context();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber.prototype.closeContext = function (context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) {
            contexts.splice(contexts.indexOf(context), 1);
        }
    };
    return BufferTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) {
        subscriber.closeContext(prevContext);
    }
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}
//# sourceMappingURL=bufferTime.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferToggle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
/**
 * Buffers the source Observable values starting from an emission from
 * `openings` and ending when the output of `closingSelector` emits.
 *
 * <span class="informal">Collects values from the past as an array. Starts
 * collecting only when `opening` emits, and calls the `closingSelector`
 * function to get an Observable that tells when to close the buffer.</span>
 *
 * <img src="./img/bufferToggle.png" width="100%">
 *
 * Buffers values from the source by opening the buffer via signals from an
 * Observable provided to `openings`, and closing and sending the buffers when
 * a Subscribable or Promise returned by the `closingSelector` function emits.
 *
 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var openings = Rx.Observable.interval(1000);
 * var buffered = clicks.bufferToggle(openings, i =>
 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferWhen}
 * @see {@link windowToggle}
 *
 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
 * buffers.
 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
 * which, when it emits, signals that the associated buffer should be emitted
 * and cleared.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferToggle
 * @owner Observable
 */
function bufferToggle(openings, closingSelector) {
    return this.lift(new BufferToggleOperator(openings, closingSelector));
}
exports.bufferToggle = bufferToggle;
var BufferToggleOperator = (function () {
    function BufferToggleOperator(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    BufferToggleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferToggleSubscriber = (function (_super) {
    __extends(BufferToggleSubscriber, _super);
    function BufferToggleSubscriber(destination, openings, closingSelector) {
        _super.call(this, destination);
        this.openings = openings;
        this.closingSelector = closingSelector;
        this.contexts = [];
        this.add(subscribeToResult_1.subscribeToResult(this, openings));
    }
    BufferToggleSubscriber.prototype._next = function (value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for (var i = 0; i < len; i++) {
            contexts[i].buffer.push(value);
        }
    };
    BufferToggleSubscriber.prototype._error = function (err) {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber.prototype._complete = function () {
        var contexts = this.contexts;
        while (contexts.length > 0) {
            var context = contexts.shift();
            this.destination.next(context.buffer);
            context.subscription.unsubscribe();
            context.buffer = null;
            context.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber.prototype.notifyComplete = function (innerSub) {
        this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber.prototype.openBuffer = function (value) {
        try {
            var closingSelector = this.closingSelector;
            var closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) {
                this.trySubscribe(closingNotifier);
            }
        }
        catch (err) {
            this._error(err);
        }
    };
    BufferToggleSubscriber.prototype.closeBuffer = function (context) {
        var contexts = this.contexts;
        if (contexts && context) {
            var buffer = context.buffer, subscription = context.subscription;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    };
    BufferToggleSubscriber.prototype.trySubscribe = function (closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new Subscription_1.Subscription();
        var context = { buffer: buffer, subscription: subscription };
        contexts.push(context);
        var innerSubscription = subscribeToResult_1.subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) {
            this.closeBuffer(context);
        }
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    };
    return BufferToggleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=bufferToggle.js.map

/***/ }),

/***/ "../../../../rxjs/operator/bufferWhen.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscription_1 = __webpack_require__("../../../../rxjs/Subscription.js");
var tryCatch_1 = __webpack_require__("../../../../rxjs/util/tryCatch.js");
var errorObject_1 = __webpack_require__("../../../../rxjs/util/errorObject.js");
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/**
 * Buffers the source Observable values, using a factory function of closing
 * Observables to determine when to close, emit, and reset the buffer.
 *
 * <span class="informal">Collects values from the past as an array. When it
 * starts collecting values, it calls a function that returns an Observable that
 * tells when to close the buffer and restart collecting.</span>
 *
 * <img src="./img/bufferWhen.png" width="100%">
 *
 * Opens a buffer immediately, then closes the buffer when the observable
 * returned by calling `closingSelector` function emits a value. When it closes
 * the buffer, it immediately opens a new buffer and repeats the process.
 *
 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var buffered = clicks.bufferWhen(() =>
 *   Rx.Observable.interval(1000 + Math.random() * 4000)
 * );
 * buffered.subscribe(x => console.log(x));
 *
 * @see {@link buffer}
 * @see {@link bufferCount}
 * @see {@link bufferTime}
 * @see {@link bufferToggle}
 * @see {@link windowWhen}
 *
 * @param {function(): Observable} closingSelector A function that takes no
 * arguments and returns an Observable that signals buffer closure.
 * @return {Observable<T[]>} An observable of arrays of buffered values.
 * @method bufferWhen
 * @owner Observable
 */
function bufferWhen(closingSelector) {
    return this.lift(new BufferWhenOperator(closingSelector));
}
exports.bufferWhen = bufferWhen;
var BufferWhenOperator = (function () {
    function BufferWhenOperator(closingSelector) {
        this.closingSelector = closingSelector;
    }
    BufferWhenOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    };
    return BufferWhenOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var BufferWhenSubscriber = (function (_super) {
    __extends(BufferWhenSubscriber, _super);
    function BufferWhenSubscriber(destination, closingSelector) {
        _super.call(this, destination);
        this.closingSelector = closingSelector;
        this.subscribing = false;
        this.openBuffer();
    }
    BufferWhenSubscriber.prototype._next = function (value) {
        this.buffer.push(value);
    };
    BufferWhenSubscriber.prototype._complete = function () {
        var buffer = this.buffer;
        if (buffer) {
            this.destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber.prototype._unsubscribe = function () {
        this.buffer = null;
        this.subscribing = false;
    };
    BufferWhenSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.openBuffer();
    };
    BufferWhenSubscriber.prototype.notifyComplete = function () {
        if (this.subscribing) {
            this.complete();
        }
        else {
            this.openBuffer();
        }
    };
    BufferWhenSubscriber.prototype.openBuffer = function () {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) {
            this.destination.next(buffer);
        }
        this.buffer = [];
        var closingNotifier = tryCatch_1.tryCatch(this.closingSelector)();
        if (closingNotifier === errorObject_1.errorObject) {
            this.error(errorObject_1.errorObject.e);
        }
        else {
            closingSubscription = new Subscription_1.Subscription();
            this.closingSubscription = closingSubscription;
            this.add(closingSubscription);
            this.subscribing = true;
            closingSubscription.add(subscribeToResult_1.subscribeToResult(this, closingNotifier));
            this.subscribing = false;
        }
    };
    return BufferWhenSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=bufferWhen.js.map

/***/ })

});
//# sourceMappingURL=canvas.module.chunk.js.map