const countLetters = function(sentence) {
  let listKeeper = {};
  let sanitisedSentence = sentence.toUpperCase();
  sanitisedSentence = sanitisedSentence.replace(/[" "]/g, "");
  for (let ele of sanitisedSentence) {
    if (!listKeeper[ele]) {
      listKeeper[ele] = 1;
    } else {
      listKeeper[ele] ++;
    }
  }
  return listKeeper;
};

module.exports = countLetters;

