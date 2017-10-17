import { Type } from '@angular/core';

export interface View {
  infomation: any;
}

export class TypeComponent {
  constructor(public component: Type<any>, public data: any){}
}
