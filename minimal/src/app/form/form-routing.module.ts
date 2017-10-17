import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FormComponent} from "./form.component";
import {FormPart1Component} from "./form-part1/form-part1.component";
import {FormPart2Component} from "./form-part2/form-part2.component";
import {FormPart4Component} from "./form-part4/form-part4.component";
import {FormPart3Component} from "./form-part3/form-part3.component";
import {FormPart5Component} from "./form-part5/form-part5.component";

const routes: Routes = [
    {
        path: '',
        component: FormComponent,
        children: [
            {
                path: 'part1',
                component: FormPart1Component
            },
            {
                path: 'part2',
                component: FormPart2Component
            },
            {
                path: 'part3',
                component: FormPart3Component
            },
            {
                path: 'part4',
                component: FormPart4Component
            },
            {
                path: 'part5',
                component: FormPart5Component
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormRoutingModule {
}
