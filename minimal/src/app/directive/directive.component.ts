import {Component, OnInit} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
    selector: 'app-directive',
    templateUrl: './directive.component.html',
    styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

    constructor(meta: Meta, title: Title) {
        title.setTitle('Minimal | Directive');
        meta.updateTag({name: 'keywords', content: 'Directive Key words for angular seo, angular 4 universal'});
        meta.updateTag({name: 'description', content: 'Name Description For Directive Angular 4'});
        meta.updateTag({property: 'og:title', content: 'Property Title For Directive Angular 4'});
        meta.updateTag({property: 'og:description', content: 'Property Description For Directive Angular 4'});
        meta.updateTag({
            property: 'og:image',
            content: 'https://images.unsplash.com/photo-1496550848045-55fd98791b7e?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop='
        });
    }

    ngOnInit() {
    }

}
