//Not a Number (NaN)
console.log(NaN === NaN); //false

console.log(Number.isNaN(NaN)); //true

console.log(Number("55px")); //NaN

//isNaN returns boolean
const result = Number("55px");
console.log(isNaN(result)); //true
console.log(isNaN("i a String")); //true

console.log(Number.isNaN("i am another String")); //false  (Number(true:string))

console.log(Number.isInteger(66.99)); //false
console.log(Number.isInteger(66)); //true

console.log(Number.NaN); //NaN introduced in ES6
