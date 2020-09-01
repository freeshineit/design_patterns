import SimpleFactory, { BMW320, BMW523 } from "./SimpleFactory";

import {
  FactoryMethodBMW,
  FactoryMethodBenz,
  BMW,
  Benz,
} from "./FactoryMethod";

import { FancyDocumentCreator, ModernDocumentCreator } from "./AbstractFactory";

console.log("-------------------简单工厂模式-------------------------");
const simpleFactory = new SimpleFactory();

const bmw320 = simpleFactory.createBMW(320);
console.log(bmw320);
(bmw320 as BMW320).BMW320();
const bmw523 = simpleFactory.createBMW(523);
console.log(bmw523);
(bmw523 as BMW523).BMW523();
const bmw100 = simpleFactory.createBMW(100);
console.log(bmw100);

console.log("---------------------工厂方法模式------------------------");

const fbmw = new FactoryMethodBMW();

console.log(fbmw);
const bmw: BMW = fbmw.manufacture();
console.log("制造 BMW ==>", bmw);
console.log("BMW name: ", bmw.name);
bmw.show();

console.log("---------------------------------------------");

const fbenz = new FactoryMethodBenz();

console.log(fbenz);
const benz: Benz = fbenz.manufacture();
console.log("制造 Benz ==>", benz);
console.log("BMW name: ", benz.name);
benz.show();

console.log("-------------------抽象工厂模式--------------------------");

const fancyDocumentCreator = new FancyDocumentCreator();

console.log(fancyDocumentCreator);

const fancyLetter = fancyDocumentCreator.createLetter();
console.log(fancyLetter, fancyLetter.content, fancyLetter.postmark);

const fancyResume = fancyDocumentCreator.createResume();
console.log(fancyResume, fancyResume.content);

const modernDocumentCreator = new ModernDocumentCreator();

console.log(fancyDocumentCreator);

const modernLetter = modernDocumentCreator.createLetter();
console.log(modernLetter, modernLetter.content, modernLetter.postmark);

const modernResume = modernDocumentCreator.createResume();
console.log(modernResume, modernResume.content);
