// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 ${actual} !== ${expected}`);
  }
};



const findKeyByValue = function(listOfShows, value) {
  for (let genre of Object.keys(listOfShows)) {
    if (listOfShows[genre] === value) {
      return genre;
    // } else {
    //   return undefined;
    }
  }
}

// TEST CODE
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 12);

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "The Golden Girls",
  drama:  "The Wire",
  kids: "Sabrina, the teenage witch",
  animation: "Bob's Burgers"
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");//pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);//pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), undefined);//fail
assertEqual(findKeyByValue(bestTVShowsByGenre, "Sabrina, the teenage witch"), "kids");//pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Golden Girls"), "comedy");//pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Golden Girls"), "sci_fi");//fail



