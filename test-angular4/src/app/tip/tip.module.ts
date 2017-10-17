import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipComponent } from './tip.component';
import {TipRouting} from "./tip.routing";
import { MessageComponent } from './message/message.component';
@NgModule({
  imports: [
    CommonModule,
    TipRouting,
  ],
  declarations: [
    TipComponent,
    MessageComponent,
  ]
})
export class TipModule {

}
