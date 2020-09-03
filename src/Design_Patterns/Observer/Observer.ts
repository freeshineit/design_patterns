// 本实例参考Java
// https://www.runoob.com/design-pattern/observer-pattern.html
class Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  getState() {
    return this.state;
  }

  setState(state: number) {
    this.state = state;
    this.notifyAllObservers();
  }

  attach(observer: Observer) {
    this.observers.push(observer);
  }

  notifyAllObservers() {
    this.observers.forEach((observer: Observer) => {
      observer.update();
    });
  }
}

// 抽象类
abstract class Observer {
  protected abstract subject: Subject;
  public abstract update(): void;
}

class BinaryObserver extends Observer {
  protected subject: Subject;

  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.attach(this);
  }

  public update(): void {
    console.log(
      `${BinaryObserver.name} update get state ${this.subject.getState()}`
    );
  }
}

class OctalObserver extends Observer {
  protected subject: Subject;

  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.attach(this);
  }

  public update(): void {
    console.log(
      `${OctalObserver.name} update get state ${this.subject.getState()}`
    );
  }
}

class HexaObserver extends Observer {
  protected subject: Subject;

  constructor(subject: Subject) {
    super();
    this.subject = subject;
    this.subject.attach(this);
  }

  public update(): void {
    console.log(
      `${HexaObserver.name} update get state ${this.subject.getState()}`
    );
  }
}

export { Subject, BinaryObserver, OctalObserver, HexaObserver };
