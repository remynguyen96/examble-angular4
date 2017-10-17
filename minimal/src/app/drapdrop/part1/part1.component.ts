import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-part1',
    templateUrl: './part1.component.html',
    styleUrls: ['./part1.component.scss']
})
export class Part1Component implements AfterViewInit {

    constructor() {
    }

    ngAfterViewInit() {
        const box = document.getElementById('boxdrop');
        const box2 = document.getElementById('boxdrop2');
        const img = document.getElementById('boxdrap');

        box.addEventListener('dragover', allowDrop);
        box.addEventListener('dragleave', leaveDrop);
        box.addEventListener('drop', drop);

        box2.addEventListener('dragover', allowDrop);
        box2.addEventListener('dragleave', leaveDrop);
        box2.addEventListener('drop', drop);
        box.style.border = '1px solid #aaaaaa'
        box2.style.border = '1px solid #aaaaaa'

        function allowDrop(e) {
            e.preventDefault();
            if(e.target === box) {
                box.style.border = '1px dashed black'
            }
            if(e.target === box2) {
                box2.style.border = '1px dashed black'
            }
        }
        function leaveDrop(e) {
            e.preventDefault();
            console.log(e);
            box.style.border = '1px solid #aaaaaa'
            box2.style.border = '1px solid #aaaaaa'
        }

        function drop(e) {
            e.preventDefault();
            let data = e.dataTransfer.getData('text');
            e.target.appendChild(document.getElementById(data));
            if(e.target === box) {
                box.style.border = '1px solid black'
            }
            if(e.target === box2) {
                box2.style.border = '1px solid black'
            }
        }

        img.addEventListener('dragstart', dragStart);
        img.addEventListener('dragend', dragEnd);
        function dragStart(ev) {
            ev.dataTransfer.clearData();
            ev.dataTransfer.setData("text/plain", ev.target.id);

            // let img = new Image();
            // img.src = '../../../assets/the-good-life.jpg';
            // ev.dataTransfer.setDragImage(img, 10, 10);
            ev.dataTransfer.effectAllowed = 'move';
            // console.log(ev.dataTransfer.items);
            img.style.opacity = "0";
        }
        function dragEnd(e) {
            console.log(e);
            img.style.opacity = "1";
        }

    }



}
