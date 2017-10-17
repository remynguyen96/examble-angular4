import { Component, OnInit } from '@angular/core';
import { SearchService } from './shared/search.service';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-search-rxjs',
  templateUrl: './search-rxjs.component.html',
  styleUrls: ['./search-rxjs.component.scss'],
  providers: [SearchService]
})
export class SearchRxjsComponent implements OnInit {

  results: Object;
  searchTerm$ : Subject<string> = new Subject<string>();

  constructor(
    private searchService : SearchService,
  ) {

  }

  ngOnInit() {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        console.log(results)
        this.results = results.results;
      });
  }

}
