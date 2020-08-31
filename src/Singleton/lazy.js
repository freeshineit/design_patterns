"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 懒汉式单例是指在方法调用获取实例时才创建实例
var Singleton = /** @class */ (function () {
    function Singleton(name) {
        this.name = name;
    }
    // 使用ECMA 的staitc 新特性
    // 该方法只可以使用类名访问
    Singleton.getInstance = function (name) {
        if (!Singleton.istance) {
            Singleton.istance = new Singleton(name);
        }
        return Singleton.istance;
    };
    Singleton.prototype.getName = function () {
        return this.name;
    };
    Singleton.prototype.setName = function (name) {
        this.name = name;
    };
    return Singleton;
}());
exports.default = Singleton;
