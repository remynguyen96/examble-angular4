import { Component, OnInit } from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    constructor(meta: Meta, title: Title) {
        title.setTitle('Minimal | Form');
        meta.updateTag({name: 'keywords', content: 'Formodule Key words for angular seo, angular 4 universal'});
        meta.updateTag({name: 'description', content: 'Name Description For Form Angular 4'});
        meta.updateTag({property: 'og:title', content: 'Property Title For Form Angular 4'});
        meta.updateTag({property: 'og:description', content: 'Property Description For Form Angular 4'});
        meta.updateTag({
            property: 'og:image',
            content: 'https://images.unsplash.com/photo-1478766318990-362013e9cd01?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='
        });
    }

  ngOnInit() {
  }

}
