import { Component, OnInit } from '@angular/core';
import {MessageTypes} from "./message/shared/message-types.enum";

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.scss']
})
export class TipComponent implements OnInit {
  messageTypes = MessageTypes;
  constructor() { }

  ngOnInit() {
  }

}
