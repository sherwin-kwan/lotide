
// INSTRUCTIONS
// This code uses a helper function to determine if two values are equal after checking that the keys match.
// Original version (V1) works for arrays and primitives only (calling eqArrays to compare two arrays)
// Stretch version (V2) works for objects too (by calling eqObjects itself to compare two objects. Note that arrays are a special type of object so the code still
// works for comparing arrays)
// You may switch between V1 and V2 by changing line 32.
// Disclaimer: This only compares key-value pairs for objects. Objects are considered identical if they have the same key-value pairs.

import assertEqual from './assertEqual.js'; // Only used for testing
import eqArrays from './eqArrays.js';

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

export default eqObjects;

// TEST CODE

console.log(`\nBegin testing with objects that only contain primitives`);
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

console.log(`\nNow checking if arrays within objects work`);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

console.log(`\nNow checking if objects within objects work`); // This will only work if V2 is used

const efgh = { e: 1, f: { g: 1, h: 2 } };
const efgh2 = { f: { g: 1, h: 2 }, e: 1 };
const eghf = { e: { g: 1, h: 2 }, f: 1 };

assertEqual(eqObjects(efgh, efgh2), true);
assertEqual(eqObjects(efgh, eghf), false);

// Trying to figure out which other kinds of things in Javascript are objects:
// ARRAYS

console.log('\nWait, I can use eqObjects to compare arrays and it actually works!!?');
assertEqual(eqObjects([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqObjects([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqObjects([1, 2.5, 3], [1, 2, 3]), false);
assertEqual(eqObjects([1, "2", 3], [1, 2, 3]), false);
assertEqual(eqObjects(1, [1, 2, 3]), false);
assertEqual(eqObjects([], []), true);

// STRINGS

console.log(`\nStrings are primitives, surely they can't be objects too, right?`);
assertEqual(eqObjects('abc','abc'), true); // Actually works. Strings can apparently be converted into objects with key-value pairs.
assertEqual(eqObjects('a new string','a new string'), true);
assertEqual(eqObjects('misspellings','mispellings'), false);

// NUMBERS

console.log(`\nHow about numbers? Are they objects?`);
assertEqual(eqObjects(1 + 1, 2), true);
assertEqual(eqObjects(2 + 2, 22), false); // Returns True. Turns out, numbers can't be converted into objects with key-value pairs

// GARBAGE IN, GARBAGE OUT
console.log(`\nOK now I'm bored, let's play stupid games.`);
assertEqual(eqObjects(new Date('2020-01-01'), Math), false); // Actually, it's True. Neither Date nor Math objects have any keys/values.
assertEqual(eqObjects(new Error('You fail!'), function alwaysPasses() { return true; }), false); // Ditto for Errors and Functions.
