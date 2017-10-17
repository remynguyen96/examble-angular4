import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import { AppState } from './index-db/store/app.state';
import { Lead } from './index-db/store/lead';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // @ViewChild('test') test : ElementRef;
  //
  // @HostListener('window:resize', ['$event'])
  //   onResize(event) {
  //   if (event.target.innerWidth < 980) {
  //     this.test.nativeElement.style.background = 'springgreen';
  //   } else {
  //    this.test.nativeElement.style.background = 'lightblue';
  //   }
  // }

  navLinks : any[] = [
    // {url: '/ngrx', label: 'Ngrx'},
    {url: '/', label: 'Homepage'},
    {url: '/form-user', label: 'Form User'},
    {url: '/flex-box', label: 'Flex Box'},
    {url: '/part-1', label: 'Part 1'},
    {url: '/part-2', label: 'Part 2'},
    {url: '/part-3', label: 'Part 3'},
    {url: '/part-4', label: 'Part 4'},
    // {url: '/part-5', label: 'Part 5'},
    // {url: '/part-6', label: 'Part 6'},
    // {url: '/part-7', label: 'Part 7'},
  ];

  lead: Observable<Lead[]>;

  constructor(
    private store : Store<AppState>
  ) {
    this.lead = this.store.select(state => state.lead);
    // console.log(this.lead)
  }

  ngOnInit() {

  }

  // onResize(e) {
  //   const element = e.target.innerWidth;
  //   console.log(element);
  //   if (element < 950) {
  //     this.test.nativeElement.style.background = 'red';
  //   }
  //   if (element > 950) {
  //     this.test.nativeElement.style.background = 'green';
  //
  //   }
  //   if (element < 750) {
  //     this.test.nativeElement.style.background = 'blue';
  //
  //   }
  // }

}
