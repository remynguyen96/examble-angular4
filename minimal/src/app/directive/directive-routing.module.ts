import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DirectiveComponent} from "./directive.component";
import {Demo2Component} from "./demo2/demo2.component";

const routes: Routes = [
    {
        path: '',
        component: DirectiveComponent,
        children: [
            {
                path: 'demo2',
                component: Demo2Component
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DirectiveRoutingModule {
}
