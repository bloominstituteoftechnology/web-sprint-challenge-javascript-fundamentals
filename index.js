//🚀🚀🚀 ==== Topic #1 Closures ==== 🚀🚀🚀//
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
myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀: 

// The code is using closure to reach outside of the function. The nested function can access the variable internal because it is a child function of MyFunction and there for has inheretence. 



/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. Note, you may use a for loop for this function if you wish */


function summation(numbah){
  let numberr = 0;
  for (let i = 1; i <= numbah; i++){
    numberr += i;
  }
  return numberr;
}
console.log(summation(5));


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
  The zoos want to display both the scientific name and the animal name in front of the habitats. Populate the displayNames array with only the animal_name and scientific_name of each animal. displayNames will be an array of strings, and each string should follow this pattern: "Name: Jackal, asiatic, Scientific: Canis aureus."
  */
  
  zooAnimals.forEach(item){
    return `${animal_name} , ${scientific_name}`
  }
   
  
  

  /* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
  The zoos need a list of all their animal's names (animal_name only) converted to lower case. Using map, create a new array of strings named lowCaseAnimalNames, each string following this pattern: "jackal, asiatic". Log the resut.
  */
  function lowCaseAnimalNames (){
  const lowerCaseNames = zooAnimals.map(item => item.animal_name.toLowerCase())
  console.log(lowerCaseNames);
  }
  /* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
  The zoos are concerned about animals with a lower population count. Using filter, create a new array of objects called lowPopulationAnimals which contains only the animals with a population less than 5.
  */
  function lowPopulationAnimals(){
    const lowPopulationAnimals = zooAnimals.filter(function(population))
    if (population <= 4)
    }
  
  console.log(lowPopulationAnimals);

  /* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
  The zoos need to know their total animal population across the United States. Find the total population from all the zoos using the .reduce() method. Remember the reduce method takes two arguments: a callback (which itself takes two args), and an initial value for the count.
  */
  function USApop(/*Your Code Here*/){
    /*Your Code Here*/
  }
  
  
  // 🦁🦁🦁 Callbacks 🦁🦁🦁  
  /* 🦁🦁🦁 Step 1: Create a higher-order function 🦁🦁🦁
    * Create a higher-order function named consume with 3 parameters: a, b and cb
    * The first two parameters can take any argument (we can pass any value as argument)
    * The last parameter accepts a callback
    * The consume function should return the invocation of cb, passing a and b into cb as arguments
  */
  function consume(/*Your Code Here */){
    /*Your Code Here */
  }
 
  
  /* 🦁🦁🦁 Step 2: Create several functions to callback with consume(); 🦁🦁🦁 */
 // 🦁🦁🦁 Create a function named add that returns the sum of two numbers 🦁🦁🦁
  function add(/*Your Code Here */){
    /*Your Code Here*/
  }
// 🦁🦁🦁 Create a function named multiply that returns the product of two numbers 🦁🦁🦁
  function multiply(/*Your Code Here */){
   /*Your Code Here */
  }

 // 🦁🦁🦁 Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!" 🦁🦁🦁
  function greeting(/*Your Code Here */){
   return /*Your Code Here */
  }
  
  // 🦁🦁🦁 Step 3: Check your work by un-commenting the following calls to consume(): 🦁🦁🦁 
  // ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
  // console.log(consume(2, 2, add)); // 4
  // console.log(consume(10, 16, multiply)); // 160
  // console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
  
  
// 🦁💪 Stretch: If you haven't already, convert your array method callbacks into arrow functions 🦁💪
 




// 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //
//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴
/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height which can be initialized as an object
*/
function CuboidMaker(/*Your Code Here */){
  /*Your Code Here */
}


/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  Formula for cuboid volume: length * width * height   */





/* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
  Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  Formula for cuboid surface area of a cube: 
  2 * (length * width + length * height + width * height)  */





/* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */





// 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
// ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130
 

// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//🦄🦄🦄 1. Take your prototypes from above and refactor into class syntax. Please rename your class CuboidMakerTwo and your object cuboidTwo 🦄🦄🦄
class CuboidMakerTwo{

}


//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
// console.log(cuboidTwo.volume()); // 100
// console.log(cuboidTwo.surfaceArea()); // 130





// 🦄 💪 Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area. 🦄 💪
  





  /* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
  function foo(){
    console.log('its working');
    return 'bar';
  }
  export default{
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