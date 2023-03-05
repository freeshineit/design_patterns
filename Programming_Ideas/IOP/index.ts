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
