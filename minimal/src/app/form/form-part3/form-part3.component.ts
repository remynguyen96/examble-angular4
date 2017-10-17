import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-form-part3',
  templateUrl: './form-part3.component.html',
  styleUrls: ['./form-part3.component.scss']
})
export class FormPart3Component implements OnInit {

  testInput = new FormControl();

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.testInput);
  }

}
