const middle = function(array) {
  let returnArray = [];
  let halfPoint = 0;
  if (array.length < 3) {
    return returnArray;
  }
  if (array.length % 2 === 1) {//odd length, one middle returned
    halfPoint = (array.length - 1) / 2;
    returnArray.push(array[halfPoint]);
    return returnArray;
  } else {//even length, two middles are returned
    halfPoint = array.length / 2;
    returnArray.push(array[halfPoint - 1]);
    returnArray.push(array[halfPoint]);
    return returnArray;
  }
};

module.exports = middle;
