import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-part3',
    templateUrl: './part3.component.html',
    styleUrls: ['./part3.component.scss']
})
export class Part3Component implements OnInit, AfterViewInit {
    @ViewChild('mycanvas') myCanvas3: ElementRef;

    // public ctx: CanvasRenderingContext2D;
    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        const canvasPart3: HTMLCanvasElement = this.myCanvas3.nativeElement;
        const ctx: CanvasRenderingContext2D = canvasPart3.getContext('2d');
        canvasPart3.style.margin = '0 auto';
        canvasPart3.style.display = 'block';
        canvasPart3.width = 600;
        canvasPart3.height = 400;
        // function
        // drawImage (img, destX, destY, destWidth, destHeight);
        // toDataURL ()
        // createPattern(object, pattern);

        let img = new Image();
        img.onload = function () {
            // drawImage(img);
        }
        img.src = '../../assets/icons/android-icon-144x144.png';

        let wallpaper = new Image();
        wallpaper.onload = function() {
            drawWallPaper(wallpaper);
        }
        wallpaper.src = '../../../assets/icons/android-icon-36x36.png';
        // wallpaper.src = '../../../assets/the-good-life.jpg';

        function drawImage(image) {
            let destX = 10;
            let destY = 20;
            let destWidth = 212;
            let destHeight = 212;
            ctx.drawImage(image, destX, destY, destWidth, destHeight);

            let sourceX = 0;
            let sourceY = 0;
            let sourceWidth = 512;
            let sourceHeight = 110;

            destX = 250;
            destY = 20;
            destWidth = 212;
            destHeight = 50;
            // ctx.textAlign = 'center'; //start, end , center , left , right
            // ctx.textBaseline = 'middle' // top, middle, bottom ,hanging, alphabetic, ideographic
            ctx.drawImage(image, sourceX, sourceY, sourceWidth, sourceHeight, destX, destY, destWidth, destHeight );

        }

        function drawWallPaper(image) {
            let pattern = ctx.createPattern(image, 'repeat');
            ctx.fillStyle = pattern;
            ctx.rect(100, 100, 400, 300);
            ctx.fill();
        }

        document.querySelector('#demo').addEventListener('click', function () {
            let dataURL = canvasPart3.toDataURL();
            window.open(dataURL, 'Canvas as Images', 'width=300, height=300')
        });


    }

}
