const eqArrays = require('./eqArrays');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  let comparisonBlooean = true;
  for (let ele in actual) {
    if (Array.isArray(actual[ele]) === true) {
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

module.exports = assertObjectsEqual;