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
