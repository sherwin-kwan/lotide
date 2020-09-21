const middle = require('../middle');
const chai = require('chai');
const assert = chai.assert;

// TEST CODE
describe('middle', () => {
  it('This sentence\'s middle word should be middle', () => {
    assert.deepEqual(middle(['this', `sentence's`, 'middle', 'word', 'is']), ['middle']);
  }),
  it(`This sentence's two middle words should be two middle`, () => {
    assert.deepEqual(middle(['this', `sentence's`, 'two', 'middle', 'words', 'are']), ['two', 'middle']);
  }),
  it(`With two elements, it should return empty array`, () => {
    assert.deepEqual(middle(['this should return', 'an empty array']), []);
  }),
  it(`With one element, it should return empty array`, () => {
    assert.deepEqual(middle([`this should return an empty array`]), []);
  })
})
