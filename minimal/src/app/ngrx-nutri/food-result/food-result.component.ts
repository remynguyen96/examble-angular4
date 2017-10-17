import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {PostInterface} from "../models/post";
import * as AllAction from '../store/actions';
import {Observable} from "rxjs/Observable";
import {AppState} from "../store/core";
import 'rxjs/add/observable/of';
import {Subscription} from "rxjs/Subscription";


@Component({
    selector: 'app-food-result',
    templateUrl: './food-result.component.html',
    styleUrls: ['./food-result.component.scss']
})
export class FoodResultComponent implements OnInit, OnDestroy {

    post: Observable<PostInterface[]>;
    postDetail: PostInterface;
    resultPost: any = [];
    loading: Observable<boolean>;
    subscription: Subscription;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private store: Store<AppState>) {

    }

    ngOnInit() {
        this.loading = this.store.select(state => state.nutriState.loading);
        this.post = this.store.select(state => state.nutriState.searchReuslts);
        this.subscription = this.post.subscribe(result => {
            this.resultPost = result;
            const idPost: string = this.route.snapshot.params.id;
            this.postDetail = this.resultPost.find((item) => {
                if (item._id === idPost) {
                    // this.store.dispatch(new AllAction.FetchResultDone(item));
                    this.loading = Observable.of(false);
                    return item;
                }
            });
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    addList(postDetail) {
        this.store.dispatch(new AllAction.AddResult(postDetail));
        this.router.navigate(['ngrx-nutrition/my-results']);
    }
}
