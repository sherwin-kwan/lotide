const eqObjects = require('./eqObjects.js');
const inspect = require('util').inspect;

const assertObjectsEqual = (actual, expected) => {
  if (eqObjects(actual, expected)) {
    console.log(`\u2705 Assertion passed: ${inspect(actual)} matches ${inspect(expected)}`);
  } else {
    console.log(`\u274C Assertion failed: Actual output was ${JSON.stringify(actual)}, expected ${JSON.stringify(expected)}`);
  }
};

module.exports = assertObjectsEqual;
