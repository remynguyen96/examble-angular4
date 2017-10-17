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
var Part2Component = (function () {
    function Part2Component() {
    }
    Part2Component.prototype.ngOnInit = function () {
    };
    return Part2Component;
}());
Part2Component = __decorate([
    core_1.Component({
        selector: 'app-part2',
        templateUrl: './part2.component.html',
        styleUrls: ['./part2.component.scss'],
        animations: [
            animations_1.trigger('homeTransition', [
                animations_1.transition(':enter', [
                    animations_1.query('.block', animations_1.style({ opacity: 0 })),
                    animations_1.query('.block', animations_1.stagger(300, [
                        animations_1.style({ transform: 'translateY(100px)' }),
                        animations_1.animate('1s cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({ transform: 'translateY(0)', opacity: 1 })),
                    ])),
                ]),
                animations_1.transition(':leave', [
                    animations_1.query('.block', animations_1.stagger(300, [
                        animations_1.style({ transform: 'translateY(0)', opacity: 1 }),
                        animations_1.animate('1s cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({ transform: 'translateY(100px)', opacity: 0 })),
                    ])),
                ])
            ])
        ],
        host: {
            '[@homeTransition]': ''
        }
    })
], Part2Component);
exports.Part2Component = Part2Component;
