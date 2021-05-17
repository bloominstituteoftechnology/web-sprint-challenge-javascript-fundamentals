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
myFunction();

//🚀🚀🚀 ⬇️ 📝 Explanation ⬇️ 📝 🚀🚀🚀: 


/*  A 'nestedFunction' is within the scope of the 'function myFunction' and so is the variable internal, therefore, 'nestedFunction' can access other variables inside the function. */


/* 🚀🚀🚀 Task 2: Counter 🚀🚀🚀 */
/* Use summation to do the following:
    1. Receive a number 
    2. Use a counter to return the summation of that number. 
    
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. Note, you may use a for loop for this function if you wish */


function summation(sumNum) {
  let counter = 0;
  for(let i = 0; i <= sumNum; i++){
    counter = counter + i;
  }
  return counter;
}
 console.log(summation(4));
 

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
  Use animalNames to populate and return the displayNames array with only the animal name and scientific name of each animal. 
  displayNames will be an array of strings, and each string should follow this pattern: "name: {name}, scientific: {scientific name}"
  */

 function animalNames(specific){
    let displayNames = [];
      specific.forEach(names => displayNames.push ('name: ' + (names.animal_name) + ', scientific: ' + (names.scientific_name)))

  return displayNames
}
   //console.log(animalNames(zooAnimals))

  /* 🦁🦁🦁 Request 2: .map() 🦁🦁🦁
  The zoo needs a list of all their animal's names converted to lower case. 
  Using lowerCaseNames use .map() to create a new array of strings with the animal's names in lowercase and return the new array. 
  For example: ['jackal, asiatic', .....]
  */

function lowerCaseNames(arr){
    const lowerCaseNames = [];
    arr.map(function(lowercase){
      return lowerCaseNames.push(lowercase.animal_name.toLowerCase())
    })
    return lowerCaseNames;
  }
  console.log(lowerCaseNames(zooAnimals));
  
  
  /* 🦁🦁🦁 Request 3: .filter() 🦁🦁🦁
  The zoo is concerned about animals with a lower population count. 
  Using lowPopulationAnimals use .filter() to create a new array of objects which contains only the animals with a population of less than 5.
  */

 function lowPopulationAnimals(lowPop){
  return lowPop.filter(animal => animal.population < 5)
}
// console.log(lowPopulationAnimals(zooAnimals))
  

  /* 🦁🦁🦁 Request 4: .reduce() 🦁🦁🦁
  The zoo needs to know their total animal population across the United States. 
  Using USApop find the total population from the zoos array using the .reduce() method. 
  Remember the reduce method takes two arguments: a callback (which itself takes two args - the accumulator and the item), and an initial value for the count.
  */

 function USApop(popCount){
  return popCount.reduce (function (acc, count){return acc + count.population}, 0);
}
// console.log(USApop(zooAnimals))
  
  
  // 🐴🐴🐴 Topic 3: Prototypes 🐴🐴🐴 //
//🐴🐴🐴 Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge. 🐴🐴🐴
/* 🐴🐴🐴 Step 1: Base Constructor 🐴🐴🐴
 Use the constructor function named CuboidMaker to accept properties for length, width, and height which can be initialized as an object
*/

function CuboidMaker(cuboid) {
  this.length = cuboid.length;
  this.width = cuboid.width;
  this.height = cuboid.height;
}

/* 🐴🐴🐴 Step 2: Volume Method 🐴🐴🐴
  Create a method called volume using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
  Formula for cuboid volume: length * width * height   */

  CuboidMaker.prototype.volume = function() {
    console.log(this.length * this.width * this.height);
  };
  



  /* 🐴🐴🐴 Step 3: Surface Area Method 🐴🐴🐴
    Create another method called surfaceArea using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
    Formula for cuboid surface area of a cube: 
    2 * (length * width + length * height + width * height)  */
  
    CuboidMaker.prototype.surfaceArea = function() {
      console.log(
        2 *
          (this.length * this.width +
            this.length * this.height +
            this.width * this.height)
      );
    };
  
  
  
  
  /* 🐴🐴🐴 Step 4: Create a new object that uses CuboidMaker 🐴🐴🐴
    Create an object called cuboid that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid. */
    const cuboid1 = new CuboidMaker({
      length: 4,
      width: 5,
      height: 5
    });
    
    const cuboid2 = new CuboidMaker({
      length: 7,
      width: 3,
      height: 5
    });
  
  
  
  // 🐴🐴🐴 Test your volume and surfaceArea methods by uncommenting the logs below: 🐴🐴🐴
  // ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️ ⬇️
  cuboid1.volume(); // 100
  cuboid1.surfaceArea(); // 130
  cuboid2.volume();
  cuboid2.surfaceArea();

// 🦄🦄🦄 Topic 4: Classes 🦄🦄🦄 //
//🦄🦄🦄 1. Take your prototypes from above and refactor into class syntax. Please rename your class CuboidMakerTwo and your object cuboidTwo 🦄🦄🦄


class CuboidMakerTwo{
  constructor(attrs){
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
  }
  volume() {
    return this.length * this.width * this. height;
  }
  surfaceArea(){
    return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  }
}

const cuboidTwo = new CuboidMaker(4, 5, 5)




//🦄🦄🦄 Test your volume and surfaceArea methods by uncommenting the logs below: 🦄🦄🦄
 console.log(cuboidTwo.volume()); // 100
 console.log(cuboidTwo.surfaceArea()); // 130





// 🦄 💪 Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area. 🦄 💪
  





  /* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
  function foo(){
    //console.log('its working');
    return 'bar';
  }
  export default{
    foo,
    summation,
    animalNames,
    lowerCaseNames,
    lowPopulationAnimals,
    USApop,
    //consume, 
    //add,
    //multiply,
    //greeting,
    CuboidMaker,
    CuboidMakerTwo
  }
