import { Component, OnInit, Input } from '@angular/core';
import {MessageTypes} from "./shared/message-types.enum";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() type = MessageTypes.Default;
  messageTypes = MessageTypes;

  constructor() {

  }

  ngOnInit() {

  }



}
