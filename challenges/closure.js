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
//Because it's a callback function, so it can reach out of its current scope into external scopes.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(number) {
    let number1 = 0;
    let sum = 0;

    while (number1 <= number) {
        sum = sum + number1;
        number1++;
    }
    return sum;
}

console.log(summation(4));