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

// Write an arrow function accepts an array of values and returns a new array of stringified values.
const convertToString = (arr) => {
  const stringifiedValues = arr.map((element) => {
    return element.toString();
  });
  return stringifiedValues;
};

// Exercise 7 ******************************************************************************************************************************

// Write an arrow function accepts an array of objects as well as an object and returns
// a new array of objects with the object added to each element of the array.
//
// e.g. insert([{ name: "Bob" }, { name: "Josie" }], {"isAvailable": false});
// returns:
// [
//   { name: "Bob", isAvailable: false },
//   { name: "Josie", isAvailable: false },
// ];
// - If the second parameter is not an object, return the original array.
const insert = (arr, obj) => {
  if (typeof obj !== "objet") {
    return arr;
  } else {
    const addedObjToArray = arr.map((object) => {
      return { ...object, ...obj };
    });
    return addedObjToArray;
  }
};

// Exercise 8 ******************************************************************************************************************************

// Write an arrow function accepts an indeterminate amount of numbers as arguments and returns the sum of the squares of all the numbers.
//
// - If any element is not a number, skip it.
// - If no arguments are passed, return `undefined`
const addNumbers = (...nums) => {
  let sum = 0;

  if (typeof nums == "") {
    return undefined;
  }

  const filteredArgs = nums.filter((number) => {
    return typeof number === "number";
  });

  filteredArgs.forEach((num) => {
    sum += num * num;
  });

  return sum;
};

// Exercise 9 ******************************************************************************************************************************

// Write an arrow function accepts two arrays and returns a new array with the elements that are unique to array1
// and array2.
// An element is unique if it only appears in one of the arrays.
// It is allowed to appear multiple times in the same array.
//
// - If there are no unique elements return an empty array.
// - If the inputs are anything other than arrays, return undefined.

// For example:
// uniqueElements([0,1,2,3], [1,3,4,5]); // [0,2,4,5]
// uniqueElements([1,2,3], [3,2,1]); // []
// uniqueElements(2); // undefined, not an array

// HINTS:
//   - You'll need to do a nested iteration, to compare every item in array 1
//     to every item in array 2
//   - You will need to run your logic 2 times, flipping the order:
//     - Once to get the unique elements in the first array
//     - A second time to get the unique elements in the second array
//
// THIS IS A VERY HARD PROBLEM.
// If you struggle with it, set it aside. In a few weeks, you might find the
// solution comes more quickly :)
const uniqueElements = (arr1, arr2) => {
  let nonUniqueValues = [];
  let uniqueValues = [];

  arr1.forEach((element1) => {
    arr2.forEach((element2) => {
      if (element1 === element2) {
        nonUniqueValues.push(element1);
      }
    });
  });

  arr1.forEach((number) => {
    if (nonUniqueValues.includes(number) !== true) {
      uniqueValues.push(number);
    }
  });

  arr2.forEach((number) => {
    if (nonUniqueValues.includes(number) !== true) {
      uniqueValues.push(number);
    }
  });

  return uniqueValues;
};
