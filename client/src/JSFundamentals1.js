// "Exercise 1";******************************************************************************************************************************

// #1 Check if the sentence includes the word "Hello".

// 1. console.log('Sentence DOES NOT contain the word "Hello"');
// 2. console.log('Sentence DOES contain the word "Hello"');
// 3. if (sentence.includes('Hello')) {
// 4. let sentence = 'Hello world!';
// 5. } else {
// 6. }

// ANSWER
// let sentence = "Hello World";

// if (sentence.includes("Hello")) {
//   console.log('Sentence DOES contain the word "Hello"');
// } else {
//   console.log('Sentence DOES NOT contain the word "Hello"');
// }

// #2 Get the specified item in the nested array

// 1. const first = 0;
// 2. const array = [[1, [2, 3]]];
// 3. console.log(array[first][second][third])
// 4. const second = 1;
// 5. const third = 0;

// ANSWER
// const first = 0;
// const second = 1;
// const third = 0;
// const arrat = [[1, [2, 3]]];
// console.log(array[first][second][third]);

// #3 Log all numbers from 10 to 5

// 1. while (currentNum >= min) {
// 2. let currentNum = 10;
// 3. console.log(currentNum);
// 4. let min = 5;
// 5. currentNum = currentNum - 1;
// 6. }

// ANSWER
// let min = 5;
// let currentNum = 10;
// while (currentNum >= min) {
//   console.log(currentNum);
//   currentNum -= 1;
// }

// #4 Reverse the string to check for hidden messages

// 1. const reversedArray = letterArray.reverse();
// 2. console.log('Your message:', reversedString)
// 3. const letterArray = encodedMessage.split('');
// 4. const encodedMessage = 'gnidliub gruobuaF eht rednu deirub si erusaert ehT';
// 5. if (reversedString.includes('treasure')) {
// 6. }
// 7. const reversedString = reversedArray.join('');

// ANSWER
// const encodedMessage = "gnidliub gruobuaF eht rednu deirub si erusaert ehT";
// const letterArray = encodedMessage.split("");
// const reversedArray = letterArray.reverse();
// const reversedString = reversedArray.join("");
// if (reversedString.includes("treasure")) {
//   console.log("Your message: ", reversedString);
// }

// #5 Add all the numbers from 10 to 0

// 1. total = total + count;
// 2. while (count > 0) {
// 3. let total = 0;
// 4. count = count - 1;
// 5. console.log('The total is:', total)
// 6. let count = 10;
// 7. }

// ANSWER
// let count = 10;
// let total = 0;
// while (count > 0) {
//   total += count;
//   count -= 1;
// }
// console.log("The total is: ", total);

// #6 Check if the array includes a specific number

// 1. }
// 2. let includesNumber;
// 3. console.log('Array includes the number!')
// 4. for (let i = 0; i < array.length; i++) {
// 5. let item = array[i];
// 6. if (item === numberToSearchFor) {
// 7. let numberToSearchFor = 5;
// 8. let array = [1, 3, 7, 4, 5, 2, 1];
// 9. }

// ANSWER
// let array = [1, 3, 7, 4, 5, 2, 1];
// let numberToSearchFor = 5;
// let includesNumber;
// for(let i=0; i < array.length; 1++) {
//     let item= array[i];
//     if(item === numberToSearchFor){
//         console.log('Array includs the number!');
//     }
// }

// "Exercise 2";******************************************************************************************************************************

// Expected Output
// It is should print to the console the numbers 1, 2, 3, 4, 5.
function exercise2() {
  for (let num = 1; num < 6; num++) {
    console.log(num);
  }
}

// "Exercise 3";******************************************************************************************************************************

// Expected Output
// It should output the squares of all numbers between 0 and 12
// eg:
// 0, 1, 4, 9, 16, ...
function exercise3() {
  for (let num = 0; i < 13; i++) {
    console.log(num * num);
  }
}

// "Exercise 4";******************************************************************************************************************************

// Expected Output
// It should output all of the odd numbers between 1 and 25 (including 1 and 25)
//
// Edit only the code between the lines (below)
function exercise4() {
  for (let num = 1; num < 26; num++) {
    if (numb % 2 === 1) {
      console.log(num);
    }
  }
}

// "Exercise 5.1";******************************************************************************************************************************

// Write a loop that will print to the console
// all of the integers from 0 to 100.
function exercise5_1() {
  let num = 0;
  while (num < 101) {
    console.log(num);
    num += 1;
  }
}

// "Exercise 5.2";******************************************************************************************************************************

// Write a loop that will print to the console all of the integers from 5 to 45.
function exercise5_2() {
  for (let num = 5; num < 46; num++) {
    console.log(num);
  }
}

// "Exercise 5.3";******************************************************************************************************************************

// Write a loop that will print to the console
// all of the EVEN integers from 1 to 50.
function exercise5_3() {
  for (let num = 1; num < 51; num++) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}

// "Exercise 5.4";******************************************************************************************************************************

// Write a loop that will print to the console
// all of the EVEN integers from 36 to 0.
function exercise5_4() {
  for (let num = 36; num >= 0; num--) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
}

// "Exercise 5.5";******************************************************************************************************************************

