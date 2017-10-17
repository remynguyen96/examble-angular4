import { Component, AfterViewInit, ViewEncapsulation, Renderer2, ElementRef, ViewChild, HostBinding, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class Part2Component implements AfterViewInit {

  @ViewChild('main') public main : ElementRef;
  navIsFixed : boolean = false;
  constructor(
    private renderer : Renderer2,
    // @Inject(DOCUMENT) private document: Document,
  ) { }

  @HostListener('window:scroll', [])
  windowScroll() {
    // console.log(this)
      const nav = this.main.nativeElement.offsetTop;
      const navOfTop = nav;
      // window.scrollY = this.document.body.scrollTop
      if(window.scrollY >= 485){
      // if(window.scrollY >= navOfTop){
        document.body.style.paddingTop = nav.offsetHeight+'px';
        this.navIsFixed = true;
        // document.body.classList.add('fixed-nav');
      } else {
        this.navIsFixed = false;
        // document.body.classList.remove('fixed-nav');
      }
  }

  ngAfterViewInit() {
    //////////////////////////////////////////////////
    const checkboxs : any = document.querySelectorAll('.list input[type="checkbox"]');
    let lastChecked;
    function handleCheck(e) {
      let inBetween = false;
      if(e.shiftKey && this.checked) {
        checkboxs.forEach(checkbox => {
            // console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
              inBetween = ! inBetween
              // console.log('good')
            }
            if(inBetween) {
              checkbox.checked = true;
            }
        })
      }
      lastChecked = this;
    }
    checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
    //////////////////////////////////////////////////
    const pressed = [];
    const secretCode = 'life';
    window.addEventListener('keyup', (e) => {
      pressed.push(e.key);
      pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
      // console.log(pressed);
      if(pressed.join('').includes(secretCode)){
          // console.log('DING DING !')
      }
    });
    //////////////////////////////////////////////////
  }


}
