const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
assertEqual(assertArraysEqual([1, 3, 3], [1, 2, 3]), false);
assertEqual(assertArraysEqual(["Apple", "Banana", "Cabbage"], ["Apple", "Banana", "Cabbage"]), true);
assertEqual(assertArraysEqual(["Apple", "Banana", "Cabbage"], ["Watercress", "Peach", "Sausage"]), false);
assertEqual(assertArraysEqual([],[]),true);//PASS
assertEqual(assertArraysEqual([1,2,3], [1,2]),false);//FAIL
assertEqual(assertArraysEqual([],["banana"]), false);