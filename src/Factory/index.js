"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var SimpleFactory_1 = __importDefault(require("./SimpleFactory"));
var simpleFactory = new SimpleFactory_1.default();
var bmw320 = simpleFactory.createBMW(320);
console.log(bmw320);
bmw320.BMW320();
var bmw523 = simpleFactory.createBMW(523);
console.log(bmw523);
bmw523.BMW523();
var bmw100 = simpleFactory.createBMW(100);
console.log(bmw100);
