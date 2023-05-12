const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letter Positions", () => {
  it(`"Hello" returns { H: [ 0 ], E: [ 1 ], L: [ 2, 3 ], O: [ 4 ] } `, () => {
    assert.deepEqual(letterPositions("Hello"), { H: [ 0 ], E: [ 1 ], L: [ 2, 3 ], O: [ 4 ] });
  });
  it(`"Hello[E]" returns [1]`, () => {
    assert.deepEqual(letterPositions("Hello").E, [ 1 ]);
  });
  it(`"The quick brown fox jumps over the lazy dog"" returns 
  T: [ 0, 25 ], H: [ 1, 26 ], E: [ 2, 23, 27 ], Q: [ 3 ], U: [ 4, 17 ], I: [ 5 ], C: [ 6 ], K: [ 7 ], B: [ 8 ], R: [ 9, 24 ], O: [ 10, 14, 21, 33 ], W: [ 11 ], N: [ 12 ], F: [ 13 ], X: [ 15 ], J: [ 16 ], M: [ 18 ], P: [ 19 ], S: [ 20 ], V: [ 22 ], L: [ 28 ], A: [ 29 ], Z: [ 30 ], Y: [ 31 ], D: [ 32 ], G: [ 34 ]  `, () => {
    assert.deepEqual(letterPositions("the quick brown fox jumps over the lazy dog"), { T: [ 0, 25 ], H: [ 1, 26 ], E: [ 2, 23, 27 ], Q: [ 3 ], U: [ 4, 17 ], I: [ 5 ], C: [ 6 ], K: [ 7 ], B: [ 8 ], R: [ 9, 24 ], O: [ 10, 14, 21, 33 ], W: [ 11 ], N: [ 12 ], F: [ 13 ], X: [ 15 ], J: [ 16 ], M: [ 18 ], P: [ 19 ], S: [ 20 ], V: [ 22 ], L: [ 28 ], A: [ 29 ], Z: [ 30 ], Y: [ 31 ], D: [ 32 ], G: [ 34 ]});
  });
});