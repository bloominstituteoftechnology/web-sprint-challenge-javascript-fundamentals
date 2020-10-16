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
/* The nested function can access the varible internal becase it is calling it from within the bigger function. If it was not in myFunction it would not be able to access the nested function. It is the functions job to access the nested function.*/ 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

  function summation(arr){
    let fullarr = [];
    let sum=0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    
   for (let i = arr[0]; i <=arr [1]; i++){
     fullarr.push(i)
   }
   sum = fullarr.reduce(reducer);
   return sum;
  }


