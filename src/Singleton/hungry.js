"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 饿汉式单例是指在方法调用前，实例就已经创建好了
// 线程安全不需要线程同步
// 不能传递参数
var HungrySingleton = /** @class */ (function () {
    function HungrySingleton() {
    }
    // 使用ECMA 的staitc 新特性
    // 该方法只可以使用类名访问
    HungrySingleton.getInstance = function () {
        return HungrySingleton.istance;
    };
    HungrySingleton.prototype.getName = function () {
        return "HungrySingleton";
    };
    HungrySingleton.istance = new HungrySingleton();
    return HungrySingleton;
}());
exports.default = HungrySingleton;
