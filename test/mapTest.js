const map = require('../map');
const assert = require('chai').assert;

const callback1 = x => x[0];
const callback2 = x => x * 2;

describe("#map", () => {
  it(`Maps array ["ground", "control", "to", "major", "tom"] with ${callback1} to ["g", "c", "t", "m", "t"]`, () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], callback1), ["g", "c", "t", "m", "t"]);
  });
  it(`Maps array ["banana", "peach", "apple", "mango", "lychee"] with ${callback1} to ["b", "p", "a", "m", "l"]`, () => {
    assert.deepEqual(map(["banana", "peach", "apple", "mango", "lychee"], callback1), ["b", "p", "a", "m", "l"]);
  });
  it(`Maps array [1, 2, 3, 4, 5] with ${callback2} to [2, 4, 6, 8, 10]`, () => {
    assert.deepEqual(map([1, 2, 3, 4, 5], callback2), [2, 4, 6, 8, 10]);
  });
  it(`Maps array [100, 3000, 70000, 900000] with ${callback2} to [200, 6000, 140000, 1800000]`, () => {
    assert.deepEqual(map([100, 3000, 70000, 900000], callback2), [200, 6000, 140000, 1800000]);
  });
});
