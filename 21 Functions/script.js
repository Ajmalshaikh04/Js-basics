//Functions

//hoisting
// console.log(makeCar);
// console.log(makeMobile);
// console.log(makeFood);
// console.log(makeArrowFunction);

//1.Function Declarations
function makeCar() {
  console.log("Makking a car");
}
console.log(makeCar); //returns a function object
makeCar(); //Makking a car

//2.Function Expressions (anonymous functions or named functions)
const makeMobile = function () {
  console.log("Makking a Mobile");
};
console.log(makeMobile); //returns a function object
makeMobile(); //Makking a Mobile

console.log(makeCar.name); //makeCar

//Arrow Functions
const makeFood = () => {
  console.log("Makking Sea Food");
};
console.log(makeFood); //returns a arrow function object
makeFood(); //Makking Sea Food

//Short Hand Arrow Functions
const makeArrowFunction = () => console.log("Makking Sea Food");
makeArrowFunction(); //Makking Sea Food
