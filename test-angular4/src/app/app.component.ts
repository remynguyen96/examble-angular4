import {Component, OnInit} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';
  content: any;

  constructor(private http: Http, private sanitizer : DomSanitizer) {

  }

  ngOnInit() {
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let requestOptions = new RequestOptions();
    // requestOptions.headers = headers;
    // let demo =  this.http.get('http://kul.dev/test', requestOptions).map((res: Response) => res.json());
    // demo.subscribe(
    //   result => {
    //     let IMG_SRC_REGEX = /(src="\/uploads)/im;
    //     let replacement = 'src="http://cdn.kul.vn/uploads';
    //     let test = JSON.parse(result);
    //     let test2 = test.content.replace(IMG_SRC_REGEX, replacement);
    //     this.content = test2;
    //   },
    //   error => console.log(error),
    // );
  }


  // public get descriptionHTML (html): SafeHtml {
  //   return this.sanitizer.bypassSecurityTrustHtml(html);
  // }
  //
  // public set descriptionHTML (html): SafeHtml {
  //   return this.sanitizer.bypassSecurityTrustHtml(html);
  // }
}



