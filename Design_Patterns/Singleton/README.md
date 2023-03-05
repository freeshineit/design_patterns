# 单例模式

## 定义

[单例模式](https://zh.wikipedia.org/wiki/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F)，也叫单子模式，是一种常用的软件设计模式，属于创建型模式的一种。在应用这个模式时，单例对象的类必须保证只有一个实例存在。许多时候整个系统只需要拥有一个的全局对象，这样有利于我们协调系统整体的行为。比如在某个服务器程序中，该服务器的配置信息存放在一个文件中，这些配置数据由一个单例对象统一读取，然后服务进程中的其他对象再通过这个单例对象获取这些配置信息。这种方式简化了在复杂环境下的配置管理。

## 使用场景

在计算机系统中，线程池、缓存、日志对象、对话框、打印机、显卡的驱动程序对象常被设计成单例。这些应用都或多或少具有资源管理器的功能。每台计算机可以有若干个打印机，但只能有一个 Printer Spooler，以避免两个打印作业同时输出到打印机中。每台计算机可以有若干通信端口，系统应当集中管理这些通信端口，以避免一个通信端口同时被两个请求同时调用。总之，选择单例模式就是为了避免不一致状态，避免政出多头。

## 实现

```ts
// 饿汉式单例是指在方法调用前，实例就已经创建好了
// 线程安全不需要线程同步
// 不能传递参数
class HungrySingleton {
  static istance: HungrySingleton = new HungrySingleton();

  // 使用ECMA 的staitc 新特性
  // 该方法只可以使用类名访问
  static getInstance() {
    return HungrySingleton.istance;
  }

  constructor() {}

  getName() {
    return "HungrySingleton";
  }
}

export default HungrySingleton;
```

```ts
// 懒汉式单例是指在方法调用获取实例时才创建实例
class Singleton {
  static istance: Singleton;

  private name: string;

  // 使用ECMA 的staitc 新特性
  // 该方法只可以使用类名访问
  static getInstance(name: string) {
    if (!Singleton.istance) {
      Singleton.istance = new Singleton(name);
    }
    return Singleton.istance;
  }

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}

export default Singleton;
```

## ES5 实现

> yarn run build

> node dist/Design_Patterns/Singleton/index.js
