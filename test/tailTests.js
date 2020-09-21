const tail = require('../tail');
const assert = require('chai').assert;

const words = ['Hello', 'Lighthouse', 'Labs']
const result = tail(words);
const expected = (['Lighthouse', 'Labs']);

describe('tail', () => {
  it('Hello Lighthouse Labs should become Lighthouse Labs', () => {
    assert.deepEqual(result, expected);
  }),
  it('Original array should still have 3 words', () => {
    assert.strictEqual(words.length, 3);
  })
});
