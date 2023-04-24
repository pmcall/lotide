const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
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

const without = function(source, itemsToRemove) {
  let listToBeReturned = [];
  for (let k = 0; k < source.length; k++) {//to create shallow copy of the source for ouput
    listToBeReturned.push(source[k]);
  }
  for (let i = 0; i < listToBeReturned.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (listToBeReturned[i] === itemsToRemove[j]) {
        listToBeReturned.splice(i, 1);
      }
    }
  }
  console.log(listToBeReturned);
  return listToBeReturned;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2]);// => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
