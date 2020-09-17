import assertEqual from './assertEqual.js';

const findKeyByValue = (obj, valueQuery) => {
  for (let key of Object.keys(obj)) {
    if (obj[key] === valueQuery) {
      return key;
    }
  }
  return undefined;
}


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
