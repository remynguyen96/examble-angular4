import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Part1DerectiveComponent } from './part1-derective.component';
import { Part1Directive } from './shared/part1.directive';
import {Part1DerectiveRouting} from "./part1-derective.routing";
import { TooltipDirective } from './shared/tooltip.directive';
import {Part1Service} from "./shared/part1.service";
import { CreateElementDirective } from './shared/create-element.directive';
import { SelectorsDirective } from './shared/selectors.directive';
import { ModalComponent } from './modal/modal.component'
@NgModule({
  imports: [
    CommonModule,
    Part1DerectiveRouting,
  ],
  declarations: [
    Part1DerectiveComponent,
    Part1Directive,
    TooltipDirective,
    CreateElementDirective,
    SelectorsDirective,
    ModalComponent
  ],
  providers: [Part1Service],
})
export class Part1DerectiveModule { }
