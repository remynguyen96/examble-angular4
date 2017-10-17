import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
    selector: 'app-image-canvas',
    templateUrl: './image-canvas.component.html',
    styleUrls: ['./image-canvas.component.scss']
})
export class ImageCanvasComponent implements OnInit, AfterViewInit {
    @ViewChild('avatar') avatar: ElementRef;


    openModal: boolean;
    fileUpload: FileList;

    constructor() {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        const avatar = this.avatar.nativeElement;
        avatar.ondragover = (e) => {
            e.preventDefault();
            avatar.classList.add('active');
        };
        avatar.ondragleave= (e) => {
            e.preventDefault();
            avatar.classList.remove('active');
        };
        avatar.ondrop = (e) => {
            e.preventDefault();
            avatar.classList.remove('active');
            let files : FileList= e.dataTransfer.files;
            e.dataTransfer.clearData();
            if(files.length > 0) {
                this.openModal = true;
                this.fileUpload = files;
            }
        };
    }

    closeModal(e) {
        this.openModal = e;
    }

    onFileChange(e) {
        let files: FileList = e.target.files;
        this.fileUpload = files;
        this.openModal = true;
    }

    dataUrl(e) {
        console.log(e);
        let image = this.avatar.nativeElement;
        image.src = e.url;
    }


}
