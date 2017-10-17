import { Component, AfterViewInit, HostBinding, HostListener, Renderer2, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-part5',
  templateUrl: './part5.component.html',
  styleUrls: ['./part5.component.scss'],
  // encapsulation: ViewEncapsulation.Emulated,
})
export class Part5Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const triggers : any= document.querySelectorAll('.cool > li');
    const background : any= document.querySelector('.dropdownBackground');
    const nav : any= document.querySelector('.top');

    function handleEnter() {
      this.classList.add('trigger-enter');
      setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
      background.classList.add('open');
      const dropdown = this.querySelector('.dropdown');
      const dropdownCoords = dropdown.getBoundingClientRect();
      const navCoords = nav.getBoundingClientRect();
      const coords  = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left,
      };
      background.style.setProperty('width',`${coords.width}px`);
      background.style.setProperty('height',`${coords.height}px`);
      background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
    }

    function handleLeave() {
      this.classList.remove('trigger-enter', 'trigger-enter-active');
      background.classList.remove('open');
    }

    triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
    triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))

  }

}
