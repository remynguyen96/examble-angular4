import { Component, OnInit, Input, Output, OnChanges, EventEmitter, } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  animations: [
    trigger('dialog', [
      transition(':enter', [
        style({transform: 'scale3d(.3,.3,.3)'}),
        animate(100)
      ]),
      transition(':leave', [
        animate(100, style({transform: 'scale3d(.0,.0,.0)'}))
      ]),
    ]),
  ],
})
export class ModalComponent implements OnInit {
  @Input() visible: boolean;
  @Input() visibleChange : EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {

  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible)
  }

}
