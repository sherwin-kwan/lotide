const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3, 4], [1, 2, 3]);
assertArraysEqual([1, 2.5, 3], [1, 2, 3]);
assertArraysEqual([1, "2", 3], [1, 2, 3]);
assertArraysEqual(1, [1, 2, 3]);
assertArraysEqual([],[]);
