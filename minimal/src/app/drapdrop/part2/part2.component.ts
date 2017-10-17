import {AfterViewInit, Component, ElementRef, HostBinding, OnInit, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
// import {
//     HttpRequest,
//     HttpHandler,
//     HttpEvent,
//     HttpInterceptor
// } from '@angular/common/http';

@Component({
    selector: 'app-part2',
    templateUrl: './part2.component.html',
    styleUrls: ['./part2.component.scss']
})
export class Part2Component implements OnInit, AfterViewInit {
    @ViewChild('myCanvas') myCanvas: ElementRef;
    @ViewChild('text') text: ElementRef;
    @ViewChild('color') color: ElementRef;
    @ViewChild('size') size: ElementRef;
    listImages: any[] = [];
    dataForm: FormGroup;
    allFiles: File[] = [];
    showDialog: boolean = false;
    fillText: any = {
        text: '',
        fontWeight: '400',
        size: '35',
        color: '#00e45e',
    };
    position: any = {
        top: 0,
        left: 0,
        offsetHeight: 0,
    };
    imgRender: string = 'http://via.placeholder.com/500x400';

    // srcImage :  any= 'assets/the-good-life.jpg';
    // @HostBinding('@routerAnimation') routerAnimation = true;
    // @HostBinding('style.position')  positions = 'relative';
    // @HostBinding('style.display')   display = 'block';
    constructor(private renderer: Renderer2, private formBuilder: FormBuilder) {

    }

    ngOnInit() {
        this.dataForm = this.formBuilder.group({
            caption: [null, Validators.required],
            images: [null],
        });
    }


    ngAfterViewInit() {
        //upload image with drapdrop
        const allFiles = this.allFiles;
        const imagesList = this.listImages;
        const box = document.getElementById('boxupload');
        const image: any = document.querySelectorAll('.image');
        box.addEventListener('dragover', function (e) {
            e.preventDefault();
            box.classList.add('activeDrop');
        });
        box.addEventListener('dragleave', function (e) {
            e.preventDefault();
            box.classList.remove('activeDrop');
        });
        box.addEventListener('drop', function (ev) {
            ev.preventDefault();
            let files = ev.dataTransfer.files;
            ev.dataTransfer.clearData();
            // ev.dataTransfer.setData("text/plain", ev.target.id);
            if (files.length > 0) {
                allFiles.push(files[0]);
                let reader: FileReader = new FileReader();
                reader.onload = (e) => {
                    // console.log(e.target.result) === reader.result;
                    imagesList.push({'src': reader.result, 'id': files[0].name});
                    box.classList.remove('activeDrop');
                }
                reader.readAsDataURL(files[0]);
            }
        })
        const canvas = this.myCanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        canvas.width = 500;
        canvas.height = 400;
    }

    changeSizeText(e) {
        let size = e.target.value;
        this.fillText.size = size;
    }

    changeColorText(e) {
        let color = e.target.value;
        this.fillText.color = color;
    }

    changeFontWeightText(e) {
        let fontWeight = e.target.value;
        this.fillText.fontWeight = fontWeight;
    }

    canvasWraptest(e) {
        const canvas: any = document.getElementById('wraptest');
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        canvas.style.background = '#3BCF7B';
        let maxWidth = 400;
        let lineHeight = 25;
        let x = (canvas.width - maxWidth) / 2;
        let y = (canvas.height - lineHeight) * (0.5);
        this.fillText.text = e.target.value;
        // let text = 'All the world \'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.';
        ctx.font = `${this.fillText.fontWeight} ${this.fillText.size}px Roboto`;
        ctx.fillStyle = `${this.fillText.color}`;
        this.wrapText(ctx, this.fillText.text, x, y, maxWidth, lineHeight);
    }

    wrapText(ctx: CanvasRenderingContext2D, text, x, y, maxWidth, lineHeight) {
        let words = text.split(' ');
        let line = '';
        for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = ctx.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                ctx.fillText(line, x, y);
                line = words[n] + ' ';
                y += lineHeight;
                if(y >= ctx.canvas.height ) {
                    ctx.canvas.height = y + 50;
                }
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, y);
    }

    editImage(data) {
        this.showDialog = !this.showDialog;
        //canvas
        const canvas = this.myCanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        // canvas.style.position = 'relative';
        // canvas.style.zIndex = '9';
        let img = new Image();
        // img.onload = function () {
        //     let sourceWidth = 500;
        //     let sourceHeight = 400;
        //     let destX = canvas.width / 2 - sourceWidth / 2;
        //     let destY = canvas.height / 2 - sourceHeight / 2;
        //     ctx.drawImage(img, 0, 0, sourceWidth, sourceHeight, destX, destY, sourceWidth, sourceHeight);
        // }
        img.src = data.src;

        function Player() {
            this.w = 221;
            this.h = 52;
            this.x = (ctx.canvas.width - this.w) * 0.5;
            this.y = (ctx.canvas.height - this.h) * 0.5;
            this.render = () => {
                ctx.fillStyle = '#FF2042';
                ctx.fillRect(137, 336, this.w, this.h);
            };
        }

        let player = new Player();
        let initNumber = 3;

        function animate() {
            ctx.save();
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            // ctx.drawImage(img, 0, 0,  400,  400, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            // let pixelData = ctx.getImageData(0,0, canvas.width, canvas.height);
            // for(let i = 0; i < pixelData.data.length; i+= 4) {
            // let r = pixelData.data[i];
            // let g = pixelData.data[i + 1];
            // let b = pixelData.data[i + 2];
            // let a = pixelData.data[i + 3];
            //     let bw = 0.2 * pixelData.data[i] + 0.72 *
            //             pixelData.data[i + 1] + 0.07 * pixelData.data[i + 2];
            //     pixelData.data[i] = bw;
            //     pixelData.data[i + 1] = bw;
            //     pixelData.data[i + 2] = bw;
            // }
            // ctx.putImageData(pixelData,0, 0);


            // player.render();
            ctx.restore();
        }

        document.addEventListener('keydown', (event) => {
            let key_press = String.fromCharCode(event.keyCode);
            // console.log(`X: ${player.x} | Y: ${player.y}`)
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
        const animationInterval = setInterval(animate, 30);

        ctx.canvas.addEventListener('mousemove', (event) => {
            let mouseX = event.clientX - ctx.canvas.offsetLeft;
            let mouseY = event.clientY - ctx.canvas.offsetTop;
            console.log(`${mouseX} | ${mouseY}`)
        });
    }

    addText() {
        const canvas = this.myCanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.font = `${this.fillText.size}px Roboto, Arial`;
        ctx.fillStyle = this.fillText.color;
        let widthText = ctx.measureText(this.fillText.text).width;
        let heightText = this.position.offsetHeight;
        console.log(widthText);
        console.log(heightText);
        console.log(this.position.left);
        console.log(this.position.top);
        ctx.fillText(this.fillText.text, this.position.left, this.position.top);
        // ctx.strokeText(this.fillText.text, this.position.left, this.position.top);
        this.imgRender = canvas.toDataURL("image/png");
    }

    positionHanding(e) {

        // this.position = e;
        // console.log(e);
        const canvas = this.myCanvas.nativeElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
        ctx.font = `${this.fillText.size}px Roboto, Arial`;
        ctx.fillStyle = this.fillText.color;
        let widthText = ctx.measureText(this.fillText.text).width;
        let padding = 30;
        if (widthText > (canvas.width - 30)) {
            widthText === canvas.width - 30;
        }
        // console.log(e.left);
        // console.log(e.top);
        ctx.fillText(this.fillText.text, 30, 40);
        // ctx.fillText(this.fillText.text, e.left, (e.top - e.offsetHeight));
        this.imgRender = canvas.toDataURL("image/png");
    }

    onSubmit() {
        this.dataForm.value.images = this.allFiles;
        console.log(this.dataForm.value);
    }

}
