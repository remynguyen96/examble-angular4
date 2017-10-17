import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import {User} from "./form-part5.component";
@Injectable()
export class UserSearchService {

    constructor(private _http: Http) {}
    searchUsers(username: string): Observable<User[]> {
        return username ?
            this._http.get(`https://api.github.com/search/users?q=${username}`)
                .map(response => response.json())
                .map(content => content.items) :
                Observable.of<User[]>([]);
    }

}
