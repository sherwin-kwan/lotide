import eqObjects from './eqObjects.js';

const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual, expected)) {
    console.log(`\u2705 Assertion passed: ${actual} matches ${expected}`);
  } else {
    console.log(`\u274C Assertion failed: Actual output was ${actual}, expected ${expected}`);
  }
};

export default assertObjectsEqual;

// TEST CODE
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
// assertArraysEqual([1, 2.5, 3], [1, 2, 3]);
// assertArraysEqual([1, "2", 3], [1, 2, 3]);
// assertArraysEqual(1, [1, 2, 3]);
// assertArraysEqual([],[]);
