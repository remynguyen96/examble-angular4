import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-part11',
    templateUrl: './part11.component.html',
    styleUrls: ['./part11.component.scss']
})
export class Part11Component implements AfterViewInit {
    @ViewChild('mycanvas') mycanvas: ElementRef;

    constructor() {
    }

    ngAfterViewInit() {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        const resultImg: any = document.getElementById('crop_result');
        const image: HTMLImageElement = new Image();
        let baseX: number = 0;
        let baseY: number = 0;
        let lastPointX: number = 0;
        let lastPointY: number = 0;
        let cutoutWidth: number = 50;
        let windowWidth: number = 300;
          // (400 - windowWidth) / 2 = cutoutWidth
        let scale: number = 1;
        let click: boolean = false;
        image.onload = imageLoad;
        image.src = '../../../assets/the-good-life.jpg';
        document.getElementById('btnCrop').onclick = showCropImage;
        document.getElementById('scaleSlider').oninput = updateScale;
        document.getElementById('changeBg').oninput = updateBg;

        function imageLoad() {
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
            let imageWidth = Math.floor(image.width * scale);
            let imageHeight = Math.floor(image.height * scale);
            ctx.drawImage(image, baseX, baseY, imageWidth, imageHeight);
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
                showCropImage();
            }
        }

        function onMouseUp(e) {
            e.preventDefault();
            click = false;
        }

        function windowToCanvas(x, y) {
            let bbox = ctx.canvas.getBoundingClientRect();
            // => ctx.canvas.width === bbox.width
            // => ctx.canvas.offsetLeft === bbox.left
            // => ctx.canvas.offsetTop === bbox.top
            return {
                x: x - bbox.left * (ctx.canvas.width / bbox.width),
                y: y - bbox.top * (ctx.canvas.height / bbox.height),
            }
        }

        function showCropImage() {
            let temp_canvas = document.createElement('canvas');
            let temp_ctx: CanvasRenderingContext2D = temp_canvas.getContext('2d');
            temp_canvas.width = windowWidth;
            temp_canvas.height = windowWidth;
            temp_ctx.drawImage(ctx.canvas, cutoutWidth, cutoutWidth, windowWidth, windowWidth, 0, 0, windowWidth, windowWidth);
            let data = temp_canvas.toDataURL();
            // resultImg.style.borderRadius = "50%";
            resultImg.src = data;
        }

        function updateScale(e) {
            scale = e.target.value;
            drawImageToCanvas(lastPointX, lastPointY);
        }

        function updateBg(e) {
            let color = e.target.value;
            // resultImg.style.background = color;
            ctx.canvas.style.background = color;
        }


    }

}
