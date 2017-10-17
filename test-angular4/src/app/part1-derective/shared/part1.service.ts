import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
@Injectable()
export class Part1Service {
  private timeout;

  constructor(private title: Title) { }

  tooltips : BehaviorSubject<string> = new BehaviorSubject<string>('');


  blink(msg: string, count: number = 5): void {
    const prevTitle = this.title.getTitle();

    const step = () => {
      const newTitle = this.title.getTitle() === prevTitle ? msg : prevTitle;
      this.title.setTitle(newTitle);

      if (--count) {
        this.timeout = setTimeout(step.bind(this), 1000);
      } else {
        this.title.setTitle(prevTitle);
      }
    };
    clearTimeout(this.timeout);
    step();
  }
}
