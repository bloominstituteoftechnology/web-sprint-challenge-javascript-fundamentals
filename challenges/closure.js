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
//The nested function can access the variable internal because of the lexical scope of the outer function. An internal function can look out of it's local scope into the global scope to try to find the function it needs. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
let summation = function(num)
{
  // for(let i = 0; num > i; i++)
  // {
  //   return i+
  // }
  let counter = 0;

 let addSumToCounter = function()
  {
    for(let i = 1; i <= num; i++)
      {
        counter += i;
      }
  }
 addSumToCounter();
 return counter
} 
summation(4);

console.log(summation(4))