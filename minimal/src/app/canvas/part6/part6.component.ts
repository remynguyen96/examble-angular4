import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-part6',
    templateUrl: './part6.component.html',
    styleUrls: ['./part6.component.scss'],
})
export class Part6Component implements AfterViewInit {
    @ViewChild('mycanvas') mycanvas: ElementRef;

    constructor() {
    }

    ngAfterViewInit() {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        canvas.style.display = 'block';
        canvas.style.margin = '0 auto';
        canvas.style.background = '#B8FFAC';
        canvas.width = 600;
        canvas.height = 400;


        function drawCircle(x, y, dx, dy, radius) {
            this.x = x;
            this.y = y;
            this.dx = dx;
            this.dy = dy;
            this.radius = radius;
            this.startDraw = () => {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.strokeStyle = '#FF4B69';
                ctx.fillStyle = '#44A6FF';
                ctx.fill();
                ctx.stroke();
            };
            this.updateDraw = () => {
                if (this.x + this.radius > ctx.canvas.width || this.x - this.radius < 0) {
                    this.dx = -this.dx
                }
                if (this.y + this.radius > ctx.canvas.height || this.y - this.radius < 0) {
                    this.dy = -this.dy
                }
                this.x += this.dx;
                this.y += this.dy;

                this.startDraw();
            };
        }

        let arrCircle = [];
        for (let i = 0; i < 150; i++) {
            let radius = 2;
            let x = Math.random() * (ctx.canvas.width - radius * 2) + radius;
            let y = Math.random() * (ctx.canvas.height - radius * 2) + radius;
            let dx = (Math.random() - 0.5) * 9;
            let dy = (Math.random() - 0.5) * 9;
            arrCircle.push(new drawCircle(x,y,dx,dy,radius));
        }

        function animate() {
            requestAnimationFrame(animate);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
           for(let item of arrCircle) {
                item.updateDraw();
           }
        }
        animate();
    }

}
