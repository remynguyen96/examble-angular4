import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageCanvasRoutingModule } from './image-canvas-routing.module';
import { ImageCanvasComponent } from './image-canvas.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    ImageCanvasRoutingModule,

  ],
  declarations: [
      ImageCanvasComponent,
      ModalComponent
  ]
})
export class ImageCanvasModule { }
