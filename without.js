const without = function(source, itemsToRemove) {
  let listToBeReturned = [];
  for (let k = 0; k < source.length; k++) {//to create shallow copy of the source for ouput
    listToBeReturned.push(source[k]);
  }
  for (let i = 0; i < listToBeReturned.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (listToBeReturned[i] === itemsToRemove[j]) {
        listToBeReturned.splice(i, 1);
      }
    }
  }
  return listToBeReturned;
};

module.exports = without;