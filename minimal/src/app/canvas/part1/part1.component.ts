import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss']
})
export class Part1Component implements OnInit, AfterViewInit {

  @ViewChild('myCanvas1') myCanvas1: ElementRef;
  private ctx: CanvasRenderingContext2D;
  constructor() {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void{
    const canvasPart1: HTMLCanvasElement = this.myCanvas1.nativeElement;
    this.ctx = canvasPart1.getContext('2d');
    canvasPart1.style.background = '#774FFF';
    canvasPart1.style.margin = '0 auto';
    canvasPart1.style.display = 'block';

    canvasPart1.width = 600;
    canvasPart1.height = 400;

    // this.ctx.fillStyle = '#0DFF6E';
    // this.ctx.fillRect(300, 200, 200, 100);
    // this.ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
    // this.ctx.fill();

     let scores = [100,90,85,50,75,88];
     let width = 50;
     let currX = 0;
     this.ctx.fillStyle = '#0DFF6E';


      // for  (let i = 0; i < scores.length; i++ ) {
      //     let height = scores[i];
      //     this.ctx.fillRect(currX,canvasPart1.height - height, width, height);
      //     currX += width + 10;
      // }
     //  this.ctx.strokeRect(50,canvasPart1.height - 45,50,50);


      // this.ctx.translate(450, 250);
      // this.ctx.rotate(1 * Math.PI);
      //
      // for  (let i = 0; i < scores.length; i++ ) {
      //     let height = scores[i];
      //     this.ctx.fillRect(currX,0, width, height);
      //     currX += width + 10;
      // }

       // this.ctx.strokeStyle = "#FF000E";
       // this.ctx.arc(100, 100, 30, 0, 1 * Math.PI,false);
       // this.ctx.stroke();
       // this.ctx.fill();


  //    circle

      this.ctx.strokeStyle = '#02FFBB';
      this.ctx.beginPath();
      this.ctx.moveTo(80,50);

      // //top right
      // this.ctx.arcTo(210, 50, 210, 70, 20);
      // //bottom right
      // this.ctx.arcTo(210, 200, 160, 200, 20);
      // //bottom left
      // this.ctx.arcTo(60,200,60,180,20);
      // //top left
      // this.ctx.arcTo(60,50,100,50,20);


      this.ctx.stroke();
      // this.ctx.fill();


      this.animateText();






  }


  animateText() {
      const text = document.getElementById('animateText');
      let myString = 'Hello this is basic tutorial about animation text in angular 2';
      let arrString = myString.split('');
      let loopTimer;
      function frameLooper() {
          if(arrString.length > 0) {
              text.innerHTML += arrString.shift();
          } else {
              clearTimeout(loopTimer)
          }
          loopTimer = setTimeout(frameLooper, 70);
      }
      frameLooper();

  }
}



//Rectangle function
// clearRect(x,y,w,h);
// fillRect(x,y,w,h);
// rect(x,y,w,h);
// strokeRect(x,y,w,h);

//Arc/ Ellipse function
//arc(x, y, radius, startAngle, endAngle, antiClockwise)
//arcTo(x1,y1,x2,y2,radius)

// property
// fillStyle //background
//strokeStyle //border