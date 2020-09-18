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

/* This is an example of a closure. Nested functions can access variables outside the function. Similar to how 
functions can access global variables. Since 'internal' is declared in 'myFunction', 'nestedFunction' has access to 
that variable. The scope of 'internalFunction' can actually reach the variable 'external'.*/

/* Task 2: Counter */
function summation(integer){
  var sum = 0;
  for(let i = 0; i < integer + 1; i++){
    sum = sum + i;
  }
  return sum;
}

summation(4);
/* Create a function called `summation` that accepts a parameter and uses a counter to 
return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
