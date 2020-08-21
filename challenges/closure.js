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

// Since nestedFunction is a child of myFunction and internal is a variable within myFuynction it can reach out and use that variable. If internal would have been a variable within nestedFunction and you tried to return internal from myFunction it would return undefined

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(num){
  let sum = 0
  for(let i=0; i<num; i++){
    sum += i
  }
  return sum + num
}

console.log(summation(4))
