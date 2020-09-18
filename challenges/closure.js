// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//**** Since 'internal' is not referenced inside the nestedFunctions internal scope, it looks outward for the context. Functions run on a one-way street, although outside sources can not look into them for context, they can look outside of themselves for context.

/* Task 2: Counter */

function summation(num) {
  let numSet = []; //empty array, in function so resets after each use

  for (let i = 0; i <= num; i++) {
    numSet.push(i);
  } //incrementally add numbers to array w/ for loop

  let total = numSet.reduce(function (acc, item) {
    return acc + item;
  }) //sum up the array function

  return total;
}
summation(4);
/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */