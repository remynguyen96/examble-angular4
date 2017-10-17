import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
// import { IndexDBComponent } from './index-db/index-db.component';
import { FormUserComponent } from './index-db/form-user/form-user.component';
import { SearchRxjsComponent } from './search-rxjs/search-rxjs.component';


import { FlexBoxComponent } from './flex-box/flex-box.component';
import { Part1Component } from './flex-box/part1/part1.component';
import { Part2Component } from './flex-box/part2/part2.component';
import { Part3Component } from './flex-box/part3/part3.component';
import { Part4Component } from './flex-box/part4/part4.component';
import { Part5Component } from './flex-box/part5/part5.component';
import { Part6Component } from './flex-box/part6/part6.component';
import { Part7Component } from './flex-box/part7/part7.component';
import {GridComponent} from "./grid/grid.component";
import {Part1Component2} from "./grid/part1/part1.component";

const routes : Routes = [
  {
    path: '',
    redirectTo: 'indexDB',
    pathMatch: 'full'
  },
  // {
  //   path: 'indexDB',
  //   component: IndexDBComponent,
  //   data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  // },
  {
    path: 'form-user',
    component: FormUserComponent,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },
  {
    path: 'search-rxjs',
    component: SearchRxjsComponent,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },

  {
    path: 'flex-box',
    component: FlexBoxComponent,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },
  {
    path: 'part-1',
    component: Part1Component,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },
  {
    path: 'part-2',
    component: Part2Component,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },
  {
    path: 'part-3',
    component: Part3Component,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },
  {
    path: 'part-4',
    component: Part4Component,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },
  {
    path: 'part-5',
    component: Part5Component,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },
  {
    path: 'part-6',
    component: Part6Component,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },
  {
    path: 'part-7',
    component: Part7Component,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },
  {
    path: 'grid',
    component: GridComponent,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },
  {
    path: 'grid-1',
    component: Part1Component2,
    data: { title: 'Những Câu Chuyện Cuộc Sống - Lá Xanh' }
  },

];
@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy : PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRouting {}
