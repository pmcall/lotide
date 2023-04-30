const words = ["ground", "control", "to", "major", "tom"];
const fruits = ["banana", "peach", "apple", "mango", "lychee"];
const bananas = ["banana", "banana", "banana", "banana", "banana"]

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(fruits, word => word[0]);
const results3 = map(bananas, word => word[0]);
console.log(results1);


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
      console.log(`I compared ${array1} with ${array2}. I found that both arrays are exactly the same!`) 
    } else {
      console.log(`I compared ${array1} with ${array2}. It seems like they are different.`) 
    }
};


const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};

//TESTS
assertArraysEqual(results1, ["G", "C", "T", "M", "T"]) //FAIL
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]) //PASS
assertArraysEqual(results2, ["b", "p", "a", "m", "l"]) //PASS
assertArraysEqual(results3, ["b", "b", "b", "b", "b"]) //PASS
