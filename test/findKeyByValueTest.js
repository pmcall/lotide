const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');
const inspect = require('util').inspect;


const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "The Golden Girls",
  drama:  "The Wire",
  kids: "Sabrina, the teenage witch",
  animation: "Bob's Burgers"
};

console.log(`Fresh from today's TV guide: the winning shows in each TV category!
${inspect(bestTVShowsByGenre)}}`);

describe("#findKeyByValue", () => {
  it(`"The Wire" is the best show in the drama category`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it(`"That 70's show" is not on the list and will return undefined!`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it(`"Sabrina, the teenage witch" is the best kids show`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Sabrina, the teenage witch"), "kids");
  });
  it(`"The Golden Girls" is the best comedy show (ever?!)`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Golden Girls"), "comedy");
  });
});
