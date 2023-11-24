"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.value = void 0;
var _module = require("module");
var array = [1, 2, 3, 4, 5];
var sum = function sum() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return a + b;
};
sum(2, 3);
var world = 'World';
var message = "Hello, ".concat(name, "!");
var person = {
  name: 'John',
  age: 30
};
var name = person.name,
  age = person.age;
var value = exports.value = 42;
