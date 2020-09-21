const max = (arr) => {
  if (arr.length == 0) {
    return [undefined, -1];
  }
  let max = arr[0]; let maxIndex;
  arr.forEach((num, index) => {
    if (num > max) {
      max = num;
      maxIndex = index;
    }
  });
  return [max, maxIndex];
}

module.exports = max;