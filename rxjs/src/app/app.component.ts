import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
}
// sudo docker run --name angular4 -d -p 8000:80 -v $(pwd):/usr/share/nginx/html nginx:1.12.1-alpine
