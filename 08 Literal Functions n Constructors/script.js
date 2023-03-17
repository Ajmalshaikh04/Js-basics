// literal
const literalNumber = 10;
console.log(literalNumber);

console.log(Number);
console.log(Number());
//function syntax
//perform a type-conversion in a non-constructor context
console.log(Number(55));
console.log(Number("33")); // if u declare in quotes then it will convert to number
console.log(Number("44px")); //NaN (Not a Number)

//constructor syntax,creates a wrapper object

console.log(new Number(66)); //functions r first class citizens they r objects and we cane invoke them with new keyword
//will return number object premitive value of 66

console.log(new Number("44px")); //return object as NaN (Not a Number)
