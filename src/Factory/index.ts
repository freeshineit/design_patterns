import SimpleFactory, { BMW320, BMW523 } from "./SimpleFactory";

const simpleFactory = new SimpleFactory();

const bmw320 = simpleFactory.createBMW(320);
console.log(bmw320);
(bmw320 as BMW320).BMW320();
const bmw523 = simpleFactory.createBMW(523);
console.log(bmw523);
(bmw523 as BMW523).BMW523();
const bmw100 = simpleFactory.createBMW(100);
console.log(bmw100);
