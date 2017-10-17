import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-part7',
    templateUrl: './part7.component.html',
    styleUrls: ['./part7.component.scss']
})
export class Part7Component implements AfterViewInit {
    @ViewChild('mycanvas') mycanvas: ElementRef;

    constructor() {
    }

    ngAfterViewInit() {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        canvas.width = 100;
        canvas.height = 100;
        canvas.style.background = '#C3FFF7';

        let al = 0;
        let start = 3.72;
        let diff;
        function progressive() {
            diff = ((al / 100) * Math.PI * 2 * 10).toFixed(2);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.lineWidth = 10;
            ctx.globalAlpha = .7;
            let gradient = ctx.createLinearGradient(0,0,200,0);
                gradient.addColorStop(0,'#D977EC');
                gradient.addColorStop(.5,'#A62FFF');
                gradient.addColorStop(1,'#FFB5E4');
            ctx.fillStyle = '#FF2042';
            ctx.strokeStyle = gradient;
            ctx.textAlign = 'center';
            ctx.fillText(`${al}%`, ctx.canvas.width * .5, (ctx.canvas.width * .5) + 2, ctx.canvas.width);
            ctx.beginPath();
            ctx.arc((canvas.width * .5), (canvas.height * .5), 30, start, diff / 10 + start, false);
            ctx.stroke();
            if (al >= 100) {
                clearInterval(animateProgress);
            }
            al++
        }

        const animateProgress = setInterval(progressive, 50);

    }

}
