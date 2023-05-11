const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3])
assertArraysEqual([1, 3, 3], [1, 2, 3])
assertArraysEqual(["Apple", "Banana", "Cabbage"], ["Apple", "Banana", "Cabbage"]), true;
assertArraysEqual(["Apple", "Banana", "Cabbage"], ["Watercress", "Peach", "Sausage"]), false;
assertArraysEqual([],[]),true;//PASS
assertArraysEqual([1,2,3], [1,2]),false;//FAIL
assertArraysEqual([],["banana"]), false;
assertArraysEqual(["hello", "cheese"], ["hello", "cheese"])
assertArraysEqual(["bananas"], ["hello", 1])
assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])
assertArraysEqual([5, 4, 3, 2, 1], [1, 2, 3, 4, 5])