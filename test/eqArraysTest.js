const assert = require('chai').assert;
const eqArrays = require('../eqArrays');


describe("#eqArrays", () => {
  it(`[1, 2, 3] is the same as [1, 2, 3]`, () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it(`[1, 2, 2] is NOT the same as [1, 2, 3]`, () => {
    assert.deepEqual(eqArrays([1, 2, 2], [1, 2, 3]), false);
  });
  it(`["banana", "apple", "orange"] is the same as ["banana", "apple", "orange"]`, () => {
    assert.deepEqual(eqArrays(["banana", "apple", "orange"], ["banana", "apple", "orange"]), true);
  });
  it(`["banana", "apple", "orange"] is NOT the same as ["banana", "apple", "blueberry"]`, () => {
    assert.deepEqual(eqArrays(["banana", "apple", "orange"], ["banana", "apple", "blueberry"]), false);
  });
  it(`["1", "2", "3"]  is NOT the same as [1, 2, 3]`, () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], [1, 2, 3]), false);
  });
});