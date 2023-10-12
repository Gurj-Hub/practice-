// **********************    JAVASCRIPT ARRAY METHODS    ************************

//1. at() : takes an integer value returns item at that index ////////////////////////////////////////////////////////////////////////////////
const array1 = [23, 24, 29, Infinity];

console.log(`At index 1, we have ${array1.at(1)}.`);
// consoles out "At index 1, we have 24."

console.log(`At index -1, we have ${array1.at(-1)}.`);
// consoles out "At index -1, we have 29."

//2. concat()  : merges two or more arrays into a new array without modifying the originals //////////////////////////////////////////////////////////
const arr2a = [1, 2, 3];
const arr2b = [4, 5, 6];
const arr2c = [7, 8, 9];

const mergedArrays = arr2a.concat(arr2b).concat(arr2c);
// consoles out "[1,2,3,4,5,6,7,8,9]"

//3. copyWithin()  : copies remainder of array (starting at 2nd value) and replaces the values starting at 1st value with remainder- modifies original
const arr3 = [1, 2, 3, 4];

arr3.copyWithin(0, 3);
console.log(arr3);
// consoles out [4,2,3,4]

arr3.copyWithin(0, 2);
console.log(arr3);
// consoles out [3,4,3,4]

//4.  entries()  : returns an iterator object for the key-value airs (index and value) in an array //////////////////////////////////////////////////////////
const arr4 = ["a", "b"];

const iterator = arr4.entries();
console.log(iterator.next());
// consoles out {value: [0,"a"], done: false}

console.log(iterator.next().value);
// consoles out [0,"a"]

//5. every()  : tests if all elements in the array pass a condition (function) //////////////////////////////////////////////////////////////////////////////
const arr5 = [1, 2, 3, 4, 5];

const greaterThanZero = arr5.every((element) => {
  return element > 0;
});

console.log(greaterThanZero);
// consoles out true

//6. fill()  : changes all elements in an array to a specified value /////////////////////////////////////////////////////////////////////////////////////////
const arr6 = [1, 2, 3, 4, 5, 6];

arr6.fill(69);
console.log(arr6);
//consoles out [69,69,69,69]

//7. filter()  : creates a new array with elements that pass condition (function) ////////////////////////////////////////////////////////////////////////////
const arr7 = [1, 2, 3, 4, 5, 6, 7];

const filtered = arr7.filter((element) => element > 1);

console.log(filtered);
// consoles out [2,3,4,5,6,7]

//8. find()  : returns the first element in an array that satisfies a condition (function) - if none satisfy, returns undefined///////////////////////////////
const arr8 = [1, 2, 3, 4, 5, 6, 7, 8];

const found = arr8.find((element) => element > 1);
console.log(found);
// consoles 2

//9. findIndex()  : returns index of first element that satisfies a condition (testing function) - if none satisfy, returns undefined ///////////////////////
const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const indexFound = arr9.findIndex((element) => {
  return element > 5;
});

console.log(indexFound);
// consoles out 5

//10. findLast()  : returns the first element (from reverse) in an array that satisfies a condition (function) - if none satisfy, returns undefined/////////
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const foundLast = arr10.findLast((element) => {
  return element > 8;
});

console.log(foundLast);
// consoles out 10

//11. findLastIndex()  : iterates array in reverse, finds index of first element that satisfies testing function - if none satisfy, returns -1 /////////////
const arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const foundLastIndex = arr11.findLastIndex((element) => element < 6);

console.log(foundLastIndex);
//console out 4

//12. flat()  : creates new array with all nested arrays concatenated recursively up (removes the 1st nested arrays brackets)///////////////////////////////
const arr12 = [1, [2, [3]]];

const flattenedArray = arr12.flat();

console.log(flattenedArray);
//consoles out [1,2,[3]]

//13. forEach()  : executes a provided function for each element of the array
const arr13 = [1, 2, 3, 4, 5, 6, 7];

arr13.forEach((element) => console.log(`Number: ${element}`));
//consoles out "Number: (every value within the array once each)"

//14. from()  : creates a new copied array from an iterable object or array-like object ///////////////////////////////////////////////////////////////////
const arr14 = Array.from("Fuck you");

console.log(arr14);
// consoles out ["F", "u", "c", "k", " ", "y", "o", "u"]

//15. fromAsync()  : *************************************************************************************************************************

