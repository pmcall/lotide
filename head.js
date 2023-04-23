// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};

const head = function(array) {
  return array[0];
}

// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 12);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");