abstract class BMW {
  abstract BMW(): void;
  abstract name: string;
}

class BMW320 extends BMW {
  name = "BMW320";

  BMW(): void {
    console.log("制造-->BMW320");
  }
}

class BMW523 extends BMW {
  name = "BMW523";
  BMW(): void {
    console.log("制造-->BMW523");
  }
}

// 简单工厂模式 又称静态工厂模式
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

export { BMW320, BMW523 };

export default SimpleFactory;
