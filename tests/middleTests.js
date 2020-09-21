const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
assertArraysEqual(middle(['this',`sentence's`,'middle','word','is']), ['middle']);
assertArraysEqual(middle(['this',`sentence's`,'two', 'middle','words','are']), ['two', 'middle']);
assertArraysEqual(middle(['this should return','an empty array']), []);
assertArraysEqual(middle([`this should return an empty array`]), []);

