import { Component, OnInit, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-part4',
  templateUrl: './part4.component.html',
  styleUrls: ['./part4.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class Part4Component implements AfterViewInit, OnInit {
  @ViewChild('goodboy') test : ElementRef;

  constructor(
    private renderer2 : Renderer2
  ) {
  }

  ngOnInit(){
    let hightLight = this.test.nativeElement;
    this.renderer2.addClass(hightLight, 'hightlight');
    const trigger : any = document.querySelectorAll('a');
    function higthLightLink() {
      const linkCoords = this.getBoundingClientRect();
      const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX,
      };
      //scrollY == pageYOffset
      hightLight.style.width = `${coords.width}px`;
      hightLight.style.height = `${coords.height}px`;
      hightLight.style.transform = `translate( ${coords.left}px, ${coords.top}px)`;
    }
    trigger.forEach(a => a.addEventListener('mouseenter', higthLightLink));
  }

  ngAfterViewInit() {
    // const trigger : any = document.querySelectorAll('a');
    // const hightLight : any = document.createElement('span');
    // hightLight.classList.add('hightlight');
    // document.body.appendChild(hightLight);
  }


}
