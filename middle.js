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

const middle = function(array) {
  let returnArray = [];
  let halfPoint = 0;
  if (array.length < 3) {
    console.log("The array is empty. Honest.");
    return returnArray;
  }
  if (array.length % 2 === 1) {//odd length, one middle returned
    halfPoint = array.length - 1;
    halfPoint = halfPoint / 2;
    console.log(array[halfPoint]);
  } else {//even length, two middles are returned
    halfPoint = array.length / 2;
    console.log(array[halfPoint], array[halfPoint + 1]);
  }
};

middle([1]); // => []
middle([1, 2]); // => []
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]
