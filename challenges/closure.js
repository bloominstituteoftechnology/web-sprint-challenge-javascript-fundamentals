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
// It's declared in myFunction and passed through the console.log inside of the nested function. Nested functions can access variables outside of their functions especially when they are in declared in global s
/* Task 2: Counter */

function summation(param) {
  let i = 0;
  let sum = 0;
  function innerFunction() {
    while (i < param) {
      i += 1;
      sum += +i;
    }
    console.log(sum);
  };
  innerFunction();
}
summation(4);

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
