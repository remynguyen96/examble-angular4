import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrapdropRoutingModule } from './drapdrop-routing.module';
import { DrapdropComponent } from './drapdrop.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { UploadComponent } from './upload/upload.component';
import { FileDropDirective } from './shared/file-drop.directive';
import { UploadFormComponent } from './upload-form/upload-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DialogComponent } from './dialog/dialog.component';
import { TextComponent } from './text/text.component';

@NgModule({
  imports: [
    CommonModule,
    DrapdropRoutingModule,
      ReactiveFormsModule,
      FormsModule,
  ],
  declarations: [DrapdropComponent, Part1Component, Part2Component, UploadComponent, FileDropDirective, UploadFormComponent, DialogComponent, TextComponent]
})
export class DrapdropModule { }
