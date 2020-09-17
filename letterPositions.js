const letterPositions = (str) => {
  if (typeof str !== 'string') {
    console.log('Please enter a string');
    return;
  }
  let output = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char.match(/\w/)) { // Should only match letters and numbers
      // Check if the character has already been counted at least once. If it has, push the new index to the array;
      // otherwise, initialize it with the current index
      if (output[char]) {
        output[char].push(i);
      } else {
        output[char] = [i];
      }
    }
  }
  return output;
}

/* Version that doesn't work

const letterPositions = (str) => {
  let output = {};
  for (let char of str) {
    if (char.match(/\w/)) { // Should only match letters and numbers
      // Check if the character has already been counted at least once. If it has, add 1; otherwise, initialize it to 1
      if (output[char]) {
        output[char].push ( WHAT IS THE INDEX? )
      } else {
        output[char] = INDEX????
      }
    }
  }
  return output;
}
*/

console.log(letterPositions('lighthouse labs'));
console.log(letterPositions('lighthouse in the house'));
console.log(letterPositions('the quick brown fox jumps over a lazy dog')); // Expected: This sentence should cause all 26 letters to appear as keys
console.log(letterPositions(''));
console.log(letterPositions([3,4,5])); // Not a string, should show the enter-a-string message