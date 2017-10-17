import { AfterViewInit, Component, ContentChildren, Directive, ElementRef, Input,  QueryList, TemplateRef, ViewChild, ViewChildren } from '@angular/core';
import { CarouselDirective } from "../carousel.directive"
import { animate, AnimationBuilder, AnimationFactory, AnimationPlayer, style } from '@angular/animations';

@Directive({
    selector: '.carousel-item'
})
export class CarouselItemElement {
}

@Component({
    selector: 'carousel',
    exportAs: 'carousel',
    templateUrl: './carousel-component.component.html',
    styleUrls: ['./carousel-component.component.scss']
})
export class CarouselComponentComponent {
}
export class CarouselComponent implements AfterViewInit {

    @ContentChildren(CarouselDirective) items : QueryList<CarouselDirective>;
    @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements : QueryList<ElementRef>;
    @ViewChild('carousel') private carousel : ElementRef;
    @Input() timing = '250ms ease-in';
    @Input() showControls: boolean = true;
    private player : AnimationPlayer;
    private itemWidth : number;
    private currentSlide = 0;
    carouselWrapperStyle = {}

    constructor( private builder : AnimationBuilder ) {
    }

    ngAfterViewInit() {
        // For some reason only here I need to add setTimeout, in my local env it's working without this.
        setTimeout(() => {
            this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
            this.carouselWrapperStyle = {
                width: `${this.itemWidth}px`
            }
        });
    }

    private buildAnimation( offset ) {
        return this.builder.build([
            animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
        ]);
    }

    next() {
        if( this.currentSlide + 1 === this.items.length ) return;
        this.currentSlide = (this.currentSlide + 1) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;
        const myAnimation : AnimationFactory = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }

    prev() {
        if( this.currentSlide === 0 ) return;

        this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
        const offset = this.currentSlide * this.itemWidth;

        const myAnimation : AnimationFactory = this.buildAnimation(offset);
        this.player = myAnimation.create(this.carousel.nativeElement);
        this.player.play();
    }



}
