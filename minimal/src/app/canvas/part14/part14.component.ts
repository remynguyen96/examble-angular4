import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-part14',
    templateUrl: './part14.component.html',
    styleUrls: ['./part14.component.scss']
})
export class Part14Component implements AfterViewInit {
    @ViewChild('mycanvas') mycanvas: ElementRef;

    constructor() {

    }

    ngAfterViewInit() {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.strokeStyle = '#BADA55';
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';
        ctx.lineWidth = 30;
        // ctx.globalCompositeOperation = 'multiply';
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;
        let hue = 0;
        let direction = true;

        function draw(e) {
            if (!isDrawing) return;
            ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
            ctx.beginPath();
            ctx.moveTo(lastX, lastY);
            // ctx.lineTo(e.clientX,e.clientY);
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
            [lastX, lastY] = [e.offsetX, e.offsetY];

            hue++;
            if(hue >= 360) {
                hue = 0;
            }
            if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
                direction = ! direction;
            }
            if(direction) {
                ctx.lineWidth++;
            } else {
                ctx.lineWidth--;
            }
        }

        canvas.onmousedown = (e) => {
            isDrawing = true;
            [lastX, lastY] = [e.offsetX, e.offsetY];
        };
        canvas.onmousemove = draw;
        canvas.onmouseup = (e) => {
            isDrawing = false;
        };
        canvas.onmouseout = (e) => {
            isDrawing = false;
        };


    }
}
