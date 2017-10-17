import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {Part1Service} from "./shared/part1.service";
@Component({
  selector: 'app-part1-derective',
  templateUrl: './part1-derective.component.html',
  styles: [`
    .demo-tooltip {
      color: #FF454A;
      text-align: center;
      font-weight: bold;
      font-size: 1.4rem;
    }
    .copy {
      color: #0DFF6E;
      text-align: center;
      font-weight: bold;
      font-size: 1.4rem;
    }
    .btn {
      color: #fff;
      padding: 10px 20px;
      background: #24FF80;
    }
    .btn-close {
      background: #FF401B;
      padding: 10px 20px;
      color: #fff;
    }
  `]
})
export class Part1DerectiveComponent implements OnInit {

  showDialog = false;
  constructor(public part1Service  : Part1Service) {
  }

  ngOnInit() {
    this.part1Service.blink('GOod boy 2');
  }



}
