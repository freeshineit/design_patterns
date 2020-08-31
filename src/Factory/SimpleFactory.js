"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BMW523 = exports.BMW320 = void 0;
var BMW = /** @class */ (function () {
    function BMW() {
    }
    BMW.prototype.BMW = function () { };
    return BMW;
}());
var BMW320 = /** @class */ (function (_super) {
    __extends(BMW320, _super);
    function BMW320() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "BMW320";
        return _this;
    }
    BMW320.prototype.BMW320 = function () {
        console.log("制造-->BMW320");
    };
    return BMW320;
}(BMW));
exports.BMW320 = BMW320;
var BMW523 = /** @class */ (function (_super) {
    __extends(BMW523, _super);
    function BMW523() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "BMW523";
        return _this;
    }
    BMW523.prototype.BMW523 = function () {
        console.log("制造-->BMW523");
    };
    return BMW523;
}(BMW));
exports.BMW523 = BMW523;
// 简单工厂模式 又称静态工厂模式
var SimpleFactory = /** @class */ (function () {
    function SimpleFactory() {
    }
    SimpleFactory.prototype.createBMW = function (type) {
        switch (type) {
            case 320:
                return new BMW320();
            case 523:
                return new BMW523();
            default:
                break;
        }
        return null;
    };
    return SimpleFactory;
}());
exports.default = SimpleFactory;
