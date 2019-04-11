"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sum = sum;

//分别暴露
function sum() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce(function (prev, curr) {
    return prev + curr;
  }, 0);
}