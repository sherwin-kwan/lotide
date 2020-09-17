const countLetters = (str) => {
  let output = {};
  for (let char of str) {
    if (char.match(/\w/)) { // Should only match letters and numbers
      // Check if the character has already been counted at least once. If it has, add 1; otherwise, initialize it to 1
      output[char] = (output[char]) ? output[char] + 1 : 1;
    }
  }
  return output;
}

const expected = {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
}

console.log(countLetters('lighthouse labs'));
console.log(countLetters('lighthouse in the house'));
console.log(countLetters('the quick brown fox jumps over a lazy dog')); // Expected: This sentence should cause all 26 letters to appear as keys