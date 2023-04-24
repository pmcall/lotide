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

const flatten = function(array) {
  let returnedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        returnedArray.push(array[i][j]);
      }
    } else {
      returnedArray.push(array[i]);
    }
  }
  console.log(returnedArray);
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]