const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([2, 3, 5, 7, 11, 13, 17, 19]), [7, 11]);
assertArraysEqual(middle(["who", "lives", "in", "a", "pineapple", "under", "the", "sea"]), ["a", "pineapple"]);
assertArraysEqual(middle(["hi", "there"]), []); // => []