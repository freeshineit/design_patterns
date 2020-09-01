# 工厂模式

## 定义

[工厂方法模式](https://zh.wikipedia.org/wiki/%E5%B7%A5%E5%8E%82%E6%96%B9%E6%B3%95)（英语：Factory method pattern）是一种实现了“工厂”概念的面向对象设计模式。就像其他创建型模式一样，它也是处理在不指定对象具体类型的情况下创建对象的问题。工厂方法模式的实质是“定义一个创建对象的接口，但让实现这个接口的类来决定实例化哪个类。工厂方法让类的实例化推迟到子类中进行。”

创建一个对象常常需要复杂的过程，所以不适合包含在一个复合对象中。创建对象可能会导致大量的重复代码，可能会需要复合对象访问不到的信息，也可能提供不了足够级别的抽象，还可能并不是复合对象概念的一部分。工厂方法模式通过定义一个单独的创建对象的方法来解决这些问题。由子类实现这个方法来创建具体类型的对象。

对象创建中的有些过程包括决定创建哪个对象、管理对象的生命周期，以及管理特定对象的创建和销毁的概念。

[抽象工厂模式](https://zh.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E5%B7%A5%E5%8E%82)（英语：Abstract factory pattern）是一种软件开发设计模式。抽象工厂模式提供了一种方式，可以将一组具有同一主题的单独的工厂封装起来。在正常使用中，客户端程序需要创建抽象工厂的具体实现，然后使用抽象工厂作为接口来创建这一主题的具体对象。客户端程序不需要知道（或关心）它从这些内部的工厂方法中获得对象的具体类型，因为客户端程序仅使用这些对象的通用接口。抽象工厂模式将一组对象的实现细节与他们的一般使用分离开来。

## 使用场景

- 对象的创建过程/实例化准备工作很复杂，需要初始化很多参数、查询数据库等。

- 类本身有好多子类，这些类的创建过程在业务中容易发生改变，或者对类的调用容易发生改变。

## 实现

```ts
// 简单工厂模式 又称静态工厂模式

abstract class BMW {
  public BMW() {}
  abstract name: string;
}

class BMW320 extends BMW {
  name = "BMW320";
  public BMW320() {
    console.log("制造-->BMW320");
  }
}

class BMW523 extends BMW {
  name = "BMW523";
  public BMW523() {
    console.log("制造-->BMW523");
  }
}

// 简单工厂模式 又称静态工厂模式
// 局限性：每新增一个类都需要修改判断逻辑代码。当我们的类很多时，这个工厂类会变得难以维护函数。
// 所以，简单工厂只适用于创建数量较少的类，类的创建逻辑不复杂时使用。
class SimpleFactory {
  public createBMW(type: number): BMW | null {
    switch (type) {
      case 320:
        return new BMW320();
      case 523:
        return new BMW523();
      default:
        break;
    }
    return null;
  }
}

export default SimpleFactory;
```

```ts

```

## ES5 实现

> yarn run build

> node dist/Factory/index.js
