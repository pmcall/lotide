# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pmcall/lotide`

**Require it:**

`const _ = require('@pmcall/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array, array)`: An assertion which compares two arrays and returns a statement confirming if it is true or false. 
  ```js
  [1, 2, 3] & [1, 2, 3] //returns true
  [1, 2, 3] & [3, 2, 1] //returns false
  ```

* `assertEqual(value, value)`: An assertion which compares two primative values and returns a statement confirming if it is true or false. 
	```js
  1 & 2 //returns false
  "banana" & "banana" //returns true
  ```

* `assertObjectsEqual(object, object)`:An assertion which compares two objects to see if they deeply match and returns a statement confirming if it is true or false.
  ```js
  { colour: "Yellow" } & { colour: "Yellow" } //returns true 
  { name: "John" } & { name: "Jane" } //returns false
  ```

* `countLetters(string)`: Returns an object which contains a count for each letter found in the string; excludes spaces. 
	```js
  "banana" //returns { b: 1, a: 3, n: 2}
  ```

* `countOnly(array, object)`: Takes an array of strings and an object which specifies which strings are to be counted marked by `true`. Returns an object which contains the counts for each of the items to be counted.
  ```js
  array = ["banana", "pineapple", "mango", "mango", "papaya"]
  object = {"banana": true, "mango": true, "papaya": false}
  //returns {"banana": 1, "mango": 2}
  ``` 

* `eqArrays(string)`: Compares two arrays and returns true if their contents match. 
	```js
  [1, 2, 3] & [1, 2, 3] //returns true
  [1, 2, 3] & [3, 2, 1] //returns false
  ```

* `eqObjects(object, object)`: Compares two objects and returns true if their contents match. 
	```js
    { a: "hello", b: "goodbye" } & { b: "goodbye", a: "hello" } //returns true
    { a: "banana", b: "mango" } & { b: "manana", a: "bango" } //returns false
    ```

* `findKeyByValue(object, value)`: Searches an object and returns the first key which contains a value matching the given criteria. 
	```js
  critera = "orange" 
  { banana: "Yellow", pineapple: "Yellow", tangerine: "orange", yuzu: "Yellow" } 
  //returns "tangerine"
  ```
* `findKey(object, callback)`: Similar to findKeyByValue as it searches an object and returns the first key which contains a value matching the given criteria. However, this uses a callback method instead of a simple value.
  ```js
  callback = x => x.count === 4
  { "dogs": { "count" = 2 }, "cats": { "count": 3 },  "capybaras": { "count": 4 } } //returns capybaras
  ```

* `flatten(nested array)`: Returns a flattened array from a nested array. 		
  ```js
  [1, 2, [3, 4], 5] //returns [1, 2, 3, 4, 5]
  ```

* `head(array)`: Returns the head (the item at the first index) of an array. 
  ```js
  [1, 2, 3] //returns [1]
  ```

* `letterPositions(string)`: Returns an object which contains a key for each letter found in the string and an array of the indices of the poisiton of the letters. 
	```js
  "Hello" //returns { H: [ 0 ], E: [ 1 ], L: [ 2, 3 ], O: [ 4 ] }
  ```

* `map(array, callback)`: A version of map which returns a newly created array based on the callback function specified. 
  ```js
  callback = x => x[0]
  ["banana", "peach", "apple", "mango", "lychee"] //returns ["b", "p", "a", "m", "l"]
  ```

* `middle(array)`: Returns the item(s) at the mid-point of an array. If the array has one item at the exact midpoint, one item is returned; if the mid-point is between two items, both items are returned. 
 	```js
 	[1, 2, 3] //returns [2]
  [1, 2, 3, 4] //returns [2, 3]
 	```
  
* `tail(array)`: Returns the tail (all items following the first index) of an array. 
	```js
  [1, 2, 3] //returns [2, 3]
  ```
* `takeUntil(array, callback)`: Takes an array until the conditions of the callback are met, then returns the array. 
	```js
  callback = x => x < 0
  [1, 2, -1, 3] //returns [1, 2]
  ```
* `without(array, array)`: Takes an array and returns an array with any specified items removed. 
	```js
    ["This", "is", "not", "a", "pen"] & ["not"] //returns ["This", "is", "a", "pen"]
  ```

