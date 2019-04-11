"use strict";

var _module = _interopRequireDefault(require("./module1"));

var _module2 = require("./module2");

var _module3 = require("./module3");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//引入默认暴露
//引入统一暴露
//引入分别暴露
console.log((0, _module["default"])(2, 3));
console.log((0, _module2.count)(3, 2));
console.log((0, _module3.sum)(1, 2, 3, 4));