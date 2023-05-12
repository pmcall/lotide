const findKey = function(object, callback) {
  for (let name of Object.keys(object)) {
    if (callback(object[name])) {
      return name;
    }
  }
};

module.exports = findKey;
