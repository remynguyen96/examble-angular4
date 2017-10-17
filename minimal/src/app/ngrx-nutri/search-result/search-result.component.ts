import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../store/core";
import {Observable} from "rxjs/Observable";
import {PostInterface} from "../models/post";
import {Router} from "@angular/router";
import * as AllAction from "../store/actions";
import {DomSanitizer} from "@angular/platform-browser";
@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  searchResult: Observable<PostInterface[]>;
  loading: Observable<boolean>;
  _anyHTML: any = 'lorem lorem lorem lorem lorem lorem  ';
  constructor(
      private sanitizer: DomSanitizer,
      private router: Router,
      private store: Store<AppState>
  ) { }

  set setValueHTML(anyHTML) {
      this._anyHTML = anyHTML;
  }

  get setValueHTML() {
    return this.sanitizer.bypassSecurityTrustHtml(this._anyHTML);
  }

  ngOnInit() {
    this.loading  = this.store.select(state => state.nutriState.loading);
    this.searchResult  = this.store.select(state => state.nutriState.searchReuslts);
  }

  moveState(item) {
    this.store.dispatch(new AllAction.FetchResult(item));
    this.router.navigate(['/ngrx-nutrition/result-search',item._id]);
  }

    setHTML(textHTML: any) {
        return this.sanitizer.bypassSecurityTrustHtml(textHTML);
    }

}
