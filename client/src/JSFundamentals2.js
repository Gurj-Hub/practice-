// Exercise 1.1 ******************************************************************************************************************************

// Write a function that accepts a fullName and returns a count of the number of names in fullName
//
// Example:
// countNames('Morty Antoine Smith') should return 3.
function countNames(fullName) {
  const splitName = fullName.split(" ");

  return splitName.length;
}

// Exercise 1.2 ******************************************************************************************************************************

// Write a function that accepts a string of comma-separated names
// and returns an array of those names.
//
// Example:
// arrOFNames('Simple Rick, Slow Rick, Tall Rick, Cop Rick, Doofus Rick, Past Rick, Replacement Rick, Insurance Rick, Sales Rick, Supervisor Rick, Cool Rick, Cowboy Rick, Tiny Rick, Cronenberg Rick, Teacher Rick, Farmer Rick, Future Rick, Rick J22, Evil Rick, Toxic Rick, Crunk Rick, Pickle Rick, The Scientist Formerly Known as Rick, Rick C-137')
// should return...

function arrayOfNames(string) {
  const splitString = string.split(", ");

  return splitString;
}

// Exercise 1.3 ******************************************************************************************************************************

// Write a function that accepts a string of words
// and returns the character-count of that string. (include spaces)
//
// Example:
// characterCount("ab c def") should return 8

function charCountInString(string) {
  // const splitString = string.split('')

  // return splitString.length;
  return string.length;
}

// Exercise 1.4 ******************************************************************************************************************************

// Write a function that accepts a name and returns only the first name and last name.
// Essentially removing the middle name if there is one.
// - This function should still work if there is no middle name.
// - If there are multiple middle names this function should still work.
// - If the string has only one name, e.g. "Adele", it should return that name
//
// Example:
// shortenName("Morty Antoine Smith") should return "Morty Smith"
// shortenName("Morty Smith") should return "Morty Smith"
// shortenName("Morty") should return "Morty"
// shortenName("Morty Antoine Fred Bacon Smith") should return "Morty Smith"

function firstAndLastName(name) {
  const splitName = name.split(" ");

  if (splitName.length < 3) {
    return name;
  } else {
    return `${splitName[0]} ${splitName[splitName.length - 1]}`;
  }
}

// Exercise 1.5 ******************************************************************************************************************************

// Write a function that accepts a coded string and an array of "notCode" words.
// This function should return the decoded string (with all of the notCode words removed.)
//
// Example:
// decodeMessage("I amnot the walrus.", ["not"]) should return "I am the walrus."
function decodeMessage(string, notCode) {
  let sentence = string;

  for (let x = 0; x < notCode.length; x++) {
    sentence = sentence.replace(notcode[x], "");
  }
  return sentence;
}

// Exercise 1.6 ******************************************************************************************************************************

// Write a function that accepts an array of strings and a string.
// It should return the array without the string.

// Example:
// removeStringFromArray(["I", "bacon", "you", "she"], "bacon") should return ["I", "you", "she"]
function removeStringFromArray(array, string) {
  const newArray = array.filter((word) => {
    return word !== string;
  });
  return newArray;
}

// Exercise 2 ******************************************************************************************************************************
// Exercise 3 ******************************************************************************************************************************
// Exercise 4 ******************************************************************************************************************************
// Exercise 5 ******************************************************************************************************************************
// Exercise 6 ******************************************************************************************************************************
// Exercise 7 ******************************************************************************************************************************
// Exercise 8 ******************************************************************************************************************************
// Exercise 9 ******************************************************************************************************************************
// Exercise 10 ******************************************************************************************************************************
// Exercise 11 ******************************************************************************************************************************
// Exercise 12 ******************************************************************************************************************************
// Exercise 13 ******************************************************************************************************************************
// Exercise 14 ******************************************************************************************************************************
// Exercise 15 ******************************************************************************************************************************
// Exercise 16 ******************************************************************************************************************************
// Exercise 17 ******************************************************************************************************************************
// Exercise 18 ******************************************************************************************************************************
// Exercise 19 ******************************************************************************************************************************
// Exercise 20 ******************************************************************************************************************************
