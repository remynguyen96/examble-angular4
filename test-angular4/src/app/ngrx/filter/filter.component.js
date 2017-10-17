"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// import { Store } from '@ngrx/store';
// import { FormGroup, FormControl } from '@angular/forms';
// import {IFiler, ACTIONS as FilterACTIONS} from '../store/filter.reducer';
// import * as Rx from 'rxjs';
var FilterComponent = (function () {
    function FilterComponent() {
    }
    // name = new FormControl();
    // email = new FormControl();
    // constructor(private store: Store<any>) {
    // store.select('filter').subscribe((filter: IFiler) => {
    //   this.name.setValue(filter.name);
    //   this.email.setValue(filter.email);
    // });
    // Rx.Observable.merge(this.name.valueChanges, this.email.valueChanges)
    //   .debounceTime(1000).subscribe(() => this.filter());
    // }
    FilterComponent.prototype.ngOnInit = function () {
    };
    return FilterComponent;
}());
FilterComponent = __decorate([
    core_1.Component({
        selector: 'app-filter',
        templateUrl: './filter.component.html',
        styleUrls: ['./filter.component.scss']
    })
], FilterComponent);
exports.FilterComponent = FilterComponent;
