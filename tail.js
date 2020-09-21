const assertEqual = require('./assertEqual.js');

const tail = (arr) => {
  if (Array.isArray(arr)) {
    return arr.slice(1);
  } else {
    console.log(`Function 'tail' argument should be an array.`);
  }
};

module.exports = tail;