// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let i = [];
  let j = [];
  let comparisonBlooean = true
  for (let ele in object1) {
    i.push(ele)
  }
  for (let ele in object2) {
    j.push(ele)
  }
  if (i.length !== j.length) {
    comparisonBlooean = false;
  } else {//passed test of number of keys
    for (ele in object1) {
      if (typeof object1[ele] === "object") {//This should probably be Array.isArray as mentioned in the compass tip, but I went with typoeof in my original implementation and it works, so I'm going to keep it
          comparisonBlooean = eqArrays(object1[ele], object2[ele]) 
      } else {
        if (object1[ele] !== object2[ele]) {
          comparisonBlooean = false
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


// TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(12, 12);

// --+-- First Round of Tests (comparing primatives) --+--
// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// assertEqual(eqObjects(shirtObject , anotherShirtObject), true); // => pass
// assertEqual(eqObjects(shirtObject , anotherShirtObject), false); // => fail

// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false); // => pass
// assertEqual(eqObjects(shirtObject , longSleeveShirtObject), true); // => fail

// eqObjects(shirtObject , anotherShirtObject)
// eqObjects(shirtObject , longSleeveShirtObject)

// --+-- Second Round of Tests (comparing arrays) --+--
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => pass
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), false); // => fail

const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false); // => pass
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), true); // => fail