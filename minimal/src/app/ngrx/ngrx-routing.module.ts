import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NgrxComponent} from "./ngrx.component";
import {SearchInputComponent} from "./search-input/search-input.component";
import {SearchResultComponent} from "./search-result/search-result.component";
const routes: Routes = [
    {
        path: '',
        component: NgrxComponent,
        children: [
            {
                path: 'search-result',
                component:SearchResultComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NgrxRoutingModule {
}
