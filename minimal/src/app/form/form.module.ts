import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormRoutingModule} from './form-routing.module';
import {FormComponent} from './form.component';

import {FormPart2Component} from './form-part2/form-part2.component';
import {SwitchComponent} from './form-part2/switch/switch.component';
import {FormPart3Component} from './form-part3/form-part3.component';
import {FormPart4Component} from './form-part4/form-part4.component';
import {SpilitInputDirective} from './form-part3/spilit-input.directive';
import {FormErrorComponent} from './form-part1/form-error/form-error.component';
import {FormPart1Component} from './form-part1/form-part1.component';
import {ShareModuleModule} from "../share-module/share-module.module";
import { FormPart5Component } from './form-part5/form-part5.component';
import { ContainerComponent } from './form-part5/container/container.component';

@NgModule({
    imports: [
        CommonModule,
        FormRoutingModule,
        ShareModuleModule,
    ],
    declarations: [
        FormComponent,
        FormPart1Component,
        FormErrorComponent,
        FormPart2Component,
        SwitchComponent,
        FormPart3Component,
        FormPart4Component,
        SpilitInputDirective,
        FormPart5Component,
        ContainerComponent
    ]
})
export class FormModule {
}
