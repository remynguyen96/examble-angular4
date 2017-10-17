import {Component} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {trigger, style, animate, transition, query, group, keyframes, stagger, state} from '@angular/animations';

@Component({
    selector: 'app-root',
    template: `
        <div fxLayout="row" fxLayoutAlign="space-around" style="width:100%">
            <nav md-tab-nav-bar style="background: #a739b5; color: #ffffff">
                <a md-tab-link *ngFor="let item of navLinks" [routerLink]="item.href"
                   routerLinkActive #rla="routerLinkActive"
                   [active]="rla.isActive">
                    {{item.label}}
                </a>
            </nav>
        </div>
        <div class="routerContainer" [@routerAnimation]="getDeath(myOutlet)">
            <router-outlet #myOutlet="outlet"></router-outlet>
        </div>
    `,
    styles: [],
    animations: [
        trigger('routeAnimation', [
            transition('1 => 2, 2 => 3', [
                style({height: '!'}),
                query(':enter', style({
                    transform: 'translateX(100%)'
                })),
                query(':enter, :leave', style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0
                })),
                group([
                    query(':leave', [
                        animate('.4s cubic-bezier(.35,0,.25,1)', style({
                            transform: 'translateX(-100%)'
                        }))
                    ]),
                    query(':enter', [
                        animate('.4s cubic-bezier(.35,0,.25,1)', style({
                            transform: 'translateX(0)'
                        }))
                    ])
                ])
            ]),
            transition('2 => 1', [
                style({height: '!'}),
                query(':enter', style({transform: 'translateX(-100%)'})),
                query(':enter, :leave', style({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                })),
                group([
                    query(':leave', [
                        animate('.4s cubic-bezier(.35, 0, .25, 1)', style({
                            transform: 'translateX(100%)'
                        }))
                    ]),
                    query(':enter', [
                        animate('.4s cubic-bezier(.35,0,.25,1)', style({
                            transform: 'translateX(0)'
                        }))
                    ])
                    // query(':enter', animate('.3s cubic-bezier(.35,0,.25,1)', style({
                    //      transform: 'translateX(0)'
                    // })))
                ]),
            ])
        ]),
        trigger('routerAnimation', [
            transition('* <=> *', [
                // Initial state of new route
                query(':enter',
                    style({
                        position: 'fixed',
                        width: '100%',
                        transform: 'translateX(-100%)'
                    }),
                    {optional: true}),
                // move page off screen right on leave
                query(':leave',
                    animate('500ms ease',
                        style({
                            position: 'fixed',
                            width: '100%',
                            transform: 'translateX(100%)'
                        })
                    ),
                    {optional: true}),
                // move page in screen from left to right
                query(':enter',
                    animate('500ms ease',
                        style({
                            opacity: 1,
                            transform: 'translateX(0%)'
                        })
                    ),
                    {optional: true}),
            ])
        ])
    ]
})

export class AppComponent {

    navLinks: any = [
        // {label: 'Sign Up', href: '/socket'},
        // {label: 'Chat Room', href: '/socket/chat-room'},

        // {label: 'Canvas 5', href: '/canvas/part5'},
        // {label: 'Canvas 6', href: '/canvas/part6'},
        // {label: 'Canvas 7', href: '/canvas/part7'},
        // {label: 'Canvas 13', href: '/canvas/part13'},
        // {label: 'Canvas 15', href: '/canvas/part15'},
        {label: 'Canvas 16', href: '/canvas/part16'},
        {label: 'Dradrop2', href: '/drapdrop/part2'},
    ]

    constructor(meta: Meta,
                title: Title,
                router: Router,
                activatedRoute: ActivatedRoute) {
        router.events.filter(e => e instanceof NavigationEnd)
            .subscribe((n: NavigationEnd) => {
                let pageTitle = router.routerState.snapshot.root.children[0].data['title'];
                if (pageTitle) {
                    title.setTitle(pageTitle);
                }
                window.scrollTo(0, 0);
            });

        // const pageTitle = 'Minimal | Homepage';
        // title.setTitle(pageTitle);
        // meta.addTags([
        //     {name: 'author', content: 'Remy Nguyen'},
        //     {property: 'fb:app_id', content: '1560442157353717'},
        //     {property: 'og:title', content: pageTitle},
        //     {property: 'og:site_name', content: 'Sagenic'},
        //     {
        //         property: 'og:image',
        //         content: 'https://images.unsplash.com/photo-1485458029194-00cff7de3ef7?dpr=1&auto=format&fit=crop&w=1500&h=1001&q=80&cs=tinysrgb&crop='
        //     }
        // ]);
    }

    getDeath(outlet) {
        return outlet.activatedRouteData['depth'];
    }
}
