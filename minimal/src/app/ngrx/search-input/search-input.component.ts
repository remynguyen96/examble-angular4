import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {Store} from "@ngrx/store";
import {searchState} from "../models/search-user";
import * as ActionTypes from '../store/actions';


@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {

    formData: FormGroup;
    subscription: Subscription;
    constructor(
        private formBuilder: FormBuilder,
        private store: Store<searchState>
    ) {

    }

    ngOnInit() {
        this.formData = this.formBuilder.group({
            username: this.formBuilder.control(null,Validators.required),
            // username: [null,Validators.required],
        });

        this.subscription = this.formData.valueChanges
            .map(value => value.username.trim())
            .debounceTime(600)
            .distinctUntilChanged()
            .subscribe(result => {
                this.store.dispatch(new ActionTypes.Search(result));
            })
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}

