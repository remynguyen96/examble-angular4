import { Component, AfterViewInit, ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-part3',
  templateUrl: './part3.component.html',
  styleUrls: ['./part3.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Part3Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const addItems = document.querySelector('.add-items');
    const itemList = document.querySelector('.plates');
    const items = [];
    function addItem(e) {
      e.preventDefault();
      const text = (this.querySelector('[name=item]')).value
      const item = {
        text : text,
        done : false,
      }
      items.push(item);
      populateList(items,itemList);
      this.reset();
    }

    function populateList(plates = [],platesList) {
      platesList.innerHTML = plates.map((plate,i) => {
        return `
          <li>
            <input type="checkbox" data-index="${i}" id="${i}" ${plate.done ? 'checked' : ''} />
            <label for='${i}'>${plate.text}</label>
          </li>
        `
      }).join('');
    }

    function toggleDone(e){
      if(!e.target.matches('input')) return;
      const el = e.target;
      const index = e.target.dataset.index;
      items[index].done = !items[index].done;
      populateList(items, itemList);
    }

    addItems.addEventListener('submit', addItem);
    itemList.addEventListener('click', toggleDone);
    ////////////////////////////////////////

    const hero : any= document.getElementById('hero');
    const text : any= document.querySelector('#hero h1');
    const walk = 50;
    function shadowText(e) {
      const { offsetWidth: width, offsetHeight: height } : any = hero;
      let { offsetX: x, offsetY: y} = e;

      if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
      }

      const xWalk = Math.round((x / width * walk) - (walk / 2));
      const yWalk = Math.round((y / height * walk) - (walk / 2));

      text.style.textShadow = `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
      `;
    }
    hero.addEventListener('mousemove', shadowText)

    //////////////////////////////////////////////////////////////
    const bands = [
      'Tình về nơi đâu',
      'Con tim mong manh',
      'Yêu thương quay về',
      'Hạnh phúc tại tâm',
      'An trú trong hiện tại',
      'Bình yên',
      'Con đường xanh',
      'Đường xưa mây trắng',
      'Đắc nhân tâm',
    ];
    // const bands = [
    //   'The Plot in you',
    //   'The Devild Weard Prada',
    //   'Pierce the viels',
    //   'Norma Jean',
    //   'The Bled',
    //   'Say Anthing',
    //   'Anywhere But Where',
    //   'An Old Dog',
    //   'A Skylit Drive',
    //   'We came as romans',
    //   'Counteroarts',
    //   'Say Anything',
    //   'The Midway State',
    //   'Oh, Sleeper',
    // ];
    function strip(bandName) {
      return bandName.replace(/^(a |the |an )/i, '').trim();
    //  /^(a |the |an )/i
    }
    const sortedBands = bands.sort((a, b) => a.localeCompare(b));
    // const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);

    document.querySelector('#bands').innerHTML =
      sortedBands.map(band => `<li>${band}</li>`).join('');

  }

}
