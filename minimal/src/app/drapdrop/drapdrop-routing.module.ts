import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrapdropComponent } from './drapdrop.component';
import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import {UploadComponent} from "./upload/upload.component";
const routes: Routes = [
    {
        path: '',
        component: DrapdropComponent,
        children: [
            {
                path: 'part1',
                component: Part1Component,
            },
            {
                path: 'part2',
                component: Part2Component,
            },
            {
                path: 'upload',
                component: UploadComponent,
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrapdropRoutingModule { }
