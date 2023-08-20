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

// Write a function that accepts two integers and returns
// the greater integer.
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Exercise 3 ******************************************************************************************************************************

// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)
//
// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_max.asp
function getMax(num1, num2) {
  const max = Math.max(num1, num2);
  return max;
}

// Exercise 4 ******************************************************************************************************************************

// Write a function that accepts 5 grades (positive numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
//
// done with https://www.w3schools.com/jsref/jsref_round.asp#:~:text=The%20Math.,be%20rounded%20up%20(3).
function calculateAverage(num1, num2, num3, num4, num5) {
  const average = (num1 + num2 + num3 + num4 + num5) / 5;

  const roundedAverage = Math.round(average);

  return roundedAverage;
}

// Exercise 5 ******************************************************************************************************************************

// Write a function that takes an array and a value as arguments and
// returns true if the value is in the array else it returns false.
function itemIsPresent(array, item) {
  if (array.includes(item)) {
    return true;
  } else {
    return false;
  }
}

// Exercise 6 ******************************************************************************************************************************

// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that accepts a list of numbers and returns a new list with
// all of the even numbers removed.
function removeEvens(list) {
  const listWithoutEvens = list.filter((num) => {
    return num % 2 !== 0;
  });

  return listWithoutEvens;
}

// Exercise 7 ******************************************************************************************************************************

// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns a new list with all the elements
// that have a length greater than 5.
function keepLong(list) {
  const updatedList = list.filter((num) => {
    return num > 5;
  });

  return updatedList;
}

// Exercise 8 ******************************************************************************************************************************

// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that adds "Hello " to every element of an array of names
// For example: greet(["bob", "eric"]) returns ["Hello bob", "Hello eric"]
function greet(list) {
  const addedGreeting = list.map((name) => {
    return `Hello ${name}`;
  });
  return addedGreeting;
}

// Exercise 9 ******************************************************************************************************************************

// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that only greets people whose names have length at least 4.
// Otherwise ignore them completely.
// For example: greetLong(["bob", "daniel"]) returns ["Hello daniel"]
function greetLong(list) {
  const filteredList = list
    .filter((name) => {
      return name.length > 3;
    })
    .map((filteredName) => {
      return `Hello ${filteredName}`;
    });

  return filteredList;
}

// Exercise 10 ******************************************************************************************************************************

// ⚠️ You are NOT allowed to 'for' or 'while' loops.
// ⚠️ Instead focus on the array methods (filter, map, forEach, etc)
//
// Write a function that returns true if every element of list is of length at least 5.
// Otherwise, it returns false.
function allLong(list) {
  return list.every((name) => {
    return name.length > 4;
  });
}

// Exercise 11 ******************************************************************************************************************************

// Write a function that accepts an array of grades (numerical values) and returns the average.
// The returned average should also be rounded to the nearest unit. (no decimals, please!)
function calculateAverage(grades) {
  let avg = 0;
  for (i = 0; i < grades.length; i++) {
    avg += grades[i] / grades.length;
  }

  return Math.round(avg);
}

// Exercise 12 ******************************************************************************************************************************

// Write a function that accepts an array of grades (numerical values), calculates the average
// and returns the appropriate letter grade. (see below)
//
// Here is how I calculate the grades
// less than 60 is an F
// less than 70 is an D
// less than 80 is an C
// less than 90 is an B
// less than or equal to 100 is an A
function getLetterGrade(grades) {
  let avg = 0;

  for (let i = 0; i < grades.length; i++) {
    avg += grades[i] / grades.length;
  }

  if (avg < 60) {
    return "F";
  }
  if (avg < 70) {
    return "D";
  }
  if (avg < 80) {
    return "C";
  }
  if (avg < 90) {
    return "B";
  } else {
    return "A";
  }
}

// Exercise 13 ******************************************************************************************************************************

// Write a function that takes accepts a string as its only argument
// and returns a number that indicates how many uppercase "B"s are in the string.
function countBs(str) {
  const splitStr = str.split("");

  return splitStr.filter((letter) => {
    return letter.toUpperCase().includes("B");
  }).length;
}

