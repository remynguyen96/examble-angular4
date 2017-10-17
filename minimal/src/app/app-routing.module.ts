import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppCustomPreloader } from './app-routing-loader';
const routes: Routes = [
    {
        path: '',
        redirectTo: 'image-canvas',
        pathMatch: 'full',
    },
    {
        path: 'form',
        loadChildren: './form/form.module#FormModule',
    },
    {
        path: 'directive',
        loadChildren: './directive/directive.module#DirectiveModule',
    },
    {
        path: 'ngrx',
        loadChildren: './ngrx/ngrx.module#NgrxModule',
    },
    {
        path: 'ngrx-nutrition',
        loadChildren: './ngrx-nutri/ngrx-nutri.module#NgrxNutriModule',
    },
    {
        path: 'socket',
        loadChildren: './socket/socket.module#SocketModule',
    },
    {
        path: 'canvas',
        loadChildren: './canvas/canvas.module#CanvasModule',
        data: {
            title: 'Canvas Tutorial',
            depth: 1,
        }
    },
    {
        path: 'drapdrop',
        loadChildren: './drapdrop/drapdrop.module#DrapdropModule',
        data: {
            preload: true,
            title: 'Drapdrop Tutorial',
            depth: 2,
        }
    },
    {
        path: 'synthetic',
        loadChildren: './synthetic/synthetic.module#SyntheticModule',
    },
    {
        path: 'image-canvas',
        loadChildren: './image-canvas/image-canvas.module#ImageCanvasModule',
    },
    {
        path: 'carousel',
        loadChildren: './carousel/carousel.module#CarouselModule',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: AppCustomPreloader })],
    exports: [RouterModule],
    providers: [AppCustomPreloader]
})
export class AppRoutingModule {
}
