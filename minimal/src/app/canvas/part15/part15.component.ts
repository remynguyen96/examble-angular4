import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-part15',
    templateUrl: './part15.component.html',
    styleUrls: ['./part15.component.scss']
})
export class Part15Component implements AfterViewInit {

    constructor() {
    }

    ngAfterViewInit() {
        let slides: any = document.getElementsByClassName('slide'),
            slider: HTMLElement = document.getElementById('slider'),
            cursor = 0,
            slideWidth = 0,
            topHeight = 0,
            slideCount = slides.length;

        if (slideCount > 0) {
            slideWidth = slides[0].offsetWidth;
            for (let i = 0; i < slideCount; i++) {
                slides[i].style.left = slideWidth * i + "px";
            }
            calculateTallestSlide();
            for (let i = 0; i < slideCount; i++) {
                slides[i].classList.add('animated');
            }
            document.getElementById('next').addEventListener('click', (e) => {
                e.preventDefault();
                if (cursor < slideCount - 1) {
                    moveSlides('forward');
                    cursor++;
                }
            });

            document.getElementById('pre').addEventListener('click', (e) => {
                e.preventDefault();
                if (cursor > 0) {
                    moveSlides('backward');
                    cursor--;
                }
            });

            window.addEventListener('resize', () => {
                slideWidth = slides[0].offsetWidth;
                for (let i = 0; i < slides.length; i++) {
                    if (i <= cursor) {
                        slides[i].style.left = "-" + slideWidth * (cursor - i) + "px";
                    } else if (i > cursor) {
                        slides[i].style.left = slideWidth * (i - cursor) + "px";
                    }
                }
                calculateTallestSlide();
            });
        }

        function calculateTallestSlide() {
            for (let i = 0; i < slideCount; i++) {
                if (slides[i].offsetHeight > topHeight) {
                    topHeight = slides[i].offsetHeight;
                }
            }
            slider.style.height = topHeight + "px";
        }

        function moveSlides(direction) {
            for (let i = 0; i < slides.length; i++) {
                if (direction === "backward") {
                    slides[i].style.left = +slides[i].style.left.replace(/[^-\d\.]/g, '') + slideWidth + "px"
                } else if (direction === 'forward') {
                    // slides[i].style.left = parseInt(slides[i].style.left, 10) - slideWidth + "px"
                    slides[i].style.left = slides[i].style.left.replace(/[^-\d\.]/g, '') - slideWidth + "px"
                    //replace all charecter not is number to ''
                }
            }
        }


    }

}
