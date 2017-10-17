import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit, AfterViewInit {
    @ViewChild('mycanvas') mycanvas: ElementRef;
    @Input() showModal: boolean;
    @Input() fileUpload: FileList;
    @Output() typeModal: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() dataUrl: EventEmitter<any> = new EventEmitter<any>();
    clickCanvas: boolean = false;
    scale: number = 1;
    baseX: number = 0;
    baseY: number = 0;
    lastPointX: number = 0;
    lastPointY: number = 0;
    cutoutWidth: number = 100;
    windowWidth: number = 200;
    imageUpload: HTMLImageElement = new Image();

    // (400 - windowWidth) / 2 = cutoutWidth
    constructor() {
    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        let files: FileList = this.fileUpload;
        let url = window.URL,
            srcImg = url.createObjectURL(files[0]);
        this.imageUpload.onload = () => {
            url.revokeObjectURL(srcImg);
            this.canvasImage(this.imageUpload);
            this.drawImageCanvas(0, 0);
        };
        this.imageUpload.src = srcImg;
    }

    canvasImage(image) {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    };

    drawImageCanvas(x, y) {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        this.baseX = this.baseX + (x - this.lastPointX);
        this.baseY = this.baseY + (y - this.lastPointY);
        this.lastPointX = x;
        this.lastPointY = y;
        let imageWidth = Math.floor(this.imageUpload.width * this.scale);
        let imageHeight = Math.floor(this.imageUpload.height * this.scale);
        ctx.drawImage(this.imageUpload, this.baseX, this.baseY, imageWidth, imageHeight);
        this.drawCutout();
    }

    drawCutout() {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.fillStyle = 'rgba(128, 128, 128, 0.7)';
        ctx.beginPath();
        ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);
        ctx.moveTo(this.cutoutWidth, this.cutoutWidth);
        ctx.lineTo(this.cutoutWidth, this.cutoutWidth + this.windowWidth);
        ctx.lineTo(this.cutoutWidth + this.windowWidth, this.cutoutWidth + this.windowWidth);
        ctx.lineTo(this.cutoutWidth + this.windowWidth, this.cutoutWidth);
        ctx.closePath();
        ctx.fill();
    }

    onMouseDown(e) {
        e.preventDefault();
        let loc = this.windowToCanvas(e.clientX, e.clientY);
        this.clickCanvas = true;
        this.lastPointX = loc.x;
        this.lastPointY = loc.y;
    }

    onMouseMove(e) {
        e.preventDefault();
        if (this.clickCanvas) {
            let loc = this.windowToCanvas(e.clientX, e.clientY);
            this.drawImageCanvas(loc.x, loc.y);
        }
    }

    onMouseUp(e) {
        e.preventDefault();
        this.clickCanvas = false;
    }

    windowToCanvas(x, y) {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        let bbox = ctx.canvas.getBoundingClientRect();
        return {
            x: x - bbox.left * (ctx.canvas.width / bbox.width),
            y: y - bbox.top * (ctx.canvas.height / bbox.height),
        }
    }

    scaleImage(e) {
        let valueScale = e.target.value;
        this.scale = valueScale;
        this.drawImageCanvas(this.lastPointX, this.lastPointY);
    }

    saveImage() {
        const canvas = this.mycanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        const new_canvas = document.createElement('canvas');
        const new_ctx: CanvasRenderingContext2D = new_canvas.getContext('2d');
        new_canvas.height = new_canvas.width = this.windowWidth;
        new_ctx.drawImage(ctx.canvas, this.cutoutWidth, this.cutoutWidth, this.windowWidth, this.windowWidth, 0, 0, this.windowWidth, this.windowWidth);
        let data = new_canvas.toDataURL();
        new_canvas.toBlob((result: Blob) => {
            let files = new File([result], this.fileUpload[0].name, {lastModified: Date.now(), type: 'image/png'});
            this.dataUrl.emit({
                url: data,
                files: files,
            });
            this.typeModal.emit(false);
        });

    }

    closeModal() {
        this.typeModal.emit(false);
    }

    // renderImage(files, images) {
    //     // let avatar = this.avatar.nativeElement;
    //     // image.src = '../../../assets/the-good-life.jpg';
    //     // this.renderImage(files,avatar);
    //     let reader: FileReader = new FileReader();
    //     reader.onload = () => {
    //         images.src = reader.result;
    //     };
    //     reader.readAsDataURL(files[0]);
    // }

}

