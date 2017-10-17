import {AfterViewInit, Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-text',
    templateUrl: './text.component.html',
    styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit, AfterViewInit {
    @Input() text: string;
    @Input() size: string;
    @Input() color: string;
    @Output() position = new EventEmitter();
    @HostBinding('style.background') width: string;
    constructor() {
    }

    ngOnInit() {
       this.width = '#13FF4B';
    }

    ngAfterViewInit() {

    }

    drapdrop() {
        const text: any = document.getElementById('dragdrop');
        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        let offsetHeight = text.offsetHeight;
        text.onmousedown = (e) => {
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            document.onmousemove = elementDrag;
        };

        function elementDrag(e) {
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            text.style.top = (text.offsetTop - pos2) + "px";
            text.style.left = (text.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            document.onmouseup = null;
            document.onmousemove = null;
        }

        this.position.emit({
            top: (text.offsetTop - pos2),
            left: (text.offsetLeft - pos1),
            offsetHeight: offsetHeight,
        });
    }

}
