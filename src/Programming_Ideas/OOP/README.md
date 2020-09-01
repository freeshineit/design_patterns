## OOP (Object-oriented programming 面向对象编程)

> 面向对象程序设计是种具有对象概念的程序编程典范，同时也是一种程序开发的抽象方针。它可能包含资料、属性、代码与方法。对象则指的是类的实例。
> 它将对象作为程 序的基本单元，将程序和数据封装其中，以提高软件的重用性、灵活性和扩展性，对象里的程序可以访问及经常修改对象相关连的资料。
> 在面向对象程序编程里，计算机程序会被设计成彼此相关的对象。

## OOP 三大特性

### 封装

- 良好的封装能够减少耦合。

- 类内部的结构可以自由修改。

- 可以对成员变量进行更精确的控制。

- 隐藏信息，实现细节。

```ts
// 动物对象封装
class Animal {
  // 属性私有化，避免属性被直接使用和修改
  private name: string;
  private age: number;

  // 构造函数
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // ...
}
```

### 继承

- 继承就是子类继承父类的特征和行为，使得子类对象（实例）具有父类的实例域和方法，或子类从父类继承方法，使得子类具有父类相同的行为

```ts
// 对象继承 Cat 继承 Animal
// 不可以多继承
class Cat extends Animal {}

const cat = new Cat("凯莉", 1);
```

### 多态

- 消除类型之间的耦合关系
- 可替换性
- 可扩充性
- 接口性
- 灵活性
- 简化性

```ts
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
```

[es5 继承与原型链](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

参考：

- [MDN Class](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes)
- [Typescript Class](https://www.typescriptlang.org/docs/handbook/classes.html)
- [Java 面向对象编程](https://www.runoob.com/java/java-inheritance.html)
- [wiki 面向对象程序设计](https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)
