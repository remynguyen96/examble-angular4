import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-part4',
  templateUrl: './part4.component.html',
  styleUrls: ['./part4.component.scss']
})
export class Part4Component implements AfterViewInit {
  @ViewChild('mycanvas') mycanvas: ElementRef;
  constructor() { }

  ngAfterViewInit() {
    const canvas = this.mycanvas.nativeElement;
    const ctx : CanvasRenderingContext2D = canvas.getContext('2d');
      canvas.style.margin = '0 auto';
      canvas.style.display = 'block';
      canvas.width = 600;
      canvas.height = 400;
      canvas.style.background = '#6fff93';

      // ctx.fillStyle = 'red';
      // ctx.fillRect(20, 20, 100, 100);
      //
      // ctx.fillStyle = 'blue';
      // ctx.fillRect(40, 40, 100, 100);
      //
      // let src = ctx.getImageData(20, 20, 90, 90);
      // let copy = ctx.createImageData(src.width, src.height);
      // for (var i = 0; i < copy.data.length; i++) {
      //   copy.data[i] = src.data[i];
      // }
      //
      // ctx.putImageData(copy, 350, 120);

      let x = 0,
          y = 0;
      function animate() {
        ctx.save();
        ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
      //  Draw here
          ctx.fillStyle = 'red';
          ctx.fillRect(30+x, 0, 100, 100);

          ctx.fillStyle = 'blue';
          ctx.fillRect(40, y, 100, 100);
          x++;y++
      //
        ctx.restore();
      }
      const animationInterval = setInterval(animate, 30);

  }

}