// Exercise 14 ******************************************************************************************************************************

// Write a function that takes accepts a string and a letter as arguments
// and returns the number of times that the letter appears in the string
//
// Example countChar("the amazing spiderman", "a") returns 3.
function countChar(str, char) {
  const splitStr = str.split("");

  return splitStr.filter((letter) => {
    return letter.toUpperCase().includes(char.toUpperCase());
  }).length;
}

// Exercise 15 ******************************************************************************************************************************

// Write a function that filters out the non-unique values in an array.
// This function should accept an array as an argument and return a new array.
//
// Hint: consider using .filter(), .indexOf() and .lastIndexOf()
function filterNonUnique(arr) {
  return arr.filter((element) => {
    return arr.lastIndexOf(element) === arr.indexOf(element);
  });
  // filter array and check if indexOf === lastIndexOf => will return only values that are repeated once in the array
}

// Exercise 16 ******************************************************************************************************************************

// Write a JavaScript program that returns an array of ALL the numbers
// between two provided values, num1 and num2, that meet the following criteria.
//
// The sum of the cube of the digits of a number is equal to the number.
//
// e.g.
// 371 --> 3^3 + 7^3 + 1^3 = 371.
//
// Math.pow() could come in handy.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow
function findNumbers(num1, num2) {
  //stringify the number -> split it into an array -> go over EACH element of array and add the cuve to prev. declared VAR -> check if VAR is = to i
  let arr = [];

  for (let i = num1; i <= num2; i++) {
    let sumOfCubes = 0;

    const stringified = i.toString();
    const splitStr = stringified.split("");
    splitStr.forEach((num) => {
      sumOfCubes += Math.pow(Number(num), 3);
    });
    console.log(sumOfCubes);

    if (sumOfCubes === i) {
      arr.push(i);
    }
  }
  console.log(arr);
}

// Exercise 17 ******************************************************************************************************************************

// Write a function that takes two arguments (numbers), and returns an array of
// all of the Armstrong numbers between.
//
// a number of 1 digit; each digit is to the power of 1
// a number of 2 digit; each digit is to the power of 2
// a number of 3 digit; each digit is to the power of 3
// a number of 4 digit; each digit is to the power of 4
// a number of 5 digit; each digit is to the power of 5
//
// e.g.
// 4    --> 4^1 = 4
// 371  --> 3^3 + 7^3 + 1^3 = 371
// 8208 --> 8^4 + 2^4 + 0^4 + 8^4 = 8208
//
// See this site to learn more about Narcissistic (Armstrong) numbers.
// http://mathworld.wolfram.com/NarcissisticNumber.html
function findArmstrongNumbers(num1, num2) {
  // stringify all nums -> split into an array of numbers -> forEach digit, turn into a Number while checking if SUM of digits to power i.length is equal to i -> push into predecalred array
  let arr = [];

  for (let i = num1; i <= num2; i++) {
    let sum = 0;
    const stringified = i.toString();
    const splitStr = stringified.split("");

    splitStr.forEach((num) => {
      sum += Math.pow(Number(num), stringified.length);
    });

    if (sum === i) {
      arr.push(i);
    }
  }
  console.log(arr);
}

// Exercise 18 ******************************************************************************************************************************

// The purpose of this exercise is to re-implement standard array methods
// Do not use the array methods .map, .filter and .every
// You can use 'for' loops to implement your logic
//
// Write a function that takes an array and a function as parameters and returns an array
// of the same length as the original array but whose values are return of the provided function
//
// map([a1, a2, a3, a4, a5], func) returns [func(a1), func(a2), func(a3), func(a4), func(a5)]
//
// e.g.
// function toUpperCase(str) { return str.toUpperCase(); }
// map(["bob", "susie"], toUpperCase) returns ["BOB", "SUSIE"]
//
// Note:
// - map returns an array with the same number of elements as lst
// - map returns a new array created by applying func to the elements of the original array

// Exercise 19 ******************************************************************************************************************************
// Exercise 20 ******************************************************************************************************************************
