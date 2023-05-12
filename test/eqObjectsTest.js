const eqObjects = require('../eqObjects');
const assert = require('chai').assert;
const inspect = require('util').inspect;
const chalk = require("chalk");
const chalkRainbow = require('chalk-rainbow')

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

console.log(`This is a list of our items we have in store which will be used for testing!:
${chalk.bgMagenta.bold("A shirt:")} ${chalk.yellow(inspect(shirtObject))}
${chalk.bgYellow.bold("Another shirt:")} ${chalk.blue(inspect(anotherShirtObject))}
${chalk.bgCyanBright("A longsleeve shirt:")} ${chalk.cyan(inspect(longSleeveShirtObject))}
${chalk.bgWhiteBright(chalkRainbow("A multicoloured shirt:"))} ${chalk.magenta(inspect(multiColorShirtObject))}
${chalk.bgWhiteBright.blue(chalkRainbow("Another multicoloured shirt:"), "(my favourite!)")} ${chalk.greenBright(inspect(anotherMultiColorShirtObject))}
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