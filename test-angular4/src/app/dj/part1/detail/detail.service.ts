import { Injectable } from '@angular/core';
import {Detail} from './detail';
import {Part1Service} from '../part1.service';

@Injectable()
export class DetailService {
  private current: Detail;
  private original: Detail;

  constructor(private part1Service: Part1Service) {

  }

  set taxReturn(htr: Detail) {
    this.current = htr;
    this.original = htr.clone();
  }

  get taxReturn(): Detail {
    return this.current;
  }

  restore() {
    this.taxReturn = this.original;
  }

  save() {
    this.taxReturn = this.current;
    this.part1Service.saveDetail(this.current).subscribe();
  }

}
