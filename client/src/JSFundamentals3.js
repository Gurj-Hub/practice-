// Exercise 0 ******************************************************************************************************************************

// Exercise 0
// ---------------
// Write an arrow function accepts a string as an argument and returns the number of letters in that string
//
// - If it's an empty string (''), return undefined.
// - If it's not a string, return undefined.
const strLength = (str) => {
  if (typeof str !== "string") {
    return undefined;
  }
  if (str.length === 0) {
    return undefined;
  } else {
    return str.length;
  }
};

// Exercise 1 ******************************************************************************************************************************

// Write an arrow function that returns the first character
// of the string that is passed to it.
//
// - If it's an empty string (''), return undefined.
const firstLetter = (str) => {
  if (str.length === 0) {
    return undefined;
  } else {
    return str.charAt(0);
  }
};

// Exercise 2 ******************************************************************************************************************************

// Write an arrow function that returns the LAST character
// of the string that is passed to it.
//
// - If it's an empty string, return `undefined`
// - If it's not a string, return `undefined`
const lastCharacter = (str) => {
  if (typeof str !== "string" || str.length === 0) {
    return undefined;
  } else {
    return str.charAt(str.length - 1);
  }
};

// Exercise 3 ******************************************************************************************************************************

// Write an arrow function that expects 2 numbers as input (e.g. 1, 2)
// and returns the sum of the two numbers.
//
// - If anything other than 2 numbers is passed, return undefined.
//
// HINT: You can use the typeof function to check the type of each element:
// `typeof 3` returns 'number'
const addition = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return undefined;
  } else {
    return num1 + num2;
  }
};

// Exercise 4 ******************************************************************************************************************************

// Write an arrow function that expects an array of numbers as input (e.g. [1, 2, 4, 12])
// and returns the sum of the numbers.
//
// - If the array contains any values that are not a number, the function should return undefined.
// - If the array is empty, the function should return undefined.
const sum = (arr) => {
  let addition = 0;

  const allNums = arr.every((element) => {
    return typeof element === "number";
  });

  console.log(allNums);

  if (allNums && arr.length > 0) {
    arr.forEach((num) => {
      addition += num;
    });

    return addition;
  } else {
    return undefined;
  }
};

// Exercise 5 ******************************************************************************************************************************

// Write an arrow function that returns the character at the specified position in the
// string.

// - If str is not a string, return undefined.
// - If there is no character at the provided index, return undefined.
const getLetterAtIndex = (str, index) => {
  if (typeof str !== "string" || str.charAt(index) === "") {
    return undefined;
  } else {
    return str.charAt(index);
  }
};

// Exercise 6 ******************************************************************************************************************************

// Exercise 7 ******************************************************************************************************************************

// Exercise 8 ******************************************************************************************************************************

// Exercise 9 ******************************************************************************************************************************
