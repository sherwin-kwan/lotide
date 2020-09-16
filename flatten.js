import assertArraysEqual from './assertArraysEqual.js';

// Steps:
// 1. Create a flattened array to output
// 2. Loop through array
// 3. If it's already a scalar, just push it to the output array
// 4. If it's an array, push its elements to the output array

const testArray = [1, 2, [3, 4], [5, 6], 7, 8, [9, 10]];
const testArray2 = [];
const testArray3 = [1, [2, [3, [4, 5]]], 6, [7, [8, [9, 10]]]];
const testArray4 = ['a', 'b', ['c', 'd', 'e'], 'f', ['g', 'h', 'i', 'j']];

const flatten = (arr) => {
  let outputArray = [];
  for (let elem of arr) {
    if (Array.isArray(elem)) {
      // Since it's a stretch project, might as well put in recursion so it works for deeper arrays
      // OPTION 1: (uncomment next four lines)
      // const nextArray = flatten(elem); 
      // for (let nextElem of nextArray) {
      //   outputArray.push(nextElem);
      // }
      // Alternatively, you can use the spread operator to convert the returned array into a series of scalars
      // Example: if flatten(elem) = [3, 4, 5];
      // Then: ...flatten(elem) = 3, 4, 5; 
      // OPTION 2: (uncomment next line)
      outputArray.push(...flatten(elem));
    } else {
      outputArray.push(elem);
    }
  }
  return outputArray;
};

assertArraysEqual(flatten(testArray), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(flatten(testArray2), []);
assertArraysEqual(flatten(testArray3), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(flatten(testArray4), ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
