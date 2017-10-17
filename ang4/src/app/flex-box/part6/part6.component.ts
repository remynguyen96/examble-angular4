import { Component, AfterViewInit, HostListener, HostBinding, ViewChild, ElementRef, ViewEncapsulation, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-part6',
  templateUrl: './part6.component.html',
  styleUrls: ['./part6.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class Part6Component implements AfterViewInit {

  constructor(
    private renderer : Renderer2
  ) { }

  ngAfterViewInit() {
    const holes : any = document.querySelectorAll('.hole');
    const scoreBoard : any = document.querySelector('.score');
    const moles : any = document.querySelectorAll('.mole');
    const button : any = document.querySelector('.btn button');

    let lastHole : any;
    let score : number;
    let timeUp  : boolean = false;


    function randTime(min, max) {
      return Math.round(Math.random() * (max - min) + min);
    }

    function randomHole(holes) {
      const idx = Math.floor(Math.random() * holes.length);
      const hole = holes[idx];
      if(hole === lastHole) {
        // console.log(`That's the same one bud !`);
        return randomHole(holes);
      }
      lastHole = hole;
      return hole;
    }

    function peep() {
      const time = randTime(450,1000);
      // const time = randTime(50,200); // hard
      const hole = randomHole(holes);
      hole.classList.add('up');
      setTimeout(() => {
        hole.classList.remove('up');
        if(!timeUp) peep();
      } ,time);
    }

    function startGame() {
      score = 0;
      scoreBoard.textContent = 0;
      timeUp = false;
      peep();
      setTimeout(() => timeUp = true, 10000);
    }

    function bonk(e) {
      if(!e.isTrusted) return;
      score++;
      scoreBoard.textContent = score;
      this.classList.remove('up')
    }

    button.addEventListener('click',startGame);
    moles.forEach(mole => mole.addEventListener('click', bonk));
  }

}
