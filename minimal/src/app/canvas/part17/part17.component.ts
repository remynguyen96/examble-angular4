import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-part17',
  templateUrl: './part17.component.html',
  styleUrls: ['./part17.component.scss']
})
export class Part17Component implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
    const image: any = document.images;
    let arrayImage = [].slice.call(image);
    let img = [
        '../../../assets/farrel-nobel-103393.jpg',
        '../../../assets/joshua-earle-133254.jpg',
        '../../../assets/leaf-2471187_1920.jpg',
        '../../../assets/mathieu-nicolet-122542.jpg',
        '../../../assets/ray-hennessy-118046.jpg',
        '../../../assets/the-good-life.jpg',
    ];
      arrayImage.forEach((item, key) => {
          let createImg = document.createElement('img');
          createImg.onload = () => {
              item.src = createImg.src
              item.className = 'noblur';
          };
          setTimeout(() => {
              createImg.src = img[key];
          },50)
      });

      // const image: any = document.images[0];
      // console.log(image);
      //     let createImg = document.createElement('img');
      //     createImg.onload = () => {
      //         image.src = createImg.src;
      //         image.className = 'noblur';
      //     };
      //     setTimeout(() => {
      //         createImg.src = '../../../assets/farrel-nobel-103393.jpg';
      //     },100)
  }

}
