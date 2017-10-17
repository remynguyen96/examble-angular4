"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var AppComponent = (function () {
    function AppComponent(http, sanitizer) {
        this.http = http;
        this.sanitizer = sanitizer;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let requestOptions = new RequestOptions();
        // requestOptions.headers = headers;
        // let demo =  this.http.get('http://kul.dev/test', requestOptions).map((res: Response) => res.json());
        // demo.subscribe(
        //   result => {
        //     let IMG_SRC_REGEX = /(src="\/uploads)/im;
        //     let replacement = 'src="http://cdn.kul.vn/uploads';
        //     let test = JSON.parse(result);
        //     let test2 = test.content.replace(IMG_SRC_REGEX, replacement);
        //     this.content = test2;
        //   },
        //   error => console.log(error),
        // );
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
exports.AppComponent = AppComponent;
