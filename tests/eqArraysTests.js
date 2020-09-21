const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2.5, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), false);
assertEqual(eqArrays(1, [1, 2, 3]), false);
assertEqual(eqArrays([],[]), true);
assertEqual(eqArrays([1, [2, [3, [4, 5]]]], [1, [2, [3, [4, 5]]]]), true)