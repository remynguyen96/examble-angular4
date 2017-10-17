import { Component, AfterViewInit, HostListener, HostBinding, ViewChild, ElementRef, ViewEncapsulation, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-part7',
  templateUrl: './part7.component.html',
  styleUrls: ['./part7.component.scss']
})
export class Part7Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    let countdown;
    const buttons : any= document.querySelectorAll('[data-time]');
    const timerDisplay = document.querySelector('.display__time-left');
    const endTime = document.querySelector('.display__end-time');
    const form = document.querySelector('#custom');

    function timer(seconds) {
      clearInterval(countdown);
      const now = Date.now();
      const then = now + seconds * 1000;
      displayTimeLeft(seconds);
      displayEndTime(then);

      countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if(secondsLeft <= 0) {
          clearInterval(countdown);
          return;
        }
        displayTimeLeft(secondsLeft);
      },1000);
    }

    function displayTimeLeft(seconds) {
      const minutes = Math.floor(seconds / 60);
      const remainderSeconds = seconds % 60;
      const display  = `${minutes} : ${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}` ;
      document.title = display;
      timerDisplay.textContent = display;
    }

    function displayEndTime(timestamp) {
      const end = new Date(timestamp);
      const adjustedHour = end.getHours();
      const adjustedMinutes = end.getMinutes();
      const display = `Be Back At ${adjustedHour > 12 ? adjustedHour - 12 : adjustedHour}:${adjustedMinutes < 10 ? '0' : ''}${adjustedMinutes}`;
      endTime.textContent = display;
    }

    function startTime() {
      const seconds = parseInt(this.dataset.time);
      timer(seconds);
    }

    function Submit(e) {
        e.preventDefault();
        const mins = this.minutes.value;
        timer(mins * 60);
        this.reset();
    }

    buttons.forEach(button => button.addEventListener('click',startTime));
    form.addEventListener('submit',Submit);
    
    // document.customForm.addEventListener('submit', function(e) {
    //   e.preventDefault();
    //   const mins = this.minutes.value;
    //   timer(mins * 60);
    //   this.reset();
    // });


  }

}
