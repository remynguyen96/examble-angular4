import {Component, OnInit} from '@angular/core';
import {animate, animateChild, group, query, sequence, stagger, style, transition, trigger} from '@angular/animations';

@Component({
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
    trigger('routerTransition', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }),        {optional: true}),
        query(':enter', style({ transform: 'translateX(100%)' }),
          {optional: true}),
        sequence([
          query(':leave', animateChild(),{optional: true}),
          group([
            query(':enter', [
              style({ transform: 'translateX(100%)' }),
              animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                style({ transform: 'translateX(0%)' })),
            ],{optional: true}),
            query(':leave', [
              style({ transform: 'translateX(0%)' }),
              animate('500ms cubic-bezier(.75,-0.48,.26,1.52)',
                style({ transform: 'translateX(-100%)' }))
            ],{optional: true}),
          ]),
          query(':enter', animateChild(),{optional: true}),
        ])
      ])
    ]),
    //////////////////////////////////////////
    trigger('fade', [
      transition('* => *', [
        query(':leave', [
          stagger(100, [
            animate('0.5s', style({opacity: 0}))
          ]),
        ], {optional: true}),
        query(':enter', [
          stagger(100, [
            animate('0.5s', style({opacity: 1}))
          ]),
        ], {optional: true}),
      ]),
    ]),
    //////////////////////////////////////////
  ]
})
export class AnimationComponent {
  items: any[] = [];

  constructor() {

  }

  showItems() {
    this.items = ['any', 'some', 'every', 'always', 'usually', 'sometimes'];
  }

  hideItems() {
    this.items = [];
  }

  toggle() {
    this.items.length ? this.hideItems() : this.showItems();
  }


  getState(outlet) {
    return outlet.activatedRouteData.state;
  }

}
