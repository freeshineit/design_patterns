class Car {
  num: string;
  name: string;
  constructor(num: string, name: string) {
    this.num = num;
    this.name = name;
  }
}

interface IPrice {
  price: number;
}

class FastCar extends Car implements IPrice {
  price: number;
  constructor(num: string, name: string) {
    super(num, name);
    this.price = 1;
  }
}

class SpecialCar extends Car implements IPrice {
  price: number;
  constructor(num: string, name: string) {
    super(num, name);
    this.price = 2;
  }
}

// 行程
class Trip<T extends Car> {
  car: T;
  constructor(car: T) {
    this.car = car;
  }

  start() {
    console.log(`${this.car.num} ${this.car.name} start`);
  }

  end(km: number) {
    // @ts-ignore
    console.log(`end pay ${this.car.price * km}`);
  }
}

const car1 = new FastCar("A100", "福特");

const trip1 = new Trip<FastCar>(car1);

trip1.start();
trip1.end(10);

const car2 = new SpecialCar("A1100000", "宝马");
const trip2 = new Trip<SpecialCar>(car2);

trip2.start();
trip2.end(3);
