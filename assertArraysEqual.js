// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(array1, array2) {
  let booleanSwitch = true;
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

// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 12);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 2], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays(["banana", "apple", "orange"], ["banana", "apple", "orange"]), true); // => should PASS
assertEqual(eqArrays(["banana", "apple", "orange"], ["banana", "apple", "orange"]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), true); // => should FAIL
assertArraysEqual([1, 3, 3], [1, 2, 3])