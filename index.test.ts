import { sum } from "./index";

describe("test suite", () => {
    it("runs the test suite", () => {
        expect(true).toBeTruthy();
    });
});

describe("imported function", () => {
    it("can test an imported function", () => {
        const four = sum(1, 3);
        expect(four).toEqual(4);
        expect(four).not.toEqual(5);
    });
});
