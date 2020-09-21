const assertEqual = require('./assertEqual.js');

const head = (arr) => {
  if (Array.isArray(arr)) {
    return arr[0];
  } else {
    console.log(`Function 'head' argument should be an array.`);
  }
};

module.exports = head;