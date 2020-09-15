import eqArrays from './eqArrays.js';

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`\u2705 Assertion passed: ${actual} matches ${expected}`);
  } else {
    console.log(`\u274C Assertion failed: Actual output was ${actual}, expected ${expected}`);
  }
};

export default assertArraysEqual;
/* 
TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2.5, 3], [1, 2, 3]);
assertArraysEqual([1, "2", 3], [1, 2, 3]);
assertArraysEqual(1, [1, 2, 3]);
assertArraysEqual([],[]);
 */