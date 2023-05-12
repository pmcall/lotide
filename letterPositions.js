const letterPositions = function(sentence) {
  const results = {};
  let counter = -1;
  let sanitisedSentence = sentence.toUpperCase();
  sanitisedSentence = sanitisedSentence.replace(/[" "]/g, "");
  for (let ele of sanitisedSentence) {
    counter++;
    if (results[ele] === undefined) {
      results[ele] = [counter];
    } else {
      results[ele].push(counter);
    }
  }
  return results;
};

module.exports = letterPositions;