// Write a loop that will iterate from 0 to 10.
// For each iteration, it should check whether a number is even or odd
// and display that state along with the number.
// e.g.
// 0 is even
// 1 is odd
// 2 is even
// ...
function exercise5_5() {
  for (let num = 0; num < 11; num++) {
    if (num % 2 === 0) {
      console.log(`${num} is even.`);
    } else {
      console.log(`${num} is odd.`);
    }
  }
}

// "Exercise 6";******************************************************************************************************************************

// Write a loop that will output every hour of the day (0 to 23) and
// determine whether it is time to sleep, eat or train.
//
// These are the hours alloted to each activity.
// - Sleep between 22h and 5h
// - Eat at 6h, 12h and 18h
// - The rest of the time is spent training.
//
// Expected Output
// ...
// It's 10h. Time to train!
// It's 11h. Time to train!
// It's 12h. Time to eat!
// It's 13h. Time to train!
function exercise6() {
  for (let hour = 0; hour < 24; hour++) {
    if (hour === 6 || hour === 12 || hour === 18) {
      console.log(`It's ${hour}. Time to eat!`);
    }
    if (hour < 6 || hour > 21) {
      console.log(`It's ${hour}. Time to sleep!`);
    } else if (
      hour > 6 &&
      hour < 22 &&
      hour !== 6 &&
      hour !== 12 &&
      hour !== 18
    ) {
      console.log(`It's ${hour}. Time to train!`);
    }
  }
}

// "Exercise 7";******************************************************************************************************************************

// Write a program that will output the sum of all of the multiples of four
// between 0 and 5000
function exercise7() {
  let sum = 0;
  for (let num = 0; num < 5001; num++) {
    if (num % 4 === 0) {
      sum += num;
    }
  }
  console.log(sum);
}

// "Exercise 8";******************************************************************************************************************************

// Write a program that goes through every number from 1 to 100, and follows the following rules:
//   - If the number is divisible by 3 (eg. 6), print "Fizz"
//   - If the number is divisible by 5 (eg. 10), print "Buzz"
//   - If the number is divisible by 3 AND 5 (eg. 15), print "FizzBuzz"
//   - For all other numbers, print the number itself.
// e.g.
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
function exercise8() {
  for (let num = 1; num < 101; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
      console.log("FizzBuzz");
    }
    if (num % 3 === 0 && num % 5 !== 0) {
      console.log("Fizz");
    }
    if (num % 5 === 0 && num % 3 !== 0) {
      console.log("Buzz");
    } else if (num % 3 !== 0 && num % 5 !== 0) {
      console.log(num);
    }
  }
}

// "Exercise 9";******************************************************************************************************************************

// Write a loop that makes seven calls to console.log to
// output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
function exercise9() {
  let row = "";
  for (let num = 1; num < 8; num++) {
    row += "#";
    console.log(row);
  }
}

// "Exercise 10";******************************************************************************************************************************

// Write a program that creates a string that represents an 8×8 grid.
// At each position of the grid there is either an "_" or a "#" character.
// The characters should form a chessboard.
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
function exercise10() {
  for (let row = 1; row < 9; row++) {
    if (row % 2 === 0) {
      console.log("_#_#_#_#");
    } else {
      console.log("#_#_#_#_");
    }
  }
}

// "Exercise 11";******************************************************************************************************************************

// Write a program that generates a list of all prime numbers from 1 and 200.
// Prime numbers have exactly two factors.
// A prime number is a number that is ONLY divisible by 1 and itself.
//
// 6 -> NOT prime (2 * 3)
// 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
// 12 -> NOT prime (3 * 4, 2 * 6)
// 37 -> PRIME ()
//
//
// EXPECTED OUTPUT: [2, 3, 5, 7, 11, 13, ...]
function exercise11() {
  let array = [];

  for (let num = 1; num < 201; num++) {
    let prime = true;

    for (let x = 2; x < 201; x++) {
      if (x !== num && num !== 1 && num % x === 0) {
        prime = false;
      }
    }

    if (num !== 1 && prime === true) {
      array.push(num);
    }
  }
  console.log(array);
}

// The Fibonacci sequence is a sequence of numbers where every value is the sum
// of the previous 2 values.
// It looks like this:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Why?
// 13 + 21 = 34
// 8 + 13 = 21
// 5 + 8 = 13
//
// Every number in the sequence is the result of adding the two numbers to
// the left. The sequence starts with "0, 1", and every number beyond that
// can be calculated by adding the previous 2 numbers.
//
// Write a program which calculates the 50th number in the fibonacci sequence
// (The numbers get big quickly!)

function exercise12() {
  const ZERO = 0;
  const ONE = 1;
  let fibNum = 0;
  let sum = 0;

  for (let counter = 1; counter < 25; counter++) {
    if (sum < 1) {
      console.log(ZERO);
      sum = ZERO + ONE;
    }
    if (sum === 1) {
      sum += fibNum;
      fibNum += sum;
      console.log(sum);
      console.log(fibNum);
    }
    if (sum > 1) {
      sum += fibNum;
      fibNum += sum;
      console.log(sum);
      console.log("fibNum: " + fibNum);
    }
  }
}
