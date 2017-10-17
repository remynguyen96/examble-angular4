import {Component, OnInit} from '@angular/core';
import {Part1Service} from './part1.service';
import {Detail, Hero} from './detail/detail';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss'],
})
export class Part1Component implements OnInit {
  heros: Observable<Hero[]>;
  selectedTax: Detail[] = [];


  constructor(private part1Service: Part1Service) {
    this.heros = part1Service.getHeros();
  }

  ngOnInit() {

  }

  showTaxReturn(hero: Hero) {
    this.part1Service.getDetail(hero)
      .subscribe(htr => {
        if(!this.selectedTax.find(t => t.id === htr.id)) {
          this.selectedTax.push(htr);
        }
      });
  }

  closeTaxReturn(id: number) {
    this.selectedTax.splice(id ,1);
  }



}
