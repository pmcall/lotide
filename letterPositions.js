const assertArraysEqual = function(array1, array2) {
  let booleanSwitch = true;
  if (array1.length !== array2.length) {
    booleanSwitch = false;
  }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        booleanSwitch = false;
      } 
    }
    if (booleanSwitch === true) {
      console.log(`I compared ${array1} with ${array2}. I found that both arrays are exactly the same!`) 
    } else {
      console.log(`I compared ${array1} with ${array2}. It seems like they are different.`) 
    }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
};


const letterPositions = function(sentence) {
  const results = {};
  let counter = -1;
  let sanitisedSentence = sentence.toUpperCase();
  sanitisedSentence = sanitisedSentence.replace(/[" "]/g, "");
  // logic to update results here
  for (let ele of sanitisedSentence) {
    counter++;
    if (results[ele] === undefined) {
      results[ele] = [counter];
    } else {
      results[ele].push(counter)
    }
  }
  console.log(results)


  return results;
};
//====TESTS=====
assertArraysEqual(letterPositions("hello").E, [1]);
// letterPositions("the quick brown fox jumps over the lazy dog")

