const takeUntil = (arr, pred) => {
  let results = new Array;
  for (let e of arr) {
    if (!pred(e)) results.push(e);
    else break;
  }
  return results;
};

module.exports = takeUntil;