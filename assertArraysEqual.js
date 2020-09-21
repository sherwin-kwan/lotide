const eqArrays = require('./eqArrays.js');

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected)) {
    console.log(`\u2705 Assertion passed: ${actual} matches ${expected}`);
  } else {
    console.log(`\u274C Assertion failed: Actual output was ${actual}, expected ${expected}`);
  }
};

module.exports = assertArraysEqual;

