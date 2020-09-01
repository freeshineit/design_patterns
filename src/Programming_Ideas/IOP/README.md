## IOP (Interface-oriented programming 面向接口编程)

> 面向接口编程是一种在没有模块系统的面向对象程序设计语言中的组件层面实现模块化编程的架构模式。
> 面向接口编程将应用程序定义为组件的集合，其中组件间的应用程序接口（API）调用可能只通过抽象化接口完成，而没有具体的类。
> 类的实例化一般通过使用如工厂模式等技术的其他接口完成。
> 这种方式被认为增加了应用程序的模块性并因而增加了可维护性。
> 但是，有必要谨慎考虑——仅将应用程序分解成通过接口通信的任意组件本身不能保证低耦合性或高内聚性，这两项通常被认为是可维护性的另外两项关键属性。
> 当第三方（或同一个组织内的另一个团队）为已创建的系统开发了额外的组件或插件时，可以使用基于接口体系结构。
> 这有点像移动电话制造商制定的移动充电器接口（引脚布局、预期直流电电压等）和，制造商和第三方都制造符合这种标准接口规范的手机充电器。

```ts
// 定义一个 USB Type-C 的接口
// 让其他的制造厂商去实现这个接口，只有实现了这个接口规范才可以使用
interface USBTypeC {
  // 充电
  electric(): void;
  // 信号 0 - 100
  signal(): number;
  // 接地
  gnd(): void;
}

class Windows implements USBTypeC {
  electric(): void {
    console.log("Windows electric");
  }
  signal(): number {
    console.log("Windows signal");
    return 0;
  }
  gnd(): void {
    console.log("Windows gnd");
  }
  // Windows 自身的函数
  start() {}
  shutDown() {}
}

const win = new Windows();

win.electric();
console.log(win.signal());
win.gnd();

console.log("---------------");

class Mac implements USBTypeC {
  electric(): void {
    console.log("Mac electric");
  }
  signal(): number {
    console.log("Mac signal");
    return 100;
  }
  gnd(): void {
    console.log("Mac gnd");
  }
  // Mac 自身的函数
  playVoide() {}
}

const mac = new Mac();

mac.electric();
console.log(mac.signal());
mac.gnd();

console.log("---------------");

class HUAWEI implements USBTypeC {
  electric(): void {
    console.log("HUAWEI electric");
  }
  signal(): number {
    console.log("HUAWEI signal");
    return 50;
  }
  gnd(): void {
    console.log("HUAWEI gnd");
  }
  // ...
}

const hw = new HUAWEI();

hw.electric();
console.log(hw.signal());
hw.gnd();
```
