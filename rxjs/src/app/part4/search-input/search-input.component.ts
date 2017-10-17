import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Store } from '@ngrx/store';
import * as fromRoot from '../store/reducer.service';
import * as Actions from '../store/actions.service';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  constructor(private store: Store<fromRoot.State>) {

  }

  searchControl = new FormControl(null);

  ngOnInit() {
    this.searchControl.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .map(value => value.trim())
      .do(() => this.store.dispatch(new Actions.Search(this.searchControl.value)))
      .subscribe();
  }

}
