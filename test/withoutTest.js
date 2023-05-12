const assert = require('chai').assert;
const without = require('../without');


describe("#without", () => {
  it(`For [1, 2, 3] without the [1] it returns [2, 3]`, () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
  it(`For ["1", "2", "3"] without [1, 2] it returns ["1", "2", "3"]`, () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2]), ["1", "2", "3"]);
  });
  it(`For ["hello", "world", "lighthouse"] without ["hello", "world"] it returns ["lighthouse"]`, () => {
    assert.deepEqual(without(["hello", "world", "lighthouse"], ["hello", "world"]), ["lighthouse"]);
  });
  it(`For ["eggs", "bacon", "toast"] without [] it returns ["eggs", "bacon", "toast"]`, () => {
    assert.deepEqual(without(["eggs", "bacon", "toast"], []), ["eggs", "bacon", "toast"]);
  });
});




