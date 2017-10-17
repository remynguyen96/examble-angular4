import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {PartialObserver} from "rxjs/Observer";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {UserSearchService} from "./user-search.service";
export interface User {
    login: string;
    avatar_url: string;
}
@Component({
    selector: 'app-form-part5',
    templateUrl: './form-part5.component.html',
    styleUrls: ['./form-part5.component.scss'],
    providers:[UserSearchService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormPart5Component implements OnInit {

    public users: Observable<User[]>;
    subject: Subject<string> = new Subject<string>();
    constructor(private service: UserSearchService) {

    }

    ngOnInit() {
        this.users = this.subject
            .debounceTime(1000)
            .distinctUntilChanged()
            .switchMap(username => this.service.searchUsers(username));
    }

}
