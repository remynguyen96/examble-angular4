import {Component, OnInit} from '@angular/core';
import {animate, AnimationBuilder, AnimationPlayer, style} from '@angular/animations';
@Component({
  selector: 'app-part16',
  templateUrl: './part16.component.html',
  styleUrls: ['./part16.component.scss']
})
export class Part16Component implements OnInit {

  constructor(private _builder: AnimationBuilder) {

  }


  ngOnInit() {

  }

  makeAnimation(element: any) {
    const myAnimation = this._builder.build([
       style({width: 0}),
        animate(1000, style({width: '100px'}))
    ]);
    const player: AnimationPlayer= myAnimation.create(element);
      // console.log(player.hasStarted())
      // console.log(player.getPosition())
      console.log(player.totalTime)
      player.play();
  }

}
// https://angular.io/api/animations/AnimationBuilder
// https://angular.io/api/animations/AnimationPlayer