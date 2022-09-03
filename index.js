//🚀🚀🚀  Topic #1 Closures 🚀🚀🚀//
/* 🚀🚀🚀🤓 Task 1: 🤓🚀🚀🚀 
Study the code below and explain in your own words why nested function can access the variable internal. */

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
//myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀: 

//Because the internal const was defined within the myFunction scope. 




/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Use summation to do the following:
    1. Receive a number as an argument passed from a parameter
    2. Use a counter to return the summation of that number. 
    
🌟 EXAMPLE: invoking `summation(4)` should return 10 because 1+2+3+4 is 10. 
💡 NOTE: you may use a for loop for this function if you wish 
*/

function summation(num) {
  let sum = 0
  for(let i = 0;i<num;i++){
    sum = sum + (i+1)
  }
  return sum
  }
 

// 🦁🦁🦁 Topic 2: ADVANCED Array Methods 🦁🦁🦁
// Given this zoo data from around the United States, follow the instructions below. Use the specific array methods in the requests below to solve the problems.

const zooAnimals = [
    { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
    { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
    { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
    { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
    { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
    { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
    { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
    { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
    { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
    { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
  ];
  
  /* 🦁🦁🦁 Request 1: .forEach() 🦁🦁🦁
  The zoos want to display both the scientific name and the animal name in front of the habitats. 
    1. Receive the zooAnimals array as an argument passed from a parameter 
    2. Use .forEach() to populate a new array called displayNames that will be an array of strings with only the animal name and scientific name of each animal
    3. Return the new array
  💡 NOTE: the array returned should be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
  */

  function animalNames(arr){
    const displayNames = []
    arr.forEach((element) => displayNames.push(`name: ${element.animal_name}, scientific: ${element.scientific_name}`))
    return(displayNames)
  }
  

  /* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
  The zoo needs a list of all their animal's names converted to lower case. 
  Use lowerCaseNames to do the following:
  1. Receive the zooAnimals array as an argument passed from a parameter 
  2. Use .map() to create a new array of strings with the animal's names in lowercase
  3. Return the new array
  🌟 EXAMPLE of returned array: ['jackal, asiatic', .....]
  💡 NOTE: Do some research for other methods that can help help you
  */

  function lowerCaseNames(arr){
    const lowerAnimals = arr.map(x => x.animal_name.toLowerCase())
    return(lowerAnimals)
  }
  
  
  /* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
  The zoo is concerned about animals with a lower population count. 
  Use lowPopulationAnimals to do the following: 
  1. Receive the zooAnimals array as an argument passed from a parameter 
  2. Use .filter() to create a new array of objects which contains only the animals with a population of less than 5
  3. Return this new array
  */

  function lowPopulationAnimals(arr){
    const lowPop = arr.filter(element => element.population < 5)
    return lowPop
  }
  

  /* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
  The zoo needs to know their total animal population across the United States. 
  USe USApop to do the following:
  1. Receive the zooAnimals array as an argument passed from a parameter 
  2. Use the .reduce() method to find the total population from the zoosAnimals array
  3. Return the total population
  💡 NOTE: Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count. Check MDN/W3Schools for syntax!
  */

  function USApop(arr){
    return(arr.reduce((pv,cv) => pv + cv.population,0))
  }
  
  
  // 🦁🦁🦁 Callbacks 🦁🦁🦁  
  /* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
  Use the higher-order function called consume to do the following:
    1. Receive 3 parameters: a, b and cb. The first two parameters (a and b) can take any argument (we can pass any value as an argument) and the last parameter (cb) accepts a callback
    2. Return the invocation of cb taking a and b its arguments
    
    💡 NOTE: The tests for 'consume' will pass if it is created correctly and also after you correctly complete the functions 'add' and 'greeting' below in Step 2.
  */

  function consume(a,b,cb){
    return cb(a,b)
  }
 
  
  // 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁

 /*  Use add to do the following:
 1. Receive two numbers as an argument that are passed in from its first and second parameters
 2. Return the sum of those numbers
 */

function add(a,b){
    return a + b
  }


/* Use multiply to do the following:
1. Receive two numbers as an argument that are passed in from its first and second parameters
2. Return the product of those numbers
*/

function multiply(a,b){
   return a * b
  }


 /* Use greeting to do the following:
1. Receive two strings (a first name and last name) as an argument that are passed in from its first and second parameters
2. Return "Hello {first-name} {last-name}, nice to meet you!"
💡 NOTE: The string returned must match the format above or the test will not pass!
*/

function greeting(a,b){
   return (`Hello ${a} ${b}, nice to meet you!`)
  }
  
  
// 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁 
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!



// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //

//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴

/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use CuboidMaker to do the following:
 - Receives a single argument -- an object with the follwoing keys:
  + length
  + width
  + height
- Instances of CuboidMaker should initialize `length`, `width` and `height` properties
*/

function CuboidMaker(dimensions){
  this.length = dimensions.length
  this.width = dimensions.width
  this.height = dimensions.height
  }


/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  💡 NOTE: Formula for cuboid volume: length * width * height   
*/

CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height
}
  


/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
  Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  💡 NOTE: Formula for cuboid surface area: 2 * (length * width + length * height + width * height)  
*/

CuboidMaker.prototype.surfaceArea = function() {
  return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))
}


/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker (not auto graded)🐴🐴🐴
  Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */

const cuboid = new CuboidMaker ({
  length: 4,
  width: 5,
  height: 5
})



// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
 

// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//Using CuboidMakerTwo, take your prototypes from above and refactor into class syntax. Then, create an object called cuboidTwo that uses the new keyword to use our CuboidMakerTwo class.
 
class CuboidMakerTwo{
  constructor(attrs) {
    this.height = attrs.height
    this.length = attrs.length
    this.width = attrs.width
  }
  surfaceArea() {
      return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height))
    }
  volume() {
    return this.length * this.width * this.height
  }
}




//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
// console.log(cuboidTwo.volume()); // 100
// console.log(cuboidTwo.surfaceArea()); // 130





  


  /* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
  function foo(){
    console.log('its working');
    return 'bar';
  }
  foo();
  module.exports = {
    foo,
    summation,
    animalNames,
    lowerCaseNames,
    lowPopulationAnimals,
    USApop,
    consume, 
    add,
    multiply,
    greeting,
    CuboidMaker,
    CuboidMakerTwo
  }
