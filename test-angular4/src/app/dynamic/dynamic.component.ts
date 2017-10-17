import { Component, OnInit } from '@angular/core';
import {DynamicService} from './shared/dynamic.service';
import {TypeComponent} from './models/type';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  infomation: TypeComponent[];
  role: string;
  roleAdmin: string = 'admin';
  roleMember: string = 'member';
  constructor(private dynamicService: DynamicService) {

  }

  ngOnInit() {
    this.infomation = this.dynamicService.infomationComponent()

    // this.dynamicService.user()
      // .map(user => user[0].role)
      // .filter(user => user.role === 'admin')
      // .subscribe(result => console.log(result));
  }

  showAdmin(role) {
    this.role = role;
  }

}
