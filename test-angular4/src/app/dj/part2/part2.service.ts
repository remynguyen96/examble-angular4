// export class Car {
//   name = 'Remy Car';
//   constructor(public engine : Engine, public tires : Tires) {
//   }
//   get description() {
//     return `
//       ${this.name} car with ${this.engine.test1} and ${this.tires.test2} -- ${this.tires.test3}
//     `;
//   }
// }
//
// export class Engine {
//   test1 = 4;
// }
// export class Tires {
//   test2 = 'Swart 2';
//   test3 = 'Swart 3';
// }
// import { Injectable } from '@angular/core';
//
// @Injectable()
// export class EngineService {
//   id = 'EngineService 1'
//   getEngine1() {
//     return new Engine();
//   }
// }
//
// @Injectable()
// export class EngineService2 {
//   id = 'EngineService 2'
//   getEngine2() {
//     const engine = new Engine();
//     engine.test1 = 9;
//     return engine;
//   }
// }
//
// @Injectable()
// export class TiresService {
//     id = 'TiresService';
//     getTire() {
//       return new Tires();
//     }
// }
//
// @Injectable()
// export class CarService1 {
//   id = 'CarService 1';
//   constructor() {
//     protected engineService: EngineService,
//     protected tiresService: TiresService,
//   }
//
//   getCar() {
//     return new Car(
//       this.engineService.getEngine1();
//       this.tiresService.getTire();
//     )
//   }
//   get name() {
//     return `${this.id} ---- ${this.engineService.id} ---- ${this.tiresService.id}`''
//   }
// }
//
// @Injectable()
// export class CarService2 extends CarService1 {
//   id = 'CarService 2';
//   constructor() {
//       protected engineService: EngineService,
//       protected tiresService: TiresService,
//       super(engineService, tiresService);
//   }
//   getCar() {
//     const car = super.getCar();
//     car.name = 'Good boy ! 2';
//     return car;
//   }
// }
//
// @Injectable()
// export class CarService3 extends CarService2 {
//   id = 'CarService 3';
//   constructor() {
//   protected engineService: EngineService,
//       protected tiresService: TiresService,
//       super(engineService, tiresService);
//   }
//   getCar() {
//     const car = super.getCar();
//     car.name = 'Good boy ! 3';
//     return car;
//   }
//
// }
//
//
//
