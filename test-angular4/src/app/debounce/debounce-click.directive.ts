import {Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/debounceTime';
@Directive({
  selector: '[appDebounceClick]'
})
export class DebounceClickDirective implements OnInit, OnDestroy {
  @Input() time = 500;
  @Output() debounceClick = new EventEmitter();
  private clicks = new Subject();
  private subscription : Subscription;

  constructor() {

  }

  ngOnInit() {
    this.subscription =
    this.clicks.debounceTime(this.time).subscribe(e =>  this.debounceClick.emit(e))
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event)
    console.log('click from host element !');
  }
}
