const eqObjects = require('../eqObjects');
const assert = require('chai').assert;
const inspect = require('util').inspect;

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

console.log(`This is a list of our items we have in store which will be used for testing!:
A shirt: ${inspect(shirtObject)}
Another shirt: ${inspect(anotherShirtObject)}
A longsleeve shirt: ${inspect(longSleeveShirtObject)}
A multicoloured shirt: ${inspect(multiColorShirtObject)}
A multicoloured shirt (my favourite!):${inspect(anotherMultiColorShirtObject)}
`
);

describe("#eqObjects", () => {
  it(`Returns true for two objects with the same key value pairs`, () => {
    assert.deepEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });
  it(`Returns false for two objects with different number of key value pairs`, () => {
    assert.deepEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
  });
  it(`Returns true for two objects with the same key value pairs including an array`, () => {
    assert.deepEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true);
  });
});