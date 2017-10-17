import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, FormArray, Validators} from '@angular/forms';
import {CustomValidators} from './custom-validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  formData: FormGroup;
  formArr: FormArray;
  welcome = false;
  customerNameControl;


  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formTest();
  }

  formTest() {
    this.formData = this.formBuilder.group({
        name: this.formBuilder.control(null, [Validators.required, Validators.minLength(4)]),
        specialtySandwich: this.formBuilder.control(null),
        size: this.formBuilder.control(null),
        bread: this.formBuilder.control(null),
        weird: this.formBuilder.array([
          this.formBuilder.control(null)
        ]),
        meats: this.formBuilder.group({
          meatHam: this.formBuilder.control(null),
          meatTurkey: this.formBuilder.control(null),
          meatRoastBeef: this.formBuilder.control(null)
        }),
        cheeses: this.formBuilder.group({
          cheeseProvolone: this.formBuilder.control(null),
          cheeseCheddar: this.formBuilder.control(null),
          cheeseSwiss: this.formBuilder.control(null)
        }),
        veggiesAndSuch: this.formBuilder.group({
          veggieLettuce: this.formBuilder.control(null),
          veggieTomato: this.formBuilder.control(null),
          veggieMustard: this.formBuilder.control(null)
        })
      },
      {
        validator: CustomValidators.requiredWhen('size','bread')
      });
    this.formArr = this.formData.get('weird') as FormArray;
    this.customerNameControl = this.formData.get('name');
    this.customerNameControl.valueChanges.subscribe(
      value => {
        this.welcome = value && value.toLowerCase().trim() === 'Remy';
      }
    )
  }


  onAddWeirdRequest() {
    this.formArr.push(this.formBuilder.control(null));
  }

  onRemoveWeirdRequest(index) {
    this.formArr.removeAt(index);
  }

  onResetForm() {
    this.formData.reset();
  }

  onSubmitForm() {
    console.log(this.formData.value);
  }

}
