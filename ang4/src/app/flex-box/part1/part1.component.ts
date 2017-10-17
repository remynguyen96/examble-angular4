import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class Part1Component implements OnInit {

  // @HostBinding('style.background') color = '#c80909';
  // @HostBinding('style.position') position = 'relative';
  // @HostBinding('style.display') display = 'block';

  constructor() { }

  ngOnInit() {
  }

}
