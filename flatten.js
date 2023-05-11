const flatten = function(array) {
  let returnedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let j = 0; j < array[i].length; j++) {
        returnedArray.push(array[i][j]);
      }
    } else {
      returnedArray.push(array[i]);
    }
  }
  return returnedArray;
};


module.exports = flatten;

