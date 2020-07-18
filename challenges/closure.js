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

//Because when you have a nested function, it can access only within the scope of the function its in. The child function can only access the parents function data.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. 
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num){
  let sum = 0;
  for (let i = 0; i <= num; i++){
    sum += i;
  }
  return sum;
}
console.log(summation(4));


// function summation(){
//   let counter = 0; 
//   function sum(){counter += 1;}
//     sum();
//     return counter;
//   }


// function summation(num){
//   for(let i = 0; num.length; i++){

//   }
// }