//************************************************************************************************************************************
//************************************************************************************************************************************
//************************************************************************************************************************************
// OTHER PRACTICE FROM LEETCODE\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const findTheDifference = (s, t) => {
  const difference = [];
  const arrS = s.split("");
  const arrT = t.split("");

  arrT.forEach((element) => {
    const foundLetter = arrS.find((letter) => letter === element);

    if (foundLetter === undefined) {
      difference.push(element);
    }
  });
  const stringifiedDifference = difference.toString();

  return stringifiedDifference;
};
// findTheDifference("abcd","adkgibna");

// ************************************************************************
//created an array method that can be used on arrays to return last index value

Array.prototype.last = function () {
  if (this.length > 0) {
    return this[this.length - 1];
  } else {
    return undefined;
  }
};

// const array = [1,2,3,4,{"a":25}];

// console.log(array.last());

// ************************************************************************
//function increments per call with closure functionality

var createCounter = function (n) {
  let counter = 0;
  let sum = 0;

  return function () {
    sum = n + counter;
    counter++;
    console.log(sum);
    return sum;
  };
};

// const counter = createCounter(10);

// ************************************************************************
//executes an event after a certain time with setTimeout
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

// ************************************************************************
//array reduce function - 2 examples
var reduce = function (nums, fn, init) {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  console.log(init);
  return init;
};

reduce(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr * curr;
  },
  100
);
const nums = [1, 2, 3, 4, 5];
const fn = (a, b) => {
  return a + b;
};

// const reducerFxn = nums.reduce(fn, 100);

// console.log(reducerFxn);

// ************************************************************************
//composite function writing - USING REDUCERIGHT ARRAY METHOD
const compose = (functions) => {
  if (functions.length === 0) {
    return (x) => x;
  }
  //apply reduceRight method to array functions param(an array)
  return functions.reduceRight(function (prev, next) {
    //return of the reduceRight method to functions array like reduce method
    //give argument x(input) to prev fxn and apply next fxn to prev one
    return (x) => {
      return next(prev(x));
    };
  });
};
// ************************************************************************
// filtering array WITHOUT FILTER method
const filter = (arr, fn) => {
  let filteredArr = [];

  //using forEach to loop through all elements of arr (need index in-case fxn operates on indexes)
  arr.forEach((element, index) => {
    //if values passed to fxn evaluate to TRUE
    if (fn(element, index)) {
      filteredArr.push(element);
    }
  });

  return filteredArr;
};

// ************************************************************************
// mapping array WITHOUT MAP method
const mappingArr = (arr, fn) => {
  let transformedArr = [];

  //using forEach to loop through all elements of arr
  arr.forEach((element, index) => {
    //setting transformed arrays values to the modified arr values
    transformedArr[index] = fn(element, index);
  });

  return transformedArr;
};

// ************************************************************************
// GENERATOR Function for FIB Sequence

const fibGenerator = function* () {
  let current = 0;
  let next = 1;
  let placeholder;

  while (true) {
    yield current;
    console.log(current);
    placeholder = current;
    current = next;
    next += placeholder;
  }
};

const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
gen.next().value;
gen.next().value;
gen.next().value;

// ************************************************************************
// counter with INCREMENT/DECREMENT/RESET functions

const createCounter = (init) => {
  let currentValue = init;

  return {
    increment: () => {
      ++currentValue;
      console.log(currentValue);
    },
    decrement: () => {
      --currentValue;
      console.log(currentValue);
    },
    reset: () => {
      currentValue = init;
      console.log(currentValue);
      return init;
    },
  };
};

const counter = createCounter(5);
counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4
const createCounter = (init) => {
  let currentValue = init;

  return {
    increment: () => {
      ++currentValue;
    },
    decrement: () => {
      --currentValue;
    },
    reset: () => {
      currentValue = init;
      return init;
    },
  };
};

// ************************************************************************
// EXTRACTING SPECIFIC AMOUNTS OF ARRAY + REMAINDER

const chunk = (arr, size) => {
  let outputArray = [];
  const nberOfRotations = Math.floor(arr.length / size);

  if (arr.length === 0) {
    return arr;
  }
  if (arr.length > size) {
    for (let i = 0; i < nberOfRotations; i++) {
      const spliced = arr.splice(0, size);
      outputArray.push(spliced);
    }
  }
  if (arr.length <= size && arr.length !== 0) {
    outputArray.push(arr);
  }
  return outputArray;
};

// chunk([1,9,6,3,2],3);
