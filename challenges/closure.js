// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


//const external = "I'm outside the function";

//function myFunction() {
 // console.log(external);
 // const internal = "Hello! I'm inside myFunction!";

  //function nestedFunction() {
    //console.log(internal);
  //};
  //nestedFunction();
//}
//myFunction();

// Explanation: 
// The closure which is the function nestedFunction is bundled together with references to its lexical environment. The closure function gives it access to the outer function scope from the inner function.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(a){
  let counter = []
 for (let i = 1; i <= a; i++){
   counter.push(i)
 }
 return counter.reduce(function(a, b){
   return a + b
 })
 
}
console.log(summation(4));