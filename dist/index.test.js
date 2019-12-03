"use strict";

var _index = require("./index");

describe("test suite", function () {
  it("runs the test suite", function () {
    expect(true).toBeTruthy();
  });
});
describe("imported function", function () {
  it("can test an imported function", function () {
    var four = (0, _index.sum)(1, 3);
    expect(four).toEqual(4);
    expect(four).not.toEqual(5);
  });
});