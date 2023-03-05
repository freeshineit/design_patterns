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
