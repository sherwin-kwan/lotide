
// This function returns an object showing how many of each item in itemsToCount appears in allItems

const assertEqual = require('./assertEqual.js');

// Plan:
// Iterate through elements of allItems
// For each element, see if it appears in itemsToCount
// - if yes, and it's the first time we've seen this element, create a key in the output object and assign it a count of 1
// - if yes, and the output object already has it as a key, increase the count by 1
// - if not, skip it

const countOnly = (allItems /* array */, itemsToCount /* object */) => {
  let output = new Object;
  for (let item of allItems) {
    if (itemsToCount[item]) {
      //Note: if true, we want to count the item. If false or non-existent, we don't.
      if (output[item]) {
        output[item]++;
      } else {
        output[item] = 1;
      }
    }
    // No 'else' needed here. If the item isn't ture in itemsToCount, we do nothing
  }
  return output;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
