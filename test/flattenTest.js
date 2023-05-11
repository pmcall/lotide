const flatten = require('../flatten')
const assert = require('chai').assert;

describe("#flatten", () => {
  it (`Returns a flattened array, [1, 2, [3, 4], 5, [6]] -> [1, 2, 3, 4, 5, 6]`, () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
  });
  it (`Returns a flattened array, ["This", "is", "an", "array", ["with", "another", "array"]] -> ["This", "is", "an", "array", "with", "another", "array"]`, () => {
    assert.deepEqual(flatten(["This", "is", "an", "array", ["with", "another", "array"]]), ["This", "is", "an", "array", "with", "another", "array"])
  });
  it (`Returns a flattened array, ["Today", "your", "lucky", "numbers", "are", [8, 5, 3], "oh", "and", [0]] -> ["Today", "your", "lucky", "numbers", "are", 8, 5, 3, "oh", "and", 0]`, () => {
    assert.deepEqual(flatten(["Today", "your", "lucky", "numbers", "are", [8, 5, 3], "oh", "and", [0]]), ["Today", "your", "lucky", "numbers", "are", 8, 5, 3, "oh", "and", 0])
  });
  it (`Returns a flattened array, [] -> []`, () => {
    assert.deepEqual(flatten([]), [])
  });
})
