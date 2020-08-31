"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lazy_1 = __importDefault(require("./lazy"));
var hungry_1 = __importDefault(require("./hungry"));
function start() {
    console.log("-------------------饿汉模式------------------");
    var ins1 = hungry_1.default.getInstance();
    console.log(ins1, ins1.getName());
    var ins2 = hungry_1.default.getInstance();
    console.log(ins2, ins1.getName());
    console.log("instance1 === instance2: ", ins1 === ins2);
    console.log("-------------------懒汉模式------------------");
    var instance1 = lazy_1.default.getInstance("SHINE SHAO");
    console.log(instance1, instance1.getName());
    var instance2 = lazy_1.default.getInstance("FREESHINE");
    console.log(instance2, instance2.getName());
    console.log("instance1 === instance2: ", instance1 === instance2);
}
start();
