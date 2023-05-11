let tailList = [];

const tail = function(tailArray) {
  tailList = [];
  for (let i = 1; i < tailArray.length; i++) {
    tailList.push(tailArray[i]);
  }
  console.log(`The original array is "${tailArray.join(", ")}"`);
  console.log(`The tail is: "${tailList.join(", ")}"`);
};

module.exports = tail;