'use strict';
const eqObjects = require('./eqObjects')
const inspect = require('util').inspect;

// assertEqual now handles objects and primitives
const assertEqual = (actual, expected) => {
  if (typeof expected === 'object') {
    if (eqObjects(actual, expected)) {
      console.log(`\u2705 Assertion passed: ${inspect(actual)} matches ${inspect(expected)}`);
    } else {
      console.log(`\u274C Assertion failed: Actual output was ${inspect(actual)}, expected ${inspect(expected)}`);
    }
  } else if (actual === expected) {
    console.log(`\u2705 Assertion passed: ${actual} matches ${expected}`);
  } else {
    console.log(`\u274C Assertion failed: Actual output was ${actual}, expected ${expected}`);
  }
};

module.exports = assertEqual;

// TEST CODE
// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));