"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import {Store} from '@ngrx/store';
// import {AppState, IFreelancer, ACTIONS} from '../store/freelancers.reducer';
// import {IFiler, ACTIONS as FilterACTIONS} from '../store/filter.reducer';
// import * as Rx from 'rxjs';
var FreelancerGridComponent = (function () {
    function FreelancerGridComponent() {
    }
    // freelancers: Rx.Observable<Array<IFreelancer>>;
    // filter: Rx.Observable<IFilter>;
    // constructor(private store: Store<AppState>) {
    // this.freelancers = store.select('freelancers');
    // this.freelancers = Rx.Observable.combineLatest(store.select('freelancers')
    //   , store.select('filter'), this.applyFilter);
    // }
    FreelancerGridComponent.prototype.ngOnInit = function () {
    };
    return FreelancerGridComponent;
}());
FreelancerGridComponent = __decorate([
    core_1.Component({
        selector: 'app-freelancer-grid',
        templateUrl: './freelancer-grid.component.html',
        styleUrls: ['./freelancer-grid.component.scss'],
    })
], FreelancerGridComponent);
exports.FreelancerGridComponent = FreelancerGridComponent;
