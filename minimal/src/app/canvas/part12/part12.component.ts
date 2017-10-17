import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
    selector: 'app-part12',
    templateUrl: './part12.component.html',
    styleUrls: ['./part12.component.scss']
})
export class Part12Component implements AfterViewInit {
    @ViewChild('mycanvas') mycanvas: ElementRef;

    constructor() {
    }

    ngAfterViewInit() {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        let click: boolean = false;
        let downPointX: number = 0;
        let downPointY: number = 0;
        let lastPointX: number = 0;
        let lastPointY: number = 0;
        let hoverBoxSize: number = 5;
        let resize: boolean = false;
        let canvasBackground = '#FF2042';
        document.getElementById('cropBtn').onclick = cropImage;
        let image: HTMLImageElement = new Image();
        image.onload = function () {
            ctx.canvas.width = image.width;
            ctx.canvas.height = image.height;
            reDrawCanvas();
            initEventsOnCanvas();
        }
        image.src = "../../../assets/the-good-life.jpg";

        function initEventsOnCanvas() {
            ctx.canvas.onmousedown = onMouseDown;
            ctx.canvas.onmouseup = onMouseUp;
        }

        function onMouseDown(e) {
            e.preventDefault();
            let loc = windowToCanvas(e.clientX, e.clientY);
            click = true;
            if (!resize) {
                ctx.canvas.onmousemove = onMouseMove;
                downPointX = loc.x;
                downPointY = loc.y;
                lastPointX = loc.x;
                lastPointY = loc.y;
            }
        }

        function onMouseMove(e) {
            e.preventDefault();
            if (click) {
                let loc = windowToCanvas(e.clientX, e.clientY);
                lastPointX = loc.x;
                lastPointY = loc.y;
                reDrawCanvas();
            }
        }

        function reDrawCanvas() {
            clearCanvas();
            drawImage();
            drawSelect();
            drawResizerBox()
        }

        function clearCanvas() {
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.fillStyle = canvasBackground;
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }

        function drawImage() {
            ctx.drawImage(image, 0, 0);
        }

        function drawSelect() {
            ctx.strokeStyle = '#C729BE';
            ctx.lineWidth = 1;
            ctx.strokeRect(downPointX, downPointY, (lastPointX - downPointX), (lastPointY - downPointY));
        }

        function onImageResize(e) {
            let centerPointX = (lastPointX + downPointX) / 2;
            let centerPointY = (lastPointY + downPointY) / 2;
            let loc = windowToCanvas(e.clientX, e.clientY);
            ctx.fillStyle = '#FF0000';
            ctx.lineWidth = 1;
            if (isResizeBoxHover(loc, centerPointX, downPointY)) {
                if (click) {
                    downPointY = loc.y;
                    reDrawCanvas();
                }
            } else if (isResizeBoxHover(loc, lastPointX, centerPointY)) {
                if (click) {
                    lastPointX = loc.x;
                    reDrawCanvas();
                }
            } else if (isResizeBoxHover(loc, centerPointX, lastPointY)) {
                if (click) {
                    lastPointY = loc.y;
                    reDrawCanvas();
                }
            } else if (isResizeBoxHover(loc, downPointX, centerPointY)) {
                if (click) {
                    downPointX = loc.x;
                    reDrawCanvas();
                }
            } else {
                resize = false;
                reDrawCanvas();
            }
        }

        function isResizeBoxHover(loc, xPoint, yPoint) {
            let hoverMargin = 3;
            if (loc.x > (xPoint - hoverBoxSize - hoverMargin) && loc.x < (xPoint + hoverBoxSize + hoverMargin) && loc.y > (yPoint - hoverBoxSize - hoverMargin) && loc.y < (yPoint + hoverBoxSize + hoverMargin)) {
                ctx.fillRect(xPoint - hoverBoxSize, yPoint - hoverBoxSize, hoverBoxSize * 2, hoverBoxSize * 2);
                resize = true;
                return true;
            }
            return false;
        }

        function drawResizerBox() {
            let centerPointX = (lastPointX + downPointX) / 2;
            let centerPointY = (lastPointY + downPointY) / 2;
            ctx.fillStyle = '#000000';
            ctx.lineWidth = 1;
            ctx.fillRect(centerPointX - hoverBoxSize, downPointY - hoverBoxSize, hoverBoxSize * 2, hoverBoxSize * 2);

            ctx.fillRect(lastPointX - hoverBoxSize, centerPointY - hoverBoxSize, hoverBoxSize * 2, hoverBoxSize * 2);

            ctx.fillRect(centerPointX - hoverBoxSize, lastPointY - hoverBoxSize, hoverBoxSize * 2, hoverBoxSize * 2);

            ctx.fillRect(downPointX - hoverBoxSize, centerPointY - hoverBoxSize, hoverBoxSize * 2, hoverBoxSize * 2);
        }

        function onMouseUp(e) {
            e.preventDefault();
            ctx.canvas.onmousemove = onImageResize
            click = false;
        }

        function windowToCanvas(x, y) {
            let bbox = ctx.canvas.getBoundingClientRect();
            return {
                x: x - bbox.left * (ctx.canvas.width / bbox.width),
                y: y - bbox.top * (ctx.canvas.height / bbox.height)
            }
        }

        function cropImage() {
            let temp_canvas = document.createElement('canvas');
            let temp_ctx: CanvasRenderingContext2D = temp_canvas.getContext('2d');
            temp_canvas.width = image.width;
            temp_canvas.height = image.height;
            temp_ctx.drawImage(image, downPointX, downPointY, (lastPointX - downPointX), (lastPointY - downPointY), 0, 0, (lastPointX - downPointX), (lastPointY - downPointY));
            let imageData = temp_canvas.toDataURL();
            let resultImg: any= document.getElementById('croppedImage');
            resultImg.src = imageData;
        }
    }

}
