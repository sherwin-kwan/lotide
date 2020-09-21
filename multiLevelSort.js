const students = [
  { id: 1, name: "bruce", age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex", age: 22 },
  { id: 4, name: "alex", age: 30 }
];
// Multi-type sort
// Function that sorts both numbers and strings
const multiTypeSort = (a, b) => {
  switch (typeof a) {
  case 'number':
    return (Number(a) < Number(b)) ? -1 : ((Number(a) > Number(b)) ? 1 : 0);
  case 'string':
    return (String(a) < String(b)) ? -1 : ((String(a) > String(b)) ? 1 : 0);
  default: // So it just won't sort the elements, but at least there's no errors
    return 0;
  }
};

// Testing sorting functions
console.log('TESTING');
const testArray = [1, 8, 9, 10, 11];
testArray.sort();
console.log(testArray, '<-- normal sort');
testArray.sort(multiTypeSort);
console.log(testArray, '<-- custom sort');

// Sort students list - hard coded for this specific example
// 1. Have a first sorting algorithm that sorts by property name
// 2. Have a second sorting algorithm that sorts by age
// 3. If the first sorting algorithm isn't decisive, use the second sorting algorithm.

students.sort((a, b) => {
  if (a.name === b.name) { // Same name
    return 0 - multiTypeSort(a.age, b.age); // Flipped because we want higher ages first
  } else /* Name is decisive */ {
    return (a.name < b.name) ? -1 : 1;
  }
});
console.log('Student list sorted to: ', students);

// Multi-level sort. More complex way to handle different sorting parameters.

const multiLevelSort = (sort1, sort2 /* sort1 and sort2 are callbacks */) => {
  return function (a, b) {
    (sort1(a, b) === 0) ? sort2(a, b) : sort1(a, b);
  }
}

const sortObjectsByName = (obj1, obj2) => {
  return multiTypeSort(obj1['name'], obj2['name']);
}

const sortObjectsByAge = (obj1, obj2) => {
  return multiTypeSort(obj1['age'], obj2['age']);
}

console.log(`Now let's experiment with a chain of callbacks.`);
console.log(students.sort(multiLevelSort(sortObjectsByName, sortObjectsByAge)));

module.exports = { multiLevelSort, multiTypeSort };