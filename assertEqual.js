'use strict';

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`\u2705 Assertion passed: ${actual} matches ${expected}`);
  } else {
    console.log(`\u274C Assertion failed: Actual output was ${actual}, expected ${expected}`);
  }
};

export default assertEqual;

// TEST CODE
// console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
// console.log(assertEqual(1, 1));