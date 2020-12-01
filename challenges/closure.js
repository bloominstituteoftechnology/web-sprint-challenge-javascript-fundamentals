// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";
  console.log(external)
  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//  
//  when youre inside the function you can reach out to access other variables, but on the outside you cannot reach in the scope
/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
//  create the sumnation variable 
const summnation = (num => {
  //  count = 0 is the place holder to start 
  let count = 0
  //  create counter function seperate from the let variable 
    function counter(){
      for( let i = 0; i <= num; i ++){
        count += i 
    }
    

  }
  // invoke the counter here to run 
  counter()
    return count 
})
console.log(summnation(5))
