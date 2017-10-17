export class Hero {
  id: number;
  name: string;
  tid: string;
}

let nextId = 100;

export class Detail {
  constructor(public id = nextId++,
              public hero: Hero,
              public income = 0) {
    if (income === 0) {
      id = nextId++;
    }
  }

  get tax() {
    return this.income ? .10 * this.income : 0;
  }

  get tid() {
    return this.hero.tid;
  }

  get name() {
    return this.hero.name;
  }

  clone() {
    return new Detail(this.id, this.hero, this.income);
  }
}
