import {Component, Input } from '@angular/core';
import {View} from '../models/type';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements View {
  @Input() infomation : any;
  constructor() { }


}
