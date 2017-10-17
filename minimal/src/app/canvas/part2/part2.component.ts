import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit, AfterViewInit {
    @ViewChild('myCanvas2') myCanvas2: ElementRef;
    private ctx: CanvasRenderingContext2D;
    constructor() { }

    ngOnInit() {

    }

    ngAfterViewInit(){
        const canvasPart2 = this.myCanvas2.nativeElement;
        this.ctx = canvasPart2.getContext('2d');
        canvasPart2.style.background = '#76FFDB';
        canvasPart2.style.margin = '0 auto';
        canvasPart2.style.display = 'block';
        canvasPart2.width = 600;
        canvasPart2.height = 400;
        // this.ctx.strokeStyle = '#0B05FF';

        // this.ctx.translate(150,150)
        // this.ctx.lineWidth = 5;
        // this.ctx.beginPath();

        // this.ctx.moveTo(150, 10);
        // this.ctx.lineTo(75, 200);
        // this.ctx.lineTo(225, 200);
        // this.ctx.lineTo(150, 10);
        // this.ctx.lineJoin = 'miter';
        // this.ctx.miterLimit = 1;
        // this.ctx.lineCap = 'butt';
        // this.ctx.closePath();

        // this.ctx.stroke();
        // this.ctx.fillStyle = "#00D47D";
        // this.ctx.fill();



    //   use bezierCurveTo
    //     this.ctx.lineWidth = 3;
    //     this.ctx.beginPath();
    //     this.ctx.moveTo(50, 50);
    //     this.ctx.bezierCurveTo(50, 400, 400, 400, 400, 50);
    //     this.ctx.lineTo(50, 50);
    //     this.ctx.stroke()

    // text function
    //     fillText(text , x , y , maxwidth);
    // mesureText(text).width
    // strokeText(text, x , y, maxwidth)
    //     property : font, textAlign, textBaseline



    // this.ctx.strokeStyle = 'green';
    // this.ctx.fillStyle = 'yellow'
    // let text = 'Good job boy !!!';
    // this.ctx.font = '40px Arial';
    // this.ctx.strokeText(text, 50, 50);
    // this.ctx.fillText(text, 50, 50);

    // let fontSize = 10;
    // for (let i=5; i<=25; i+=5 ) {
    //     let text = 'Canvas text' + fontSize;
    //     this.ctx.font = fontSize+ 'px Arial';
    //     let y = this.ctx.measureText(text).width;
    //     this.ctx.fillText(text, 10, y);
    //     fontSize +=5;
    // }

        this.ctx.font = '30px Arial';
        this.ctx.fillText('Regular Text', 100, 50);

        this.ctx.save();
        this.ctx.translate(100, 150);
        this.ctx.rotate(-0.5* Math.PI);

        let Rtext = 'Rotated Text';
        this.ctx.fillText(Rtext, 0, 0 );
        this.ctx.restore();

        let Rwidth = this.ctx.measureText(Rtext).width;
        this.ctx.fillText(`REGULAR TEXT ${Rwidth}`, 40,Rwidth + 100);




    }

}
