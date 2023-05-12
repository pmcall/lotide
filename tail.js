const tail = function(tailArray) {
  let tailList = [];
  if (tailArray.length === 1) {
    return tailList;
  } else {
    for (let i = 1; i < tailArray.length; i++) {
      tailList.push(tailArray[i]);
    }
    return tailList;
  }
};

module.exports = tail;