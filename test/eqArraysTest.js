const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 2], [1, 2, 3]), false); // => should PASS
assertEqual(eqArrays(["banana", "apple", "orange"], ["banana", "apple", "orange"]), true); // => should PASS
assertEqual(eqArrays(["banana", "apple", "orange"], ["banana", "apple", "orange"]), false); // => should FAIL
assertEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), true); // => should FAIL

