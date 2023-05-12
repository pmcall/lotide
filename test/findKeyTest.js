const assert = require('chai').assert;
const findKey = require('../findKey');

describe("#findKey", () => {
  it(`"noma" is the first item with 2 stars`, () => {
    assert.strictEqual(findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x.stars === 2), "noma");
  });
  it(`"Akaleri" is the first item with 3 stars`, () => {
    assert.strictEqual(findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x.stars === 3), "Akaleri");
  });
  it(`"Blue Hill" is the first item with 1 star`, () => {
    assert.strictEqual(findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x.stars === 1), "Blue Hill");
  });
  it(`No items have 4 stars so undefined is returned`, () => {
    assert.strictEqual(findKey({ "Blue Hill": { stars: 1 }, "Akaleri": { stars: 3 }, "noma": { stars: 2 }, "elBulli": { stars: 3 }, "Ora": { stars: 2 }, "Akelarre": { stars: 3 } }, x => x.stars === 4), undefined);
  });
});