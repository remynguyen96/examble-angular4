import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel.component';
import { ItemComponent } from './item/item.component';
import { CarouselDirective } from './carousel.directive';
import {CarouselComponentComponent, CarouselItemElement} from './carousel-component/carousel-component.component';


@NgModule({
  imports: [
    CommonModule,
    CarouselRoutingModule,
  ],
  declarations: [CarouselComponent, ItemComponent, CarouselDirective, CarouselComponentComponent, CarouselItemElement]
})
export class CarouselModule { }
