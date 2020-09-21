const head = require('../head');
const chai = require('chai');
const assert = chai.assert;

describe('head', () => {
  it('returns 5 for [5,6,7]', () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  }),
  it('returns Hello for [Hello, Lighthouse, Labs]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  })
})

