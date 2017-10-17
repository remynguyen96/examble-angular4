import { Component, OnInit } from '@angular/core';
import {Part3Service} from './part3.service';
import {Villain} from './part3.service';
import {Observable} from 'rxjs/Observable';
@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.scss'],
  providers:[Part3Service]
})
export class Part3Component implements OnInit {

  listVillains : Observable<Villain[]>;

  constructor(private part3Service: Part3Service) { }

  ngOnInit() {
    this.listVillains = this.part3Service.getVillains();
  }

}
