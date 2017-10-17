import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {ISearchResult, SearchResult} from "../models/search-result";
import {PostInterface} from "../models/post";



@Injectable()
export class NutritionService {
    apiKey: string;
    urlServer: string = 'http://localhost:2222';
    token: string = 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWExN2I2OTU5Zjg2NjZlNGM0OGI2YjEiLCJpYXQiOjE1MDM3NTUxMTMsImV4cCI6MTUwNDg3ODkxM30.7StKUmxAjBx5Dj_DtiqRnH83GXgJRGtTI03u7R88XmM'

    constructor(private http: Http) {
        this.apiKey = 'KxhNfT3pMwlnn21HUCCs61iG2JwT9EmMrgOnOiU7';
    }

    searchFood(query: string): Observable<SearchResult[]> {
        const url = 'https://api.nal.usda.gov/ndb/search/?format=json&';
        const params: string = [
            `q=${query}`,
            `sort=r`, // sort by relevance
            `max=25`, // maximum number of results
            `offset=0`, // beginning row in the result set to begin
            `ds=Standard%20Reference`, // 'Standard Reference' or 'Branded Food Products
            `api_key=${this.apiKey}` // Your api key
        ].join('&');
        const queryURL = `${url}${params}`;
        return this.http.get(queryURL).map((response: Response) =>
            response.json().list ? response.json().list.item.map(item => {
                return new SearchResult(item);
            }) : []);
    }

    searchPost(query: string): Observable<PostInterface[]> {
        const url: string = `http://localhost:2222/api/blogs/search-blogs?q=${query}`;
        return this.http.get(url).map((res: Response) => res.json());
    }

    fetchPost(query: string): Observable<PostInterface[]> {
        const url: string = `http://localhost:2222/api/blogs`;
        let headers = new Headers({'X-Requested-With': 'XMLHttpRequest'});
        headers.append('Authorization', this.token);
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.get(url, options).map((res: Response) => res.json());
    }


}
