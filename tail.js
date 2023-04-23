// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

let tailList = [];

const tail = function(tailArray) {
  for (let i = 1; i < tailArray.length; i++) {
    tailList.push(tailArray[i]);
  }
};

// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 12);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tailList);