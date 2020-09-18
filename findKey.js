import assertEqual from './assertEqual.js';

const findKey = (obj, pred) => {
  for (let key of Object.keys(obj)) {
    if (pred(obj[key])) return key;
  }
  return undefined;
}


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKey(bestTVShowsByGenre, e => e === "The Wire"), "drama");
assertEqual(findKey(bestTVShowsByGenre, e => e === "That '70s Show"), undefined);
assertEqual(findKey(bestTVShowsByGenre, e => e.length > 12), "comedy");

assertEqual(
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
  }, x => x.stars === 2), "noma");
  
