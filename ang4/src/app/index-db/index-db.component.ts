// import {Component, OnInit, AfterViewInit } from '@angular/core';
// import {DataSource} from '@angular/cdk';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
// import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/observable/merge';
// import 'rxjs/add/operator/map';
//
// @Component({
//   selector: 'app-index-db',
//   templateUrl: './index-db.component.html',
//   styleUrls: ['./index-db.component.scss'],
// })
// export class IndexDBComponent implements OnInit, AfterViewInit {
//   displayedColumns = ['ID', 'Name', 'Email', 'Description'];
//   exampleDatabase = new ExampleDatabase();
//   dataSource: ExampleDataSource | null;
//
//   ngOnInit() {
//     this.dataSource = new ExampleDataSource(this.exampleDatabase);
//   }
//
//   ngAfterViewInit() {
//
//
//   }
//
//
// }
//
// /** Constants used to fill up our data base. */
// const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
//   'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
//   'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
//
// export interface UserData {
//   id: string;
//   name: string;
//   email: string;
//   description: string;
// }
//
// export class ExampleDatabase {
//   dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);
//   get data(): UserData[] { return this.dataChange.value; }
//
//   constructor() {
//     for (let i = 0; i < 10; i++) {
//        this.addUser();
//     }
//   }
//
//   addUser() {
//     const copiedData = this.data.slice();
//     copiedData.push(this.createNewUser());
//     this.dataChange.next(copiedData);
//   }
//
//   private createNewUser() {
//     const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];
//     return {
//       id: (this.data.length + 1).toString(),
//       name: name,
//       email: name+'@gmail.com',
//       description: 'hello guy !',
//     };
//   }
// }
//
// export class ExampleDataSource extends DataSource<any> {
//   constructor(private _exampleDatabase: ExampleDatabase) {
//     super();
//   }
//
//   connect(): Observable<UserData[]> {
//     return this._exampleDatabase.dataChange;
//   }
//
//   disconnect() { }
// }
