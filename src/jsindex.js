// @ts-check
import {sum} from "./index";

export const sumAndAdd = (firstSum, secondSum, add) => {
    const summed = sum(firstSum, secondSum);

    return summed + add
}

/**
 * 
 * @param {number} first - Number to sum
 * @param {number} second - Number to sum
 * @param {number} add - Number to add to sum
 * @returns {number}
 */
export const wellDocdSumAndAdd = (first, second, add) => {
    const summed = sum(first, second);

    return summed + add
}



wellDocdSumAndAdd(1,2,10);

sumAndAdd(1, 2, 10);
