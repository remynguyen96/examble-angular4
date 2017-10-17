import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import {Store} from "@ngrx/store";
import * as AllAction from '../store/actions';
import {ISearchResult} from "../models/search-result";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {

    subscription: Subscription;
  formData: FormGroup;
  constructor(
      private router: Router,
      private formBuilder: FormBuilder,
      private store: Store<ISearchResult>
  ) {

  }

  ngOnInit() {
      this.formData = this.formBuilder.group({
        search: this.formBuilder.control(null)
    });
      this.subscription = this.formData.valueChanges
          .debounceTime(800)
          .distinctUntilChanged()
          .map(result => (result.search).trim())
          .subscribe(result => {
            this.router.navigate(['ngrx-nutrition/search'], {queryParams: {q: result.trim()} });
            this.store.dispatch(new AllAction.Search(result));
          });
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }


}
