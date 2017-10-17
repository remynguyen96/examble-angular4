import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  animations: [
      trigger('dialog', [
        transition('void => *', [
           style({
               transform: 'scale3d(.3,.3,.3)'
           }),
           animate(100)
        ]),
        transition('* => void', [
            animate(100, style({
                transform: 'scale3d(.0,.0,.0)'
            }))
        ]),
      ])
  ]
})
export class DialogComponent implements OnInit {
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() {

  }

  ngOnInit() {

  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

}
