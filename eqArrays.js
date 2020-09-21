const assertEqual = require('./assertEqual.js');

const eqArrays =  /* both inputs are arrays */ (actual, expected) => {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < expected.length; i++) {
      if (Array.isArray(expected[i])) {
        if (!Array.isArray(actual[i]) || !eqArrays(actual[i], expected[i])) {
          // For each nested array element in the expected array, if the actual array doesn't hvae a nested array at the same index,
          // or the nested arrays don't match, the test fails 
          return false;
        }
      } else if (actual[i] !== expected[i]) {
        // If the element is a primitive, comparing normally works
        return false;
      }
    }
  }
  // If both the length of the two arrays and each element within them matches
  return true;
};

module.exports = eqArrays;

 