//arrgument with no parameters

function makeaCar() {
  console.log(arguments); //returns an array like object
  console.log(Array.isArray(arguments)); //returns an array like object
  console.log(arguments[0]); //returns the first argument 11
  Array.from(arguments).forEach((value) => console.log(value)); //55
  const total = Array.from(arguments).reduce((prev, next) => prev + next);
  console.log(total); //165
}

makeaCar(11, 22, 33, 44, 55);

//argument is concidered as old way

//new way
function makeCarPrice(numberOne, ...params) {
  //... is Rest operator
  console.log(numberOne, params); //99, [44,55,66,77,88,99
  console.log(Array.isArray(params)); //true
  const total = params.reduce((prev, next) => prev + next);
  console.log(total); //429
}

makeCarPrice(33, 44, 55, 66, 77, 88, 99);
