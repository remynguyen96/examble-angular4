import {Component, Input, OnInit} from '@angular/core';
import {View} from '../models/type';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component {
  @Input() infomation : any;

  constructor() { }

}
