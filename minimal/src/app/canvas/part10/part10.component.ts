import {AfterViewInit, Component} from '@angular/core';

@Component({
    selector: 'app-part10',
    templateUrl: './part10.component.html',
    styleUrls: ['./part10.component.scss']
})
export class Part10Component implements AfterViewInit {

    constructor() {
    }

    ngAfterViewInit() {
        const blocks: any = document.getElementById('grid').children;
        let pad = 12, cols = 3, newLeft, newTop;
        for (let i = 1; i < blocks.length; i++) {
            if (i % cols === 0) {
                newTop = (blocks[i - cols].offsetTop + blocks[i - cols].offsetHeight) + pad;
                blocks[i].style.top = newTop + "px";
            } else {
                if (blocks[i - cols]) {
                    newTop = (blocks[i - cols].offsetTop + blocks[i - cols].offsetHeight) + pad;
                    blocks[i].style.top = newTop + "px";
                }
                newLeft = (blocks[i - 1].offsetLeft + blocks[i - 1].offsetWidth) + pad;
                blocks[i].style.left = newLeft + "px";
            }
        }
    }

}
