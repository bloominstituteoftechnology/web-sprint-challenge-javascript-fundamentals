// const zooAnimals = [
//     { animal_name: "Jackal, asiatic", population: 5, scientific_name: "Canis aureus", state: "Kentucky" },
//     { animal_name: "Screamer, southern", population: 1, scientific_name: "Chauna torquata", state: "Alabama" },
//     { animal_name: "White spoonbill", population: 8, scientific_name: "Platalea leucordia", state: "Georgia" },
//     { animal_name: "White-cheeked pintail", population: 1, scientific_name: "Anas bahamensis", state: "Oregon" },
//     { animal_name: "Black-backed jackal", population: 2, scientific_name: "Canis mesomelas", state: "Washington" },
//     { animal_name: "Brolga crane", population: 9, scientific_name: "Grus rubicundus", state: "New Mexico" },
//     { animal_name: "Common melba finch", population: 5, scientific_name: "Pytilia melba", state: "Pennsylvania" },
//     { animal_name: "Pampa gray fox", population: 10, scientific_name: "Pseudalopex gymnocercus", state: "Connecticut" },
//     { animal_name: "Hawk-eagle, crowned", population: 10, scientific_name: "Spizaetus coronatus", state: "Florida" },
//     { animal_name: "Australian pelican", population: 5, scientific_name: "Pelecanus conspicillatus", state: "West Virginia" },
//   ];




//   let populationTotal = zooAnimals.reduce((total, curVal) => (total += curVal.population), 0);
//   console.log(populationTotal);
  

// const lowPopulationAnimals = zooAnimals.filter(x => x.population < 5)
// console.log(lowPopulationAnimals);


// const lowCaseAnimalNames = zooAnimals.map(x => x.animal_name.toLowerCase())
// console.log(lowCaseAnimalNames);
  
//   const displayNames = [];
// zooAnimals.forEach((item) => displayNames.push(`Name: ${item.animal_name}, Scientific: ${item.scientific_name}`));
// console.log(displayNames);



// function summation(number) {
//   let arr = Array.from({ length: number }, (v, k) => k + 1);
//   return arr.reduce((a, b) => a + b, 0)
// }

// console.log(summation(4));



function CuboidMaker(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
}




CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
}


CuboidMaker.prototype.surfaceArea = function() {
  return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);



