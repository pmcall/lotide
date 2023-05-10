const takeUntil = function(array, callback) {
  let spliceEnd = array.findIndex(callback);
  console.log(spliceEnd);
  return array.slice(0, spliceEnd);
};


//INPUTS

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

//TESTS

const assertArraysEqual = function(array1, array2) {
  let booleanSwitch = true;
  if (array1.length !== array2.length) {
    booleanSwitch = false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      booleanSwitch = false;
    }
  }
  if (booleanSwitch === true) {
    console.log(`I compared ${array1} with ${array2}. I found that both arrays are exactly the same!`);
  } else {
    console.log(`I compared ${array1} with ${array2}. It seems like they are different.`);
  }
};

assertArraysEqual(takeUntil(data2, x => x === ','), ["I've", "been", "to", "Hollywood"]);
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);