"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var animations_1 = require("@angular/animations");
var Part1Component = (function () {
    function Part1Component() {
        this.items = [];
    }
    Part1Component.prototype.ngOnInit = function () {
        this.items = ['Hey what going on men', 'good morning evevry body', 'hey guys, whats up !'];
    };
    Part1Component.prototype.addItem = function () {
        this.items.push('good Job Men !');
    };
    Part1Component.prototype.removeItem = function () {
        this.items.pop();
    };
    return Part1Component;
}());
Part1Component = __decorate([
    core_1.Component({
        selector: 'app-part1',
        templateUrl: './part1.component.html',
        styleUrls: ['./part1.component.scss'],
        animations: [
            animations_1.trigger('listAnimation', [
                animations_1.transition('* => *', [
                    animations_1.query(':enter', animations_1.style({ opacity: 0 }), { optional: true }),
                    animations_1.query(':enter', animations_1.stagger('300ms', [
                        animations_1.animate('800ms ease-in', animations_1.keyframes([
                            animations_1.style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
                            animations_1.style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                            animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 }),
                        ]))
                    ]), { optional: true }),
                    animations_1.query(':leave', animations_1.stagger('300ms', [
                        animations_1.animate('800ms ease-out', animations_1.keyframes([
                            animations_1.style({ opacity: 1, transform: 'translateY(0)', offset: 0 }),
                            animations_1.style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                            animations_1.style({ opacity: 0, transform: 'translateY(-75%)', offset: 1.0 }),
                        ]))
                    ]), { optional: true }),
                ])
            ]),
            animations_1.trigger('explainer', [
                animations_1.transition('* => *', [
                    animations_1.query('.col', animations_1.style({ opacity: 0, transform: 'translateX(-40px)' })),
                    animations_1.query('.col', animations_1.stagger('500ms', [
                        animations_1.animate('800ms 1.2s ease-out', animations_1.style({ opacity: 1, transform: 'translateX(0)' })),
                    ])),
                ])
            ]),
        ],
    })
], Part1Component);
exports.Part1Component = Part1Component;
