
// INSTRUCTIONS
// This code uses a helper function to determine if two values are equal after checking that the keys match.
// Original version (V1) works for arrays and primitives only (calling eqArrays to compare two arrays)
// Stretch version (V2) works for objects too (by calling eqObjects itself to compare two objects. Note that arrays are a special type of object so the code still
// works for comparing arrays)
// You may switch between V1 and V2 by changing line 32.
// See: './eqObjectsTests.js' to have fun with these functions

const assertEqual = require('./assertEqual.js'); // Only used for testing
const eqArrays = require('./eqArrays.js');

//
// ORIGINAL VERSION: Handles arrays and primitives. Don't use for objects.
//
const compareValuesV1 = (value1, value2) => {
  if (Array.isArray(value2)) { // The expected value is an array
    return eqArrays(value1, value2) // Just call eqArrays to compare two arrays
  }
  // If the value is a primitive, directly compare the values
  return value1 === value2;
}

//
// STRETCH VERSION: Uses recursion, handles all objects (including arrays) and primitives.
//
const compareValuesV2 = (value1, value2) => {
  // Determine whether the value is an object or a primitive
  if (typeof value2 == 'object') { // The expected value is an array or object, so call the main eqObjects function recursively
    return eqObjects(value1, value2);
  }
  // If the value is a primitive, directly compare the values
  return value1 === value2;
};

const compareValues = compareValuesV2; // change between V1 and V2 to toggle between 2 versions of the helper function

//
// MAIN FUNCTION
//

const eqObjects = (actual, expected) => {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);
  if (actualKeys.length !== expectedKeys.length) { // first compare how many keys each object has, if it's not the same, easy fail
    return false;
  } else {
    for (let i = 0; i < expectedKeys.length; i++) {
      // Next, iterate through the keys of expected, check if the key matches a key of actual, AND they have the same value
      // a) First condition checks if the key exists in both expected and actual
      // b) Second condition calls the compareValues function (line 32 determines if it's V1 or V2) to check if the keys have the same value
      if (actualKeys.includes(expectedKeys[i]) && compareValues(actual[expectedKeys[i]], expected[expectedKeys[i]])) continue
      else return false;
    }
    // If both the length of the two objects and every key-value pair within them matches
    return true;
  };
}

module.exports = eqObjects;
