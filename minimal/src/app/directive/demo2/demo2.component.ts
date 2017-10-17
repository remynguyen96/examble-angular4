import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Demo2Directive} from "../demo2.directive";

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit, AfterViewInit {

   extraIngredient: string;
   @ViewChild(Demo2Directive)
   set demo2(directive: Demo2Directive) {
     this.extraIngredient = directive.ingredient;
   }
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
      console.log(this.extraIngredient);
  }

}
