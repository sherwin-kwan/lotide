const chai = require('chai');
const assert = chai.assert;

const arr1 = [1,2,3];
const arr2 = [1,2,3];

console.log(assert.deepEqual(arr1, arr2));
