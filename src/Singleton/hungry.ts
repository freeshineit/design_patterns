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
