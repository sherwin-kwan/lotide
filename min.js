const min = function(numbers) {
  // Write code here that returns the smallest value in numbers
  // Not going to check for correct data types. So this function will also find the first in alphabetical order if fed a number of strings.
  if (numbers.length === 0) {
    return undefined;
  }
  let min = numbers[0];
  for (let number of numbers) {
    if (number < min) {
      min = number;
    }
  }
  return min;
};

module.exports = min;