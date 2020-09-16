import assertArraysEqual from './assertArraysEqual.js';

const middle = (arr) => {
  if (!Array.isArray(arr)) {
    console.log(`Function 'middle' only takes arrays as arguments.`);
    return;
  };
  const length = arr.length;
  switch (length) {
    // For arrays shorter than three elements, middle returns an empty array
    case 0:
    case 1:
    case 2:
      return [];
    default:
    // Otherwise, the array returns an array with the middle element for odd-number length arrays,
    // and an array with the two middle elements for even-number length arrays.
      return (length % 2 === 0) ? [arr[length / 2 - 1], arr[length / 2]] : [arr[Math.floor(length / 2)]];
  }
}

// TEST CODE
assertArraysEqual(middle(['this',`sentence's`,'middle','word','is']), ['middle']);
assertArraysEqual(middle(['this',`sentence's`,'two', 'middle','words','are']), ['two', 'middle']);
assertArraysEqual(middle(['this should return','an empty array']), []);
assertArraysEqual(middle([`this should return an empty array`]), []);

