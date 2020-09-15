import assertEqual from './assertEqual.js';

const eqArrays =  /* both inputs are arrays */ (actual, expected) => {
  if (actual.length !== expected.length) {
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }
  // If both the length of the two arrays and each element within them matches
  return true;
};

export default eqArrays;
/* TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2.5, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, "2", 3], [1, 2, 3]), false);
assertEqual(eqArrays(1, [1, 2, 3]), false);
assertEqual(eqArrays([],[]), true);
 */