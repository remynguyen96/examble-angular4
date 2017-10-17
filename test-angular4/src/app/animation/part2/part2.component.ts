import { Component, OnInit } from '@angular/core';
import {animate, animateChild, group, query, sequence, stagger, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss'],
  animations:[
    trigger('homeTransition', [
      transition(':enter', [
        query('.block', style({ opacity: 0 })),
        query('.block', stagger(300, [
          style({ transform: 'translateY(100px)' }),
          animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(0)', opacity: 1})),
        ])),
      ]),
      transition(':leave', [
        query('.block', stagger(300, [
          style({ transform: 'translateY(0)', opacity: 1 }),
          animate('1s cubic-bezier(.75,-0.48,.26,1.52)', style({transform: 'translateY(100px)', opacity: 0})),
        ])),
      ])
    ])
  ],
  host: {
    '[@homeTransition]': ''
  }

})
export class Part2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
