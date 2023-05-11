const head = require('./head')
const tail = require('./middle')
const middle = require('./middle')
const assertArraysEqualTest = require('./assertArraysEqual')
const assertEqual = require('./assertEqual')
const assertObjectsEqual = require('./assertObjectsEqual')
const countLetters = require('./countLetters')
const countOnly = require('./countOnly')
const eqArrays = require('./eqArrays')
const eqObjects = require('./eqObjects')
const findKey = require('./findKey')
const findKeyByValue = require('./findKeyByValue')
const flatten = require('./flatten')
const letterPositions = require('./letterPositions')
const map = require('./map')



module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqualTest: assertArraysEqualTest,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  letterPositions: letterPositions,
  map: map
}