const assertArraysEqual = require('./assertArraysEqual.js');

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

module.exports = middle;