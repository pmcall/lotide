// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};


const countLetters = function(sentence) {
  //The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.
  let listKeeper = {};
  let sanitisedSentence = sentence.toUpperCase();
  sanitisedSentence = sanitisedSentence.replace(/[" "]/g, "");
  /*replaceAll stopped working because node version on vagrant is too low. Switched to replace() with regex and the global flag. ReplaceAll works on my local. Original code was 
    sanitisedSentence = sanitisedSentence.replaceAll(' ', '');
  */
  console.log(sanitisedSentence);
  for (let ele of sanitisedSentence) {
    if (!listKeeper[ele]) {
      listKeeper[ele] = 1;
    } else {
      listKeeper[ele] ++;
    }
  }
  console.log(listKeeper);
};

countLetters("The quick brown fox jumps over the lazy dog");

