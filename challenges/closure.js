// ==== Closures ====

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. 

the nested function can access the variable internal because when myFunction is called it pushes the nestedFunction to the global scope with the internal const being attached as Lexically Scoped Global Reference Data. 

*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();

// Explanation:

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function outer() {
  let counter = 0;
  function adder(num) {
    let holder = [];
    for (let i = 0; i <= num; i++) {
      holder.push(counter++);
    }
    let total = holder.reduce((num, currentNum) => {
      return num + currentNum;
    });
    return total;
  }
  return adder;
}

const summation = outer();

console.log(summation(4));
