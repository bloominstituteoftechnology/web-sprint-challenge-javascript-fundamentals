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

//A function is called “nested” when it is created inside another function. Nested function is a closure. In this way inner function have acces to outer function.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(n) {
  //return n*(n+1)/2;
  let result=0;
  for (let i = 1; i <= n; i++) 
        result += i; 
  
    return result;
}
console.log(summation(5));