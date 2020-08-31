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
