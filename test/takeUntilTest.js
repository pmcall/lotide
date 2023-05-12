const takeUntil = require('../takeUntil')
const assert = require('chai').assert

describe("#takeUntil", () => {
  it("Returns [1, 2, 5, 7, 2] from the array [1, 2, 5, 7, 2, -1, 2, 4, 5] and function x => x < 0", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [1, 2, 5, 7, 2]);
  });
  it(`Returns ["I", "spent", "all", "pandemic", "baking", "banana", "bread"] from the array ["I", "spent", "all", "pandemic", "baking", "banana", "bread", "and", "not", "going", "outside"] and function "x => x === 'and'"`, () => {
    assert.deepEqual(takeUntil(["I", "spent", "all", "pandemic", "baking", "banana", "bread", "and", "not", "going", "outside"], x => x === 'and'), ["I", "spent", "all", "pandemic", "baking", "banana", "bread"]);
  });
  it("Returns [10, 8, 6, 4, 2, 0] from the array [10, 8, 6, 4, 2, 0] and function x => x < 0", () => {
    assert.deepEqual(takeUntil([10, 8, 6, 4, 2, 0], x => x < 0), [10, 8, 6, 4, 2, 0]);
  });
});