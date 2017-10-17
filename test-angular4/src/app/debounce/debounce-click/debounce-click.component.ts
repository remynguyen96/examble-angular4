import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debounce-click',
  templateUrl: './debounce-click.component.html',
  styleUrls: ['./debounce-click.component.scss'],
})
export class DebounceClickComponent implements OnInit {
  count : number = 0;
  constructor() { }

  ngOnInit() {

  }

  log() {
    this.count++;
    console.log('Clicked!');
  }

}
