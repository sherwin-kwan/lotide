const assert = require('chai').assert;
const result = require('../pythagoras.js');

const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

describe('pythagoras', () => {
  it('3 and 4 should make 5', () => {
    assert.strictEqual(result(input[0]), 5);
  }),
  it('12 and 5 should make 13', () => {
    assert.strictEqual(result(input[1]), 13);
  }),
  it('15 and 8 should make 17', () => {
    assert.strictEqual(result(input[2]), 17);
  })
})