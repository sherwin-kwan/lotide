const assert = require('chai').assert;
const without = require('../without');

// TEST CODE
describe('without', () => {
  it('removing 1 from 1, 2, 3 should be 1,2', () => {
    assert.deepEqual( without([1, 2, 3], [1]), [2,3]);

  }),
  it('numbers and strings should be treated separately', () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

  }),
  it('if a value in the without argument is repeated, all occurrences should be removed', () => {
    assert.deepEqual(without([15, 2, 5, 2, 3, 4, 5, 222, 222, 222, 222], [2,3,4,5,15]), [222,222,222,222]);

  }),
  it('Empty remove argument should leave array untouched', () => {
    assert.deepEqual(without([1,2,3], []), [1,2,3]);
  })
})