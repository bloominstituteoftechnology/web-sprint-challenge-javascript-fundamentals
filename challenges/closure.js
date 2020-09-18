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
// 'nestedFunction' can access the variable 'internal' because of the lexical scope. Lexical means that we can pass information down into another function. 'nestedFunction' is inside of 'myFunction' where the 'internal' variable was created. Thus giving the 'nestedFunction' access to everything within 'myFunction'.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

var summation = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

console.log(summation());
console.log(summation());
console.log(summation());