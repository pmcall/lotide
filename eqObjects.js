const eqArrays = require('./eqArrays');

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
      if (Array.isArray(object1[ele]) === true) {
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

module.exports = eqObjects;