const countOnly = require('../countOnly');
const assert = require('chai').assert;

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

console.log(`NOTE: This is the list of names used for testing: ${firstNames.join(", ")}`);

describe("#countOnly", () => {
  it(`returns { "Jason": 1 }, for list of names and { "Jason": true, "Karima": true, "Fang": false, "Agouhanna": false }`, () => {
    assert.deepEqual(countOnly([ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": false, "Agouhanna": false }), { "Jason": 1 });
  });
  it(`returns { "Fang": 2, "Jason": 1 }, for list of names and { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }`, () => {
    assert.deepEqual(countOnly([ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }), { "Fang": 2, "Jason": 1 });
  });
  it(`returns { }, for list of names and { "Jason": false, "Karima": false, "Fang": false, "Agouhanna": false }`, () => {
    assert.deepEqual(countOnly([ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": false, "Karima": false, "Fang": false, "Agouhanna": false }), {});
  });
  it(`returns { }, for list of names and { "Jason": false, "Karima": true, "Fang": false, "Agouhanna": false }`, () => {
    assert.deepEqual(countOnly([ "Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"], { "Jason": false, "Karima": true, "Fang": false, "Agouhanna": false }), {});
  });
});