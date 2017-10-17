import { Component, OnInit, AfterViewInit,  } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { Lead } from '../store/lead';
import { AppState } from '../store/app.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit, AfterViewInit {

  formData : FormGroup;
  private id =  0;
  lead = {} as Lead;
  results: Observable<Lead[]>;

  constructor(
    private store : Store<AppState>,
    private snackBar : MdSnackBar,
    private formBuilder : FormBuilder,
    private http : Http,
  ) { }

  ngOnInit() {
    //  this.results = this.store.select(state => state.lead);
    this.formAdd();
  }

  ngAfterViewInit() {

    const inputs :any = document.querySelectorAll('.controls input');

    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      let test = document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
      console.log(`--${this.name}`);
      console.log(`${this.value}`);
    }
    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


    let number = [7, 1, 2, 3];
    let reduce = number.reduce((key,value) => {
      console.log(`key : ${key}`);
      console.log(`value : ${value}`);
      return key + value
    },1)
    console.log(reduce);

    let persons = [
      {id : 2001, description: 'Hello 1'},
      {id : 2002, description: 'Hello 2'},
      {id : 2003, description: 'Hello 3'},
      {id : 2004, description: 'Hello 4'},
      {id : 2005, description: 'Hello 5'},
    ];
    let index = persons.findIndex(person => person.id === 2002);
    var newComments = [
      ...persons.slice(0, index),
      ...persons.slice(index + 1),
    ];
    console.log(newComments);
  }

  formAdd() {
    this.formData = this.formBuilder.group({
      name: this.formBuilder.control(null,Validators.required),
      email: this.formBuilder.control(null,
        [Validators.required, Validators.email],
        this.validateEmailNotTaken.bind(this)
      ),
      category: this.formBuilder.control(null,Validators.required),
      description: this.formBuilder.control(null,Validators.required),
    });
  }

  checkEmailNotTaken(email: Observable<string>) {
    // return email.debounceTime(2000)
                // .distinctUntilChanged()
      return email.delay(2000).switchMap(emails => this.findEmail(emails))
  }

  findEmail(email : string) {
    return this.http.get('assets/users.json')
             .map((res : Response) => res.json())
             .map(users => users.filter(user => user.email === email))
             .map(users => !users.length)
  }

  validateEmailNotTaken(control: AbstractControl) {
    return this.checkEmailNotTaken(control.value)
            .map(res => {
              return res ? null : {emailTaken: true}
            })
  }

  submitForm() {
    this.store.dispatch({
      type: 'ADD_LEAD',
      payload: <Lead> {
        id: ++ this.id,
        name: this.lead.name,
        email: this.lead.email,
        category: this.lead.category,
        description: this.lead.description,
      }
    })
  }

}
