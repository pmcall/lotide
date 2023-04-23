// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ " + actual + " === " + expected);
  } else {
    console.log("🛑🛑🛑 " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);