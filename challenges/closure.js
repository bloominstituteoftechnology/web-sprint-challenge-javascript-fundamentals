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
//nested Function can access variable Internal because they are both within the same lexical environment, which is within the my Function.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num) {
  let totalNum = 0;
  function counter() {
    for (let i = 0; i <= num; i++) {
      totalNum += i;
    }
  }
	counter();
	return totalNum;
};
console.log(summation(4));