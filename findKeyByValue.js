const findKeyByValue = function(listOfShows, value) {
  let valueToReturn = "";
  for (let genre of Object.keys(listOfShows)) {
    if (listOfShows[genre] === value) {
      valueToReturn = genre;
    }
  }
  if (valueToReturn === "") {
    return undefined;
  } else {
    return valueToReturn;
  }
};

module.exports = findKeyByValue;


