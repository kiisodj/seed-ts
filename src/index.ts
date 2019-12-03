import * as path from "path";
import { sumAndAdd, wellDocdSumAndAdd } from "./jsindex";

export const sum = (a: number, b: number): number => a + b;

console.log(path.resolve(__dirname, "../"));

console.log(sumAndAdd(1, 2, 3));
