import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-part9',
    templateUrl: './part9.component.html',
    styleUrls: ['./part9.component.scss']
})
export class Part9Component implements AfterViewInit {
    @ViewChild('mycanvas') mycanvas: ElementRef;

    constructor() {
    }

    ngAfterViewInit() {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        let click: boolean = false;
        let image = new Image();
        image.onload = loadImage;
        image.src = 'http://icodingclub.github.io/imagecropper/steve-jobs.jpg';
        document.getElementById('cropImage').onclick = dropImage;

        function loadImage() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);


            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
            ctx.canvas.onmousemove = onMouseMove
            ctx.canvas.onmousedown =  onMouseDown
            ctx.canvas.onmouseup = onMouseUp
        }

        function onMouseMove() {

        }

        function onMouseDown() {

        }

        function onMouseUp() {

        }

        function windowToCanvas() {
            let bbox = ctx.canvas.getBoundingClientRect();
            console.log(canvas.width);
            console.log(bbox);
        }

        function dropImage() {

        }
    }

}
