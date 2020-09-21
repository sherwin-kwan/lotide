const tail = require('../tail');
const assertEqual = require('../assertEqual');

const words = ['Hello', 'Lighthouse', 'Labs']
const result = tail(words);
const expected = (['Lighthouse', 'Labs']);

assertEqual(result.length, expected.length); 
for (let i = 0; i < result.length; i++) {
  assertEqual(result[i], expected[i]);
};
assertEqual(words.length, 3);