import { Injectable } from '@angular/core';
import {TypeComponent} from '../models/type';
import {View1Component} from '../view1/view1.component';
import {View2Component} from '../view2/view2.component';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';

export interface User {
  name: string;
  role: string;
}

@Injectable()
export class DynamicService {

  constructor() {

  }

  user(): Observable<User> {
    const data = [
      {name: 'Admin', role: 'admin'},
      {name: 'Admin2', role: 'admin'},
      {name: 'Member', role: 'member'},
      {name: 'Member2', role: 'member'},
    ];
    return Observable.from(data);
  }

  infomationComponent() {
    return [
      new TypeComponent(View1Component,{job: 'View part 1  1'}),
      new TypeComponent(View1Component,{job: 'View part 1-1'}),
      new TypeComponent(View2Component,{view: 'View part 2'}),
      new TypeComponent(View2Component,{view: 'View part 2-2'}),
    ]
  }

}
