import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ImageCanvasComponent} from "./image-canvas.component";

const routes: Routes = [
    {
        path: '',
        component: ImageCanvasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImageCanvasRoutingModule {
}
