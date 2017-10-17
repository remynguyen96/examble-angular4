import { Component, OnInit } from '@angular/core';
import {searchState} from "../models/search-user";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import {AppState} from "../store/core.reducer";
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  userGithub: Observable<searchState[]>;
  loading: Observable<boolean>;

  constructor(
      private store: Store<AppState>
  ) {
  }

  ngOnInit() {
      this.userGithub = this.store.select(state => state.githubState.results);
      this.loading = this.store.select(state => state.githubState.loading);
  }

}
