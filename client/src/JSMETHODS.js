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
