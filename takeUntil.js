const takeUntil = function(array, callback) {
  let spliceEnd = array.findIndex(callback);
  if (spliceEnd === -1) {
    return array;
  } else {
    return array.slice(0, spliceEnd);
  }
};

module.exports = takeUntil;