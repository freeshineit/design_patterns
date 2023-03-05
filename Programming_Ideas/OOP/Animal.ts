// OOP

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

  eat() {
    console.log(`${this.name} eating`);
  }

  run() {
    console.log(`${this.name} running`);
  }

  live() {
    console.log(`${this.name} living`);
  }

  public getName() {
    return this.name;
  }

  public getAge() {
    return this.age;
  }

  public setName(name: string) {
    this.name = name;
  }

  public setAge(age: number) {
    this.age = age;
  }
}

export default Animal;
