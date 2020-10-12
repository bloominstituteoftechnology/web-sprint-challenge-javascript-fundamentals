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
/*Nestest function and internal both lay within the function "myFunction." Anything within "myFunction" is considered to be inside of the lexical environment, which gives the nestest function the go-to to reach out and grab that variable.*/


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation (number) {
  let totalNumber = 0;
  
  function counter () {
    for (let i = 0; i <= number; i++) {
      totalNumber += i;
    }
  }
  counter();
  return totalNumber;
};

console.log(summation(6));
