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

// it can access the variable 'internal' because both the variable and the nested function are inside of the original function, so it (the nested function) is seen as a part of the outer function and can access the variables of the outer function though the properties of higher order functions
// it is basically just allowing the inner function to access variables in the outer function because it is also a part of that outer function itself


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num){
  for(let i = 1; i >= num; i++){
    
  }
}