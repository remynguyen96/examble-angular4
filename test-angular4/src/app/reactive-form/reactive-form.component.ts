import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements AfterViewInit {

  @ViewChild("tref", {read: ElementRef}) tref: ElementRef;

  control = new FormControl();
  control2 = new FormControl([ 'a@a.com' ]);
  constructor() { }

  ngAfterViewInit(): void {
    // outputs `I am span`
    console.log(this.tref.nativeElement.textContent);
  }

}
