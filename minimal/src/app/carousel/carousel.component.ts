import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input, OnInit, QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import {CarouselDirective} from "./carousel.directive";
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {
    items = [
        { title: 'Slide 1' },
        { title: 'Slide 2' },
        { title: 'Slide 3' },
    ]

  constructor() {

  }

  ngAfterViewInit() {
  }

    addSlide() {
        this.items.push({
            title: `Slide 4`
        });
    }

}
