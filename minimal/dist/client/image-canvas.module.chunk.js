webpackJsonp(["image-canvas.module"],{

/***/ "../../../../../src/app/image-canvas/image-canvas-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCanvasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_canvas_component__ = __webpack_require__("../../../../../src/app/image-canvas/image-canvas.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__image_canvas_component__["a" /* ImageCanvasComponent */]
    }
];
var ImageCanvasRoutingModule = (function () {
    function ImageCanvasRoutingModule() {
    }
    return ImageCanvasRoutingModule;
}());
ImageCanvasRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
    })
], ImageCanvasRoutingModule);

//# sourceMappingURL=image-canvas-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/image-canvas/image-canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper_image\">\n    <img #avatar src=\"assets/the-good-life.jpg\" alt=\"avatar\" class=\"img\">\n</div>\n<div class=\"upload\">\n    <input type=\"file\" (change)=\"onFileChange($event)\">\n</div>\n<ng-container *ngIf=\"openModal\">\n    <app-modal\n            [fileUpload]= \"fileUpload\"\n            [showModal]=\"openModal\"\n            (dataUrl)=\"dataUrl($event)\"\n            (typeModal)=\"closeModal($event)\">\n    </app-modal>\n</ng-container>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/image-canvas/image-canvas.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper_image {\n  width: 560px;\n  height: 460px;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n.img {\n  width: 200px;\n  height: 200px;\n  transition: all .4s;\n  -o-object-fit: cover;\n     object-fit: cover;\n  opacity: 1; }\n\n.img.active {\n  box-shadow: 0 0 0 2px black;\n  opacity: .7;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-canvas/image-canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCanvasComponent; });
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

var ImageCanvasComponent = (function () {
    function ImageCanvasComponent() {
    }
    ImageCanvasComponent.prototype.ngOnInit = function () {
    };
    ImageCanvasComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var avatar = this.avatar.nativeElement;
        avatar.ondragover = function (e) {
            e.preventDefault();
            avatar.classList.add('active');
        };
        avatar.ondragleave = function (e) {
            e.preventDefault();
            avatar.classList.remove('active');
        };
        avatar.ondrop = function (e) {
            e.preventDefault();
            avatar.classList.remove('active');
            var files = e.dataTransfer.files;
            e.dataTransfer.clearData();
            if (files.length > 0) {
                _this.openModal = true;
                _this.fileUpload = files;
            }
        };
    };
    ImageCanvasComponent.prototype.closeModal = function (e) {
        this.openModal = e;
    };
    ImageCanvasComponent.prototype.onFileChange = function (e) {
        var files = e.target.files;
        this.fileUpload = files;
        this.openModal = true;
    };
    ImageCanvasComponent.prototype.dataUrl = function (e) {
        console.log(e);
        var image = this.avatar.nativeElement;
        image.src = e.url;
    };
    return ImageCanvasComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('avatar'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ImageCanvasComponent.prototype, "avatar", void 0);
ImageCanvasComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-image-canvas',
        template: __webpack_require__("../../../../../src/app/image-canvas/image-canvas.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-canvas/image-canvas.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ImageCanvasComponent);

var _a;
//# sourceMappingURL=image-canvas.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-canvas/image-canvas.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCanvasModule", function() { return ImageCanvasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_canvas_routing_module__ = __webpack_require__("../../../../../src/app/image-canvas/image-canvas-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_canvas_component__ = __webpack_require__("../../../../../src/app/image-canvas/image-canvas.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__ = __webpack_require__("../../../../../src/app/image-canvas/modal/modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ImageCanvasModule = (function () {
    function ImageCanvasModule() {
    }
    return ImageCanvasModule;
}());
ImageCanvasModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__image_canvas_routing_module__["a" /* ImageCanvasRoutingModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__image_canvas_component__["a" /* ImageCanvasComponent */],
            __WEBPACK_IMPORTED_MODULE_4__modal_modal_component__["a" /* ModalComponent */]
        ]
    })
], ImageCanvasModule);

//# sourceMappingURL=image-canvas.module.js.map

/***/ }),

/***/ "../../../../../src/app/image-canvas/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"showModal\">\n    <div class=\"wrapper_modal\">\n        <h3 class=\"wrapper_title\">Edit Image</h3>\n        <div class=\"wrapper_content\">\n            <canvas (mousemove)=\"onMouseMove($event)\" (mousedown)=\"onMouseDown($event)\" (mouseup)=\"onMouseUp($event)\" #mycanvas id=\"mycanvas\" width=\"400px\" height=\"400px\"></canvas>\n        </div>\n        <div class=\"wrapper_editor\">\n            <div class=\"input\">\n                <input type=\"range\" (input)=\"scaleImage($event)\" min=\"0.1\" max=\"2.0\" step='0.01'  value=\"1.0\">\n            </div>\n            <div class=\"btn\">\n                <button class=\"btn-cancel\" (click)=\"closeModal()\">Cancel</button>\n                <button class=\"btn-save\" (click)=\"saveImage()\">Save</button>\n            </div>\n        </div>\n    </div>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/image-canvas/modal/modal.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper_modal {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 99999;\n  background: #E9EBE7; }\n\n.wrapper_title {\n  font-size: 14px;\n  line-height: 14px;\n  color: #484742;\n  font-weight: 700;\n  border-bottom: 1px solid #ED5B00;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  margin-bottom: 0; }\n\n.wrapper_editor {\n  padding: 12px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border-top: 1px solid #ED5B00; }\n\n.input {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center; }\n\n.btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .btn button {\n    border-radius: 2px;\n    border: none;\n    padding: 2px 8px;\n    box-shadow: 0 0 0 1px #B7C9BE; }\n  .btn-cancel {\n    color: #4A534B;\n    background: transparent; }\n  .btn-save {\n    color: #ffffff;\n    background: #46FF85;\n    margin-left: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-canvas/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
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

