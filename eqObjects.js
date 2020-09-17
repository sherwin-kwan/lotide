import assertEqual from './assertEqual.js';
import eqArrays from './eqArrays.js';

// ORIGINAL VERSION: Compares two objects containing arrays or primitives as values, to see if they are identical

const eqObjectsV1 = (actual, expected) => {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  // Splitting off the code to determine whether a particular key/value pair matches. Returns true if matches.
  function compareOneKeyValuePair(i) {
    if (actualKeys.includes(expectedKeys[i])) {
      // Determine whether the value is an array or a primitive
      if (Array.isArray(expected[expectedKeys[i]])) { // The expected value is an array
        return eqArrays(actual[expectedKeys[i]], expected[expectedKeys[i]]) // Just call eqArrays to compare two arrays
      }
      // If the value is a primitive, directly compare the values
      return actual[expectedKeys[i]] === expected[expectedKeys[i]];
    } else {
      return false; // the expected key is missing in the actual object 
    }
  };

  // Main code continues here
  if (actualKeys.length !== expectedKeys.length) { // first compare how many keys each object has
    return false;
  } else { // Next, iterate through the keys of expected and make sure that the key exists in the actual object and has the same value
    for (let i = 0; i < expectedKeys.length; i++) {
      if (compareOneKeyValuePair(i)) continue // If this particular key-value pair matches (returns true), try the next
      else return false; // A single key-value pair that doesn't match is enough to cause the comparison to fail
    }
  }
  // If both the length of the two objects and each key-value pair within them matches
  return true;
};

//
//
//
//
//
//
//
//
//
// VERSION 2: Attempting to use recursion to handle objects nested within objects
// This function calls itself if a value in an object is an object

const eqObjectsV2 = (actual, expected) => {
  const actualKeys = Object.keys(actual);
  const expectedKeys = Object.keys(expected);

  function compareOneKeyValuePair(i) {
    if (actualKeys.includes(expectedKeys[i])) {
      // Determine whether the value is an array or a primitive
      if (typeof expected[expectedKeys[i]] == 'object') { // The expected value is an array or object
        const expectedObject = expected[expectedKeys[i]];
        const actualObject = actual[expectedKeys[i]];
        return eqObjectsV2(actualObject, expectedObject);
      }
      // If the value is a primitive, directly compare the values
      return actual[expectedKeys[i]] === expected[expectedKeys[i]];
    } else {
      return false; // the expected key is missing in the actual object
    }
  };

  // Main code continues here
  if (actualKeys.length !== expectedKeys.length) { // first compare how many keys each object has
    return false;
  } else { // Next, iterate through the keys of expected and make sure that the key exists in the actual object and has the same value
    for (let i = 0; i < expectedKeys.length; i++) {
      if (compareOneKeyValuePair(i)) continue // If this particular key-value pair matches (returns true), try the next
      else return false; // A single key-value pair that doesn't match is enough to cause the comparison to fail
    }
  }
  // If both the length of the two objects and each key-value pair within them matches
  return true;
}
//
//
//
//
//
//
//
//
//

const eqObjects = eqObjectsV1; // change between V1 and V2 to toggle between 2 versions of the function

console.log(`\nBegin testing with objects that only contain primitives`);
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

console.log(`\nNOW CHECKING IF ARRAYS WORK`);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);

console.log(`\nNOW CHECKING IF OBJECTS WORK`);
const efgh = {e: 1, f: {g: 1, h: 2}};
const efgh2 = {f: {g: 1, h: 2}, e: 1};
const eghf = {e: {g: 1, h: 2}, f: 1};
assertEqual(eqObjects(efgh, efgh2), true);
assertEqual(eqObjects(efgh, eghf), false);

console.log('\nWait, I can use eqObjects to compare arrays and it actually works!!?');
assertEqual(eqObjects([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqObjects([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqObjects([1, 2.5, 3], [1, 2, 3]), false);
assertEqual(eqObjects([1, "2", 3], [1, 2, 3]), false);
assertEqual(eqObjects(1, [1, 2, 3]), false);
assertEqual(eqObjects([], []), true);