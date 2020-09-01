// 工厂方法
// 工厂方法模式使用继承自抽象工厂角色的多个子类来代替简单工厂模式中的“上帝类”
abstract class Car {
  abstract show(): void;
  abstract name: string;
}

interface Factory {
  manufacture(): Car;
}

class BMW extends Car {
  name = "BMW320";

  show(): void {
    console.log("show BMW");
  }
}

class Benz extends Car {
  name = "Benz";

  show(): void {
    console.log("show Benz");
  }
}

class FactoryMethodBMW implements Factory {
  manufacture(): BMW {
    return new BMW();
  }
}
class FactoryMethodBenz implements Factory {
  manufacture(): Benz {
    return new Benz();
  }
}

export { FactoryMethodBMW, FactoryMethodBenz, BMW, Benz };
