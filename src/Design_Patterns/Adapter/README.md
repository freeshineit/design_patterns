# 适配器模式

## 定义

[适配器模式](https://zh.wikipedia.org/wiki/%E9%80%82%E9%85%8D%E5%99%A8%E6%A8%A1%E5%BC%8F)（英语：adapter pattern）有时候也称包装样式或者包装（英语：wrapper）。将一个类的接口转接成用户所期待的。一个适配使得因接口不兼容而不能在一起工作的类能在一起工作，做法是将类自己的接口包裹在一个已存在的类中。

## 使用场景

- 将一个类的接口转换成客户希望的另外一个接口。适配器模式使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

- 有动机地修改一个正常运行的系统的接口，这时应该考虑使用适配器模式。

- 旧接口封装

- vue computer

## 实现

```ts
class Voltage {
  // 110v 电压
  voltage: number = 110;

  getVoltage(): number {
    console.log("110v电压");
    return this.voltage;
  }
}

// 适配器
class Adapter {
  // 把110v电压转为220v
  getVoltage(voltage: Voltage): number {
    console.log("把110v电压 ===> 220v");
    return voltage.getVoltage() * 2;
  }
}

const voltage = new Voltage();
const adapter = new Adapter();

console.log(adapter.getVoltage(voltage) + "v");
```

## ES5 实现

> yarn run build

> node dist/Design_Patterns/Adapter/index.js
