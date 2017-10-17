import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import 'rxjs/add/operator/buffer';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/bufferTime';
import 'rxjs/add/operator/bufferToggle';
import 'rxjs/add/operator/bufferWhen';
import {Observable} from "rxjs/Observable";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromEvent'
@Component({
    selector: 'app-part13',
    templateUrl: './part13.component.html',
    styleUrls: ['./part13.component.scss']
})
export class Part13Component implements AfterViewInit {
    @ViewChild('mycanvas') mycanvas: ElementRef;
    private pressed : string[] = [];
    private secretCode : string = 'happiness';
    private headers = new Headers({'Content-Type': 'application/json'});

    @HostListener('window:keyup', ['$event'])
    sequenceDetection(e) {
        this.pressed.push(e.key);
        this.pressed.splice(-this.secretCode.length - 1, this.pressed.length - this.secretCode.length);

        if(this.pressed.join('').includes(this.secretCode)) {
            // this.http.get('http://www.cornify.com/js/cornify.js', {headers: this.headers})
            //     .subscribe((result) => {
            //         console.log(result);
                    // result.cornify_add();
                // });
            console.log(`CONGRATULATION !!!! ---- ${this.pressed}`)
        }
    }

    constructor(private http: Http) {

    }

    ngAfterViewInit() {
        console.log('%cDừng lại!', 'color: red; font-size: 50px; font-family: sans-serif; text-shadow: 1px 1px 5px #000;');
        console.log('%cTruy cập http://kul.vn/ để biết thêm thông tin chi tiết.', 'color: #444; font-size: 25px; font-family: sans-serif;');
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.canvas.style.background = '#C9DFCA'

        // ctx.canvas.onmousedown = function (e) {
        //     e.preventDefault();
        //     let test = windowToCanvas(e.clientX, e.clientY);
        //     console.log(test);
        // }
        let canvasClick = Observable.fromEvent(ctx.canvas, 'mousedown');
        canvasClick.subscribe((e : any) => {
            e.preventDefault();
            let test = windowToCanvas(e.clientX, e.clientY);
            print(test);
        });

        function print(val) {
            let el = document.createElement('p');
            el.innerText = val;
            // document.body.appendChild(el);
            document.body.insertBefore(el, document.body.firstChild);
        }

        function windowToCanvas(x, y) {
            let bbox = ctx.canvas.getBoundingClientRect();
            return {
                x: x - bbox.left,
                y: y - bbox.top,
            }
        }

        const sliderImages: any= document.querySelectorAll('.slide-in');
        //pageYOffset = scrollY
        function checkSide(e) {
            sliderImages.forEach(slideImage => {
                const slideInAt = (window.scrollY + window.innerHeight) - slideImage.height;
                const imageBottom = slideImage.offsetTop + slideImage.height;
                const isHalfShown = slideInAt > slideImage.offsetTop;
                const isNotScrollPast = window.pageYOffset < imageBottom;
                if(isHalfShown && isNotScrollPast) {
                    slideImage.classList.add('active');
                } else {
                    slideImage.classList.remove('active');
                }
            });
        }

        window.addEventListener('scroll', checkSide)
        // window.addEventListener('scroll',this.debounce(checkSide))

    }

    // getSize() {
    //     return window.getComputedStyle(document.body, '::before')
    //         .getPropertyValue('content')
    //         .replace(/["']/g, '');
    // }

    debounce(func, wait= 20, immediate= true) {
        let timeout;
        return function () {
            const context = this,
                args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };


    test() {

    }

}
