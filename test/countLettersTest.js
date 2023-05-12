const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it(`{ B: 1, A: 3, N: 2 } for "Banana"`, () => {
    assert.deepEqual(countLetters("Banana"), { B: 1, A: 3, N: 2 });
  });
  it(`{ B: 2, A: 6, N: 4 } for "BANANAbanana"`, () => {
    assert.deepEqual(countLetters("BANANAbanana"), { B: 2, A: 6, N: 4 });
  });
  it(`{ T: 2,  H: 2,  E: 3,  Q: 1,  U: 2,  I: 1,  C: 1,  K: 1,  B: 1,  R: 2,  O: 4,  W: 1,  N: 1,  F: 1,  X: 1,  J: 1,  M: 1,  P: 1,  S: 1,  V: 1,  L: 1,  A: 1,  Z: 1,  Y: 1,  D: 1,  G: 1 } for "The quick brown fox jumps over the lazy dog"`, () => {
    assert.deepEqual(countLetters("The quick brown fox jumps over the lazy dog"), { T: 2,  H: 2,  E: 3,  Q: 1,  U: 2,  I: 1,  C: 1,  K: 1,  B: 1,  R: 2,  O: 4,  W: 1,  N: 1,  F: 1,  X: 1,  J: 1,  M: 1,  P: 1,  S: 1,  V: 1,  L: 1,  A: 1,  Z: 1,  Y: 1,  D: 1,  G: 1 });
  });
  it(`{C: 1,  O: 3,  L: 4,  R: 3,  E: 6,  S: 5,  G: 1,  N: 1,  I: 2,  D: 1,  A: 1,  P: 1,  F: 1,  U: 3,  Y: 1} for "Colourless green ideas sleep furiously"`, () => {
    assert.deepEqual(countLetters("Colourless green ideas sleep furiously"), {C: 1,  O: 3,  L: 4,  R: 3,  E: 6,  S: 5,  G: 1,  N: 1,  I: 2,  D: 1,  A: 1,  P: 1,  F: 1,  U: 3,  Y: 1});
  });
  it(`{} for ""`, () => {
    assert.deepEqual(countLetters(""), {});
  });
});