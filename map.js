import assertEqual from './assertEqual.js';

const words = ['fourscore', 'and', 'seven', 'years', 'ago'];
const nums = [1, 2, 3, 4, 5];

const map = (arr, cb) => {
  let results = new Array;
  for (let elem of arr) {
    results.push(cb(elem));
  };
  return results;
};

const results1 = map(words, elem => elem[0]);
let exp1 = ['f','a','s','y','a'];
assertEqual(results1,exp1);

const squares = map(nums, elem => elem * elem);
let exp2 = [1, 4, 9, 16, 25];
assertEqual(squares, exp2);

const Borg = map(nums, elem => 'Borg');
let exp3 = ['Borg','Borg','Borg','Borg','Borg'];
assertEqual(Borg, exp3);
