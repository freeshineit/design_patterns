# 装饰器模式

## 定义

[修饰模式](https://zh.wikipedia.org/wiki/%E4%BF%AE%E9%A5%B0%E6%A8%A1%E5%BC%8F)，是面向对象编程领域中，一种动态地往一个类中添加新的行为的设计模式。就功能而言，修饰模式相比生成子类更为灵活，这样可以给某个对象而不是整个类添加一些功能。

## 使用场景

## 实现

```ts
import { SimpleWindow, VerticalScrollBar } from "./WindowDecorator";

const swin = new SimpleWindow();
const vbw = new VerticalScrollBar(swin);

vbw.draw();
console.log("-------------------------------------");
console.log(vbw.getDescription());

console.log("\n--------------Typescript Decorators-----------------------\n");

// Typescript Decorators
// https://www.typescriptlang.org/docs/handbook/decorators.html
// function classDecorator<T extends { new (...args: any[]): {} }>(
//   constructor: T
// ) {
//   return class extends constructor {
//     newProperty = "new property";
//     hello = "override";
//   };
// }

function readonly(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log("target", target);
  console.log("propertyKey", propertyKey);
  console.log("descriptor", descriptor);
  descriptor.writable = false;
}

class Greeter {
  greeting = "property";
  hello: string;
  constructor(m: string) {
    this.hello = m;
  }

  @readonly
  greet() {
    return "Hello, " + this.greeting;
  }
}
const greeter = new Greeter("world");
console.log(greeter.greet());

// 重新赋值会报错
// greeter.greet = () => {
//   return "readonly";
// };
// Cannot assign to read only property 'greet' of object '#<Greeter>'

// console.log(greeter.greet());
```

## ES5 实现

> yarn run build

> node dist/Design_Patterns/Decorator/index.js
