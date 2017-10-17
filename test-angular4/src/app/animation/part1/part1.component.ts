import { Component, OnInit } from '@angular/core';
import {animate, animateChild, keyframes, query, stagger, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('800ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))
        ]), {optional: true}),
        query(':leave', stagger('300ms', [
          animate('800ms ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 0, transform: 'translateY(-75%)',     offset: 1.0}),
          ]))
        ]), {optional: true}),
      ])
    ]),

    trigger('explainer', [
      transition('* => *', [
        query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),
        query('.col', stagger('500ms', [
          animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),

      ])
    ]),
  ],
})
export class Part1Component implements OnInit {
  items = [];

  constructor() {
  }

  ngOnInit() {
    this.items = ['Hey what going on men', 'good morning evevry body', 'hey guys, whats up !']
  }

  addItem() {
    this.items.push('good Job Men !');
  }

  removeItem() {
    this.items.pop();
  }

}
