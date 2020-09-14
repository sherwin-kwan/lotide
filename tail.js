import assertEqual from './assertEqual.js';

const tail = (arr) => {
  if (Array.isArray(arr)) {
    return arr.slice(1);
  } else {
    console.log(`Function 'tail' argument should be an array.`);
  }
};

// TEST CODE

const words = ['Hello', 'Lighthouse', 'Labs']
const result = tail(words);
const expected = (['Lighthouse', 'Labs']);

assertEqual(result.length, expected.length); 
for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], expected[i]);
};
assertEqual(words.length, 3);
