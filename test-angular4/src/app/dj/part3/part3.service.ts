import {of} from 'rxjs/observable/of';

export interface Villain {
  id : number;
  name : string;
};

import { Injectable } from '@angular/core';

@Injectable()
export class Part3Service {
  villains : Villain[] = [
    { id: 5, name: 'Remy Nguyen' },
    { id: 6, name: 'Chau Nguyen' }
  ];

  constructor() {

  }

  getVillains() {
    return of(this.villains);
  }




}
