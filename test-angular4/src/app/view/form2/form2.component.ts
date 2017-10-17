import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  options = [
    { id: 1, label: 'Option one' },
    { id: 2, label: 'Option two' },
    { id: 3, label: 'Option three' }
  ]

  control = new FormControl(this.options[1]);

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.options = [
        { id: 1, label: 'Option one' },
        { id: 2, label: 'Option two' },
        { id: 3, label: 'Option three' },
        { id: 4, label: 'Option four' }
      ]
    }, 2000);
  }

  compareFn( optionOne, optionTwo ) : boolean {
    return optionOne.id === optionTwo.id;
  }

}
