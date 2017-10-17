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
var AnimationComponent = (function () {
    function AnimationComponent() {
        this.items = [];
    }
    AnimationComponent.prototype.showItems = function () {
        this.items = ['any', 'some', 'every', 'always', 'usually', 'sometimes'];
    };
    AnimationComponent.prototype.hideItems = function () {
        this.items = [];
    };
    AnimationComponent.prototype.toggle = function () {
        this.items.length ? this.hideItems() : this.showItems();
    };
    AnimationComponent.prototype.getState = function (outlet) {
        return outlet.activatedRouteData.state;
    };
    return AnimationComponent;
}());
AnimationComponent = __decorate([
    core_1.Component({
        selector: 'app-animation',
        templateUrl: './animation.component.html',
        styleUrls: ['./animation.component.scss'],
        animations: [
            // trigger('routerTransition', [
            //   transition('* <=> *',[
            //     query(':enter, :leave', style({
            //       position: 'fixed',
            //       width: '100%',
            //     }),{optional: true}),
            //     group([
            //       query(':enter', [
            //         style({
            //           transform: 'translateX(100%)'
            //         }),
            //         animate('.5s ease-in-out', style({transform: 'translateX(0)'}))
            //       ],{optional: true}),
            //       query(':leave',[
            //         style({
            //           transform: 'translateX(0)'
            //         }),
            //         animate('.5s ease-out', style({transform: 'translateX(-100%)'}))
            //       ],{optional: true}),
            //     ]),
            //   ]),
            // ]),
            //////////////////////////////////////////
            // trigger('routerTransition', [
            //   transition('* => home', [
            //     query(':enter, :leave', style({
            //       position: 'fixed',
            //       width: '100%',
            //     }), {optional: true}),
            //     group([
            //       query(':enter',[
            //         style({transform: 'translateX(-100%)'}),
            //         animate('.5s ease-in-out', style({transform: 'translateX(0)'}))
            //       ], {optional: true}),
            //       query(':leave', [
            //         style({transform: 'translateX(0)'}),
            //         animate('.5s ease-out', style({transform: 'translateX(100%)'}))
            //       ], {optional: true}),
            //     ]),
            //   ]),
            //   transition('* => about', [
            //     group([
            //       query(':enter, :leave', style({
            //         position: 'fixed',
            //         width: '100%',
            //       }), {optional: true}),
            //       query(':enter', [
            //         style({
            //           transform: 'translateX(100%)'
            //         }),
            //         animate('.5s ease-in-out', style({transform: 'translateX(0%)'}))
            //       ], {optional: true}),
            //       query(':leave', [
            //         style({
            //           transform: 'translateX(0)'
            //         }),
            //         animate('.5s ease-out', style({transform: 'translateX(-100%)'}))
            //       ], {optional: true})
            //     ])
            //   ])
            // ]),
            //////////////////////////////////////////
            // trigger('routerTransition', [
            //   transition('* <=> *', [
            //     query(':enter, :leave', style({
            //       position: 'fixed',
            //       width: '100%',
            //     }),{optional: true}),
            //     query('.block', style({
            //       opacity: 0
            //     }),{optional: true}),
            //     group([
            //       query(':enter',[
            //         style({transform: 'translateX(100%)'}),
            //         animate('.5s ease-in-out', style({transform: 'translateX(0)'}))
            //       ],{optional: true}),
            //       query(':leave',[
            //         style({transform: 'translateX(0)'}),
            //         animate('.5s ease-out', style({transform: 'translateX(-100%)'}))
            //       ],{optional: true}),
            //     ]),
            //     query(':enter .block', stagger(400, [
            //         style({transform: 'translateY(100px)'}),
            //         animate('1s ease-in-out', style({transform: 'translateY(0)', opacity: 1}))
            //     ]),{optional: true})
            //   ])
            // ]),
            //////////////////////////////////////////
            animations_1.trigger('routerTransition', [
                animations_1.transition('* <=> *', [
                    animations_1.query(':enter, :leave', animations_1.style({ position: 'fixed', width: '100%' }), { optional: true }),
                    animations_1.query(':enter', animations_1.style({ transform: 'translateX(100%)' }), { optional: true }),
                    animations_1.sequence([
                        animations_1.query(':leave', animations_1.animateChild(), { optional: true }),
                        animations_1.group([
                            animations_1.query(':enter', [
                                animations_1.style({ transform: 'translateX(100%)' }),
                                animations_1.animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({ transform: 'translateX(0%)' })),
                            ], { optional: true }),
                            animations_1.query(':leave', [
                                animations_1.style({ transform: 'translateX(0%)' }),
                                animations_1.animate('500ms cubic-bezier(.75,-0.48,.26,1.52)', animations_1.style({ transform: 'translateX(-100%)' }))
                            ], { optional: true }),
                        ]),
                        animations_1.query(':enter', animations_1.animateChild(), { optional: true }),
                    ])
                ])
            ]),
            //////////////////////////////////////////
            animations_1.trigger('fade', [
                animations_1.transition('* => *', [
                    animations_1.query(':leave', [
                        animations_1.stagger(100, [
                            animations_1.animate('0.5s', animations_1.style({ opacity: 0 }))
                        ]),
                    ], { optional: true }),
                    animations_1.query(':enter', [
                        animations_1.stagger(100, [
                            animations_1.animate('0.5s', animations_1.style({ opacity: 1 }))
                        ]),
                    ], { optional: true }),
                ]),
            ]),
        ]
    })
], AnimationComponent);
exports.AnimationComponent = AnimationComponent;
