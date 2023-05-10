// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let i = [];
  let j = [];
  let comparisonBlooean = true;
  for (let ele in object1) {
    i.push(ele);
  }
  for (let ele in object2) {
    j.push(ele);
  }
  if (i.length !== j.length) {
    comparisonBlooean = false;
  } else {//passed test of number of keys
    for (let ele in object1) {
      if (typeof object1[ele] === "object") {
        //This should probably be Array.isArray as mentioned in the compass tip, but I went with typoeof in my original implementation and it works, so I'm going to keep it
        comparisonBlooean = eqArrays(object1[ele], object2[ele]);
      } else {
        if (object1[ele] !== object2[ele]) {
          comparisonBlooean = false;
        }
      }
    }
  }
  return comparisonBlooean;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let comparisonBlooean = true;
  for (let ele in actual) {
    if (Array.isArray(actual[ele]) === true) {//This should probably be Array.isArray as mentioned in the compass tip, but I went with typoeof in my original implementation and it works, so I'm going to keep it
      comparisonBlooean = eqArrays(actual[ele], expected[ele]);
    } else {
      if (actual[ele] !== expected[ele]) {
        comparisonBlooean = false;
      }
    }
  }
  if (comparisonBlooean === true) {
    console.log(`✅ I compared ${inspect(actual)} with ${inspect(expected)}. I found that both objects are exactly the same!`);
  } else {
    console.log(`❌ I compared ${inspect(actual)} with ${inspect(expected)}, but these objects are not the same!`);
  }
};

const banana = {colour: "Yellow"};
const mango = {colour: "Yellow"};
const blueberry = {colour: "Blue"};
assertObjectsEqual(banana, mango);
assertObjectsEqual(banana, blueberry);