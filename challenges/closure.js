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

// ***nestedFunction can access the variable internal because functions can go outside the scope just one step when searching for variables outside of itself. This is called a closure.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function summation(a){
  numbers = [];

  for (i = 0; i < a; i++){
    numbers.push(i+1)
  }

  return numbers.reduce( (tot, num) => tot += num );
}
