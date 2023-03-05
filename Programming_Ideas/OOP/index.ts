import Animal from "./Animal";

// 对象继承 Cat 继承 Animal
// 不可以多继承
class Cat extends Animal {}

const cat = new Cat("凯莉", 1);

cat.eat();
cat.run();
cat.live();

console.log("cat instanceof Cat", cat instanceof Cat);
console.log("Cat instanceof Animal", cat instanceof Animal);

// console.log("cat.__proto__ == Animal", Cat.__proto__ === Animal);

console.log("--------------------------------");

class Dog extends Animal {
  private fierce: boolean;

  constructor(name: string, age: number, fierce: boolean) {
    super(name, age);
    this.fierce = fierce;
  }

  dogFierce() {
    if (this.fierce) {
      console.log(`${this.getName()} 非常凶`);
    } else {
      console.log(`${this.getName()} 非常温顺`);
    }
  }
}

const dog = new Dog("杰克", 5, true);

dog.eat();
dog.run();
dog.live();
dog.dogFierce();

console.log("dog instanceof Dog", dog instanceof Dog);
console.log("Dog instanceof Animal", dog instanceof Animal);

console.log("--------------------------------");

class Human extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  // 对象多态
  // 通过重写父类方法实现多态
  eat() {
    // super.eat();
    console.log(`Human ${this.getName()} eat 熟食`);
  }
  // 对象多态
  // 通过重写父类方法实现多态
  run() {
    // super.run();
    console.log(`Human ${this.getName()} 两条腿跑`);
  }
}

const human = new Human("ALEX", 18);

human.eat();
human.run();
human.live();

console.log("human instanceof Human", human instanceof Human);
console.log("Human instanceof Animal", human instanceof Animal);
