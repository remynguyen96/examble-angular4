import { Component, OnInit } from '@angular/core';
import {animate, keyframes, query, stagger, style, transition, trigger, group, state} from '@angular/animations';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss'],
  animations: [
    trigger('animation', [
      transition(':enter', [
        style({transform: 'translateX(-35px)'}),
        animate(350)
      ]),
      transition(':leave', [
        group([
          animate('200ms ease', style({
            transform: 'translate(150px, 25px)'
          })),
          animate('500ms 0.2s ease', style({
            opacity: 0
          }))
        ])
      ])
    ]),
  ],
})
export class PartComponent implements OnInit {
  items : any[] = [];
  constructor() { }

  ngOnInit() {
  }

  addItem(value) {
    this.items.push(value);
  }

  removeItem(item) {
    this.items.pop();
  }

}
