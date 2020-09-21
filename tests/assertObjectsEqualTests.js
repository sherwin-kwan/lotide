const assertObjectsEqual = require('../assertObjectsEqual');

// TEST CODE
assertObjectsEqual([1, 2, 3], [1, 2, 3]);
assertObjectsEqual([1, 2, 3, 4], [1, 2, 3]);
assertObjectsEqual([1, "2", 3], [1, 2, 3]);
assertObjectsEqual([],[]);
assertObjectsEqual({a: 1, b: 2},{a: 1, b: 2});
assertObjectsEqual({a: 1, b: 2},{b: 2, a: 1});
assertObjectsEqual({a: 1},{a: 2});

// Expected: true, false, false, true, true, true, false