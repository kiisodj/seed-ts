"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("sum function works", () => {
    it("is able to add two numbers", () => {
        const four = index_1.sum(1, 3);
        expect(four).toEqual(4);
    });
});
