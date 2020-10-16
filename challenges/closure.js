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

//myFunction can access the external variable because the external variable has global scope (it is not nested in any block of code or function).
//nestedFunction can access the internal variable because the internal variable is nested inside nestedFunction.
//The internal variable can be run inside myFunction because myFunction is running nestedFunction every time it gets called, and the internal variable is inside nestedFunction.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){
  let summation = 0;
  let num1 = 1;
  for(let i = 0; i < number; i++){
    summation += num1;
    num1 += 1;
  }
  return summation;
}
console.log(summation(4));