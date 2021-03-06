
// INSTRUCTIONS
// This code uses a helper function to determine if two values are equal after checking that the keys match.
// Original version (V1) works for arrays and primitives only (calling eqArrays to compare two arrays)
// Stretch version (V2) works for objects too (by calling eqObjects itself to compare two objects. Note that arrays are a special type of object so the code still
// works for comparing arrays)
// You may switch between V1 and V2 by changing line 32.
// Disclaimer: This only compares key-value pairs for objects. Objects are considered identical if they have the same key-value pairs.

const assertEqual = require('../assertEqual.js'); // Only used for testing
const eqArrays = require('../eqArrays.js');
const eqObjects = require('../eqObjects.js');

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
