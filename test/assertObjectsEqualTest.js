const assertObjectsEqual = require('../assertObjectsEqual');

const banana = {colour: "Yellow"};
const mango = {colour: "Yellow"};
const blueberry = {colour: "Blue"};
assertObjectsEqual(banana, mango);
assertObjectsEqual(banana, blueberry);
assertObjectsEqual(mango, blueberry);