import { Component, OnInit } from '@angular/core';
import { Food } from '../models/food';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Store } from "@ngrx/store";
import * as fromRoot from '../store/reducer.service';
import * as Actions from '../store/actions.service';

@Component({
    selector: 'app-food-detail',
    templateUrl: './food-detail.component.html',
    styleUrls: ['./food-detail.component.scss']
})

export class FoodDetailComponent implements OnInit {

    food: Observable<Food>;
    loading:  Observable<Boolean>;

    constructor(private route: ActivatedRoute, private router: Router,
                private store: Store<fromRoot.State>) {}

    ngOnInit() {

        this.food = this.store.select(state => state.selectedFood);
        this.loading = this.store.select(state => state.loading);

        this.route.params
            .map(params => params.id)
            .do(id => this.store.dispatch(new Actions.GetFood(id)))
            .subscribe();
    }

    removeFromList(food: Food): void {
        this.store.dispatch(new Actions.RemoveFood(food));
        this.router.navigate(['myfoods']);
    }

}
