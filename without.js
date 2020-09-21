

// How to do it:
// Take each item in the source array
//    See if it appears in itemsToRemove. 
//      If yes, leave it; if not, copy it into a new array
// Return the new array

const without = (source, itemsToRemove) => {
  let culledArray = [];
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      culledArray.push(item);
    };
  };
  // console.log(`Source remains ${source}`); <-- Uncomment to test if the source array is modified or not
  return culledArray;
}

module.exports = without;