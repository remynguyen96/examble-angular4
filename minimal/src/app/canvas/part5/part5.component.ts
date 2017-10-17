import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-part5',
    templateUrl: './part5.component.html',
    styleUrls: ['./part5.component.scss']
})
export class Part5Component implements AfterViewInit {
    @ViewChild('canvas') myCanvas: ElementRef;

    constructor() {
    }

    ngAfterViewInit() {

        const canvas = this.myCanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        canvas.style.margin = '0 auto';
        canvas.style.display = 'block';
        canvas.width = 450;
        canvas.height = 350;
        // canvas.style.background = '#0DFF6E';
        let bg = new Image();
        bg.src = '../../assets/the-good-life.jpg';

        function bgImage() {
            this.x = 0;
            this.y = 0;
            this.w = bg.width;
            this.h = bg.height;
            this.render = () => {
                ctx.drawImage(bg, this.x--, 0);
                if (this.x <= -499) {
                    this.x = 0;
                }
            };
        }

        function Player() {
            this.w = 80;
            this.h = 80;
            this.x = (ctx.canvas.width - this.w) * 0.5;
            this.y = (ctx.canvas.height - this.h) * 0.5;
            this.render = () => {
                ctx.fillStyle = '#A739B5';
                ctx.fillRect(this.x,this.y,this.w,this.h);
            };
        }

        let background = new bgImage();
        let player = new Player();

        function animate() {
            ctx.save();
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            //
            background.render();
            player.render();
            //
            ctx.restore();
        }

        const animationInterval = setInterval(animate, 30);

        let initNumber = 3;
        document.addEventListener('keydown', (event) => {
            let key_press = String.fromCharCode(event.keyCode);
            switch (key_press) {
                case 'W':
                    player.y -= initNumber;
                    break;
                case 'A':
                    player.x -= initNumber;
                    break;
                case 'S':
                    player.y += initNumber;
                    break;
                case 'D':
                    player.x += initNumber;
                    break;
            }
        });

        ctx.canvas.addEventListener('mousemove', (event) => {
            let mouseX = event.clientX - ctx.canvas.offsetLeft;
            let mouseY = event.clientY - ctx.canvas.offsetTop;
            document.getElementById('test').innerHTML = `${mouseX} | ${mouseY}`;
            if(mouseX >= player['x'] && mouseX < player['x']+player['w'] && mouseY >= player['y'] && mouseY < player['y']+player['h']) {
                document.getElementById('touch').innerHTML = `TOUCHED`;
            }
        });

    }

}
