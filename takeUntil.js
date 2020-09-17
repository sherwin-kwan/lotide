const takeUntil = (arr, pred) => {
  let results = new Array;
  arr.forEach(e => {
    if (!pred(e)) results.push(e);
  });
  return results;
}

console.log(takeUntil([1,2,3,4,5], e => e > 3));

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

