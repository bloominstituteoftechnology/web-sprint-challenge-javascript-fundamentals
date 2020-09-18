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

// Explanation: The reason that nested function can inherit the variable internal is because it is nested inside of a parent function which contains that variable name, hence a child can always inherit from its parent but not the other way around. So its really as simple as that when calling the function it first checks its local memoy and when it doesnt find it there it look up to its parent in which case the parent has it, other wise it would continue on to global memory and try to find it there.


/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
 function summation(param){
  function countingArr(){counter = 0
  counterArray = []
  for(i=0; i <= param; i++){
     
     counterArray.push(counter ++)
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  
  return counterArray.reduce(reducer)
  }

 
  return countingArr()
}
console.log(summation(6))
