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

//*Because it's within the function scope.


/* Task 2: Counter */
 
/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation () {
 let counter = 0;
 return counter + 1 + 2 + 3 + 4; 
}

// function summation() {
//    let count = 0;
//    return function() {
//      count = count + 1;
//      return count;
//    }
// }

// const summation = () => {
//   let count = 0;
//   return function() {
//     const = count += 1;
//     return count;
//   }
// };
 

console.log(summation(4));