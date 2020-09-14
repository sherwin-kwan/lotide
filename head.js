import assertEqual from './assertEqual.js';

const head = (arr) => {
  if (Array.isArray(arr)) {
    return arr[0];
  } else {
    console.log(`Function 'head' argument should be an array.`);
  }
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
