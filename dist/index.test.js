"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("test suite", () => {
    it("runs the test suite", () => {
        expect(true).toBeTruthy();
    });
});
describe("imported function", () => {
    it("can test an imported function", () => {
        const four = index_1.sum(1, 3);
        expect(four).toEqual(4);
        expect(four).not.toEqual(5);
    });
});