var ModalComponent = (function () {
    // (400 - windowWidth) / 2 = cutoutWidth
    function ModalComponent() {
        this.typeModal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.dataUrl = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.clickCanvas = false;
        this.scale = 1;
        this.baseX = 0;
        this.baseY = 0;
        this.lastPointX = 0;
        this.lastPointY = 0;
        this.cutoutWidth = 100;
        this.windowWidth = 200;
        this.imageUpload = new Image();
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    ModalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var files = this.fileUpload;
        var url = window.URL, srcImg = url.createObjectURL(files[0]);
        this.imageUpload.onload = function () {
            url.revokeObjectURL(srcImg);
            _this.canvasImage(_this.imageUpload);
            _this.drawImageCanvas(0, 0);
        };
        this.imageUpload.src = srcImg;
    };
    ModalComponent.prototype.canvasImage = function (image) {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };
    ;
    ModalComponent.prototype.drawImageCanvas = function (x, y) {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.baseX = this.baseX + (x - this.lastPointX);
        this.baseY = this.baseY + (y - this.lastPointY);
        this.lastPointX = x;
        this.lastPointY = y;
        var imageWidth = Math.floor(this.imageUpload.width * this.scale);
        var imageHeight = Math.floor(this.imageUpload.height * this.scale);
        ctx.drawImage(this.imageUpload, this.baseX, this.baseY, imageWidth, imageHeight);
        this.drawCutout();
    };
    ModalComponent.prototype.drawCutout = function () {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(128, 128, 128, 0.7)';
        ctx.beginPath();
        ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.moveTo(this.cutoutWidth, this.cutoutWidth);
        ctx.lineTo(this.cutoutWidth, this.cutoutWidth + this.windowWidth);
        ctx.lineTo(this.cutoutWidth + this.windowWidth, this.cutoutWidth + this.windowWidth);
        ctx.lineTo(this.cutoutWidth + this.windowWidth, this.cutoutWidth);
        ctx.closePath();
        ctx.fill();
    };
    ModalComponent.prototype.onMouseDown = function (e) {
        e.preventDefault();
        var loc = this.windowToCanvas(e.clientX, e.clientY);
        this.clickCanvas = true;
        this.lastPointX = loc.x;
        this.lastPointY = loc.y;
    };
    ModalComponent.prototype.onMouseMove = function (e) {
        e.preventDefault();
        if (this.clickCanvas) {
            var loc = this.windowToCanvas(e.clientX, e.clientY);
            this.drawImageCanvas(loc.x, loc.y);
        }
    };
    ModalComponent.prototype.onMouseUp = function (e) {
        e.preventDefault();
        this.clickCanvas = false;
    };
    ModalComponent.prototype.windowToCanvas = function (x, y) {
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        var bbox = ctx.canvas.getBoundingClientRect();
        return {
            x: x - bbox.left * (ctx.canvas.width / bbox.width),
            y: y - bbox.top * (ctx.canvas.height / bbox.height),
        };
    };
    ModalComponent.prototype.scaleImage = function (e) {
        var valueScale = e.target.value;
        this.scale = valueScale;
        this.drawImageCanvas(this.lastPointX, this.lastPointY);
    };
    ModalComponent.prototype.saveImage = function () {
        var _this = this;
        var canvas = this.mycanvas.nativeElement;
        var ctx = canvas.getContext('2d');
        var new_canvas = document.createElement('canvas');
        var new_ctx = new_canvas.getContext('2d');
        new_canvas.height = new_canvas.width = this.windowWidth;
        new_ctx.drawImage(ctx.canvas, this.cutoutWidth, this.cutoutWidth, this.windowWidth, this.windowWidth, 0, 0, this.windowWidth, this.windowWidth);
        var data = new_canvas.toDataURL();
        new_canvas.toBlob(function (result) {
            var files = new File([result], _this.fileUpload[0].name, { lastModified: Date.now(), type: 'image/png' });
            _this.dataUrl.emit({
                url: data,
                files: files,
            });
            _this.typeModal.emit(false);
        });
    };
    ModalComponent.prototype.closeModal = function () {
        this.typeModal.emit(false);
    };
    return ModalComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('mycanvas'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object)
], ModalComponent.prototype, "mycanvas", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ModalComponent.prototype, "showModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "fileUpload", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], ModalComponent.prototype, "typeModal", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], ModalComponent.prototype, "dataUrl", void 0);
ModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-modal',
        template: __webpack_require__("../../../../../src/app/image-canvas/modal/modal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-canvas/modal/modal.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ModalComponent);

var _a, _b, _c;
//# sourceMappingURL=modal.component.js.map

/***/ })

});
//# sourceMappingURL=image-canvas.module.chunk.js.map