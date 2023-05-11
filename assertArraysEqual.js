const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ These arrays match! "${array1.join(", ")}" is the same as "${array2.join(", ")}"`);
  } else {
    console.log(`🛑🛑🛑 These arrays do not match! "${array1.join(", ")}" is not the same as "${array2.join(", ")}"`);
  }
};

module.exports = assertArraysEqual;
