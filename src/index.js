"use strict";
exports.__esModule = true;
var path = require("path");
var jsindex_1 = require("./jsindex");
exports.sum = function (a, b) { return a + b; };
console.log(path.resolve(__dirname, "../"));
console.log(jsindex_1.sumAndAdd(1, 2, 3));
