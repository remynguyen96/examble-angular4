import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-part8',
    templateUrl: './part8.component.html',
    styleUrls: ['./part8.component.scss']
})
export class Part8Component implements AfterViewInit {
    @ViewChild('mycanvas') mycanvas: ElementRef;

    constructor() {
    }

    ngAfterViewInit() {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        let image: HTMLImageElement= new Image();
        let baseX = 0;
        let baseY = 0;
        let lastPointX = 0;
        let lastPointY = 0;
        let cutoutWidth = 40;
        let windowWidth = 300;
        let scale = 1;
        let click = false;
        image.setAttribute('crossOrigin', 'anonymous');
        image.onload = onImageLoad;
        image.src = 'http://icodingclub.github.io/imagecropper/steve-jobs.jpg';
        document.getElementById("cropImgButtn").onclick = showCropedImage;
        document.getElementById("scaleSlider").oninput = updateScale;

        function onImageLoad() {
            drawImageToCanvas(0, 0);
            ctx.canvas.onmousedown = onMouseDown;
            ctx.canvas.onmousemove = onMouseMove;
            ctx.canvas.onmouseup = onMouseUp;
        }

        function drawImageToCanvas(x, y) {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            baseX = baseX + (x - lastPointX);
            baseY = baseY + (y - lastPointY);
            lastPointX = x;
            lastPointY = y;
            ctx.drawImage(image, baseX, baseY, Math.floor(image.width * scale), Math.floor(image.height * scale));
            drawCutout();
        }
        function drawCutout() {
            ctx.fillStyle = 'rgba(128, 128, 128, 0.7)';
            ctx.beginPath();
            ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.moveTo(cutoutWidth, cutoutWidth);
            ctx.lineTo(cutoutWidth, windowWidth + cutoutWidth);
            ctx.lineTo(cutoutWidth + windowWidth, cutoutWidth + windowWidth);
            ctx.lineTo(cutoutWidth + windowWidth, cutoutWidth);
            ctx.closePath();
            ctx.fill();
        }

        function onMouseDown(e) {
            e.preventDefault();
            let loc = windowToCanvas(e.clientX, e.clientY);
            click = true;
            lastPointX = loc.x;
            lastPointY = loc.y;
        }

        function onMouseMove(e) {
            e.preventDefault();
            if (click) {
                let loc = windowToCanvas(e.clientX, e.clientY);
                drawImageToCanvas(loc.x, loc.y);
            }
        }

        function onMouseUp(e) {
            e.preventDefault();
            click = false;
        };

        function windowToCanvas(x, y) {
            let bbox = ctx.canvas.getBoundingClientRect();
            return {
                x: x - bbox.left * (ctx.canvas.width / bbox.width),
                y: y - bbox.top * (ctx.canvas.height / bbox.height)
            };
        };

        function showCropedImage() {
            let temp_canvas = document.createElement('canvas');
            let temp_ctx: CanvasRenderingContext2D = temp_canvas.getContext('2d');
            temp_canvas.width = windowWidth;
            temp_canvas.height = windowWidth;
            temp_ctx.drawImage(ctx.canvas, cutoutWidth, cutoutWidth, windowWidth, windowWidth, 0, 0, windowWidth, windowWidth);
            let vData = temp_canvas.toDataURL();
            let imageResult: any= document.getElementById('crop_result');
            imageResult.src = vData;
        }

        function updateScale(e) {
            scale = e.target.value;
            drawImageToCanvas(lastPointX, lastPointY);
        }




    }

}
