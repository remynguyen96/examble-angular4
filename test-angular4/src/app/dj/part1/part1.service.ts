import { Injectable } from '@angular/core';
import {Detail, Hero} from './detail/detail';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';

@Injectable()
export class Part1Service {
  heros : Hero[] = [
    {id: 1, name: 'Remy', tid: '082-27-5678'},
    {id: 2, name: 'Chau', tid: '099-42-4321'},
  ];

  details : Detail[] = [
    new Detail(10, this.heros[0], 1110),
    new Detail(20, this.heros[1], 2000),
  ];

  getHeros(): Observable<Hero[]> {
    return new Observable<Hero[]>((observer: Observer<Hero[]>) => {
      observer.next(this.heros);
      observer.complete();
    });
  }

  getDetail(hero: Hero): Observable<Detail> {
    return new Observable<Detail>((observer: Observer<Detail>) => {
      const htr = this.details.find(t => t.hero.id === hero.id);
      observer.next(htr || new Detail(0, hero));
      observer.complete();
    });
  }

  saveDetail(detail: Detail): Observable<Detail> {
    return new Observable<Detail>((observer: Observer<Detail>) => {
      const htr = this.details.find(t => t.id === detail.id);
      if(htr) {
        detail = Object.assign(htr, detail);
      } else {
        this.details.push(detail);
      }
      observer.next(detail);
      observer.complete();
    });
  }

}
