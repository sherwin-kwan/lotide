// TESTS

const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

const testArray = [1, 2, [3, 4], [5, 6], 7, 8, [9, 10]];
const testArray2 = [];
const testArray3 = [1, [2, [3, [4, 5]]], 6, [7, [8, [9, 10]]]];
const testArray4 = ['a', 'b', ['c', 'd', 'e'], 'f', ['g', 'h', 'i', 'j']];

assertArraysEqual(flatten(testArray), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(flatten(testArray2), []);
assertArraysEqual(flatten(testArray3), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(flatten(testArray4), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
