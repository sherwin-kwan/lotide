import eqObjects from './eqObjects.js';
import { inspect } from 'util';

const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual, expected)) {
    console.log(`\u2705 Assertion passed: ${inspect(actual)} matches ${inspect(expected)}`);
  } else {
    console.log(`\u274C Assertion failed: Actual output was ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
  }
};

export default assertObjectsEqual;

// TEST CODE
assertObjectsEqual([1, 2, 3], [1, 2, 3]);
assertObjectsEqual([1, 2, 3, 4], [1, 2, 3]);
assertObjectsEqual([1, "2", 3], [1, 2, 3]);
assertObjectsEqual([],[]);
assertObjectsEqual({a: 1, b: 2},{a: 1, b: 2});
assertObjectsEqual({a: 1, b: 2},{b: 2, a: 1});
assertObjectsEqual({a: 1},{a: 2});

// Expected: true, false, false, true, true, true, false