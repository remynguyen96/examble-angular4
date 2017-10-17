export interface Nutrients {
  nutrient_id: string;
  nutrient: string;
  unit: string;
  value: number;
  gm: number;
}

export interface IFood {
  id: string;
  name: string;
  nutrients: Nutrients[];
}

export class Food implements IFood {
  id: string;
  name: string;
  nutrients: Nutrients[];
  constructor(object?: any) {
    this.id = object.ndbno || '';
    this.name = object.name || '';
    this.nutrients = object.nutrients || [];
  }
}
