const assert = require('chai').assert;
const middle = require("../middle");

describe("#middle", () => {
  it(`returns [] for [1]`, () => {
    assert.deepEqual(middle([1]), []);
  });
  it(`returns [] for [1, 2]`, () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it(`returns [2] for [1, 2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it(`returns [3] for [1, 2, 3, 4, 5]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it(`returns [2, 3] for [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it(`returns [3, 4] for [1, 2, 3, 4, 5, 6]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it(`returns [7, 11] for [2, 3, 5, 7, 11, 13, 17, 19]`, () => {
    assert.deepEqual(middle([2, 3, 5, 7, 11, 13, 17, 19]), [7, 11]);
  });
  it(`returns ["a", "pineapple"] for ["who", "lives", "in", "a", "pineapple", "under", "the", "sea"]`, () => {
    assert.deepEqual(middle(["who", "lives", "in", "a", "pineapple", "under", "the", "sea"]), ["a", "pineapple"]);
  });
  it(`returns [] for ["hi", "there"]`, () => {
    assert.deepEqual(middle(["hi", "there"]), []);
  });
});