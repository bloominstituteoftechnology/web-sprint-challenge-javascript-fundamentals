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
/*
  The reason why nestedFunction can access the variable internal
  is because the variable is within the myFunction scope. Closure
  means that a function can access variables within or above its
  scope. 
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(parameter) 
{ 
  let count = 0; 
  for(let i = 0; i <= parameter; i++)
  { 
    count += i; 
  }
  
  return count; 
}

console.log(summation(4));