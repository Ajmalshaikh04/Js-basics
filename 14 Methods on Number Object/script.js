//Methods on Number Object
console.log(Number.prototype); //Number.prototype is an object

//DONOT UNCOMMENT THIS IS THE OUTPUT OF THE NUMBER.PROTOTYPE

//v  Number {0, constructor: ƒ, toExponential: ƒ, toFixed: ƒ, toPrecision: ƒ, …}
// > constructor: ƒ Number()
// > toExponential: ƒ toExponential()
// > toFixed: ƒ toFixed()
// > toLocaleString: ƒ toLocaleString()
// > toPrecision: ƒ toPrecision()
// > toString: ƒ toString()
// > valueOf: ƒ valueOf()
// > [[Prototype]]: Object
// [[PrimitiveValue]]: 0

//toFixed() method is prototype function
// dot is called as identifier
console.log((99.445533234).toFixed()); //99 as a string
console.log((99.445533234).toFixed(2)); //99.45 as a string
console.log((99.445533234).toFixed(4)); //99.4455 as a string
console.log(parseFloat((99.445533234).toFixed(4))); //99.4455 as a INT
console.log((99).toFixed(4)); //99.0000 as a string

console.log((99.23452).toPrecision(5)); //99.235 as a string
console.log((99.23452).toPrecision(4)); //99.23 as a string
console.log((99.23452).toPrecision(3)); //99.2 as a string
console.log((99.23452).toPrecision(2)); //99 as a string
console.log((99.23452).toPrecision(1)); //1e+2 as a string

console.log(new Number(99).valueOf()); //99 as a Integer

//RUN ON BROWSER

// 99..toFixed()
// '99'

// 44.55.toFixed()
// '45'

//NOTES

// In JavaScript, objects are king. If you understand objects, you understand JavaScript.

// In JavaScript, almost "everything" is an object.

// Booleans can be objects (if defined with the new keyword)
// Numbers can be objects (if defined with the new keyword)
// Strings can be objects (if defined with the new keyword)
// Dates are always objects
// Maths are always objects
// Regular expressions are always objects
// Arrays are always objects
// Functions are always objects
// Objects are always objects
// All JavaScript values, except primitives, are objects.

// A primitive value is a value that has no properties or methods.

// 3.14 is a primitive value

// A primitive data type is data that has a primitive value.

// JavaScript defines 7 types of primitive data types:
// 1.string
// 2.number
// 3.boolean
// 4.null
// 5.undefined
// 6.symbol
// 7.bigint

// Objects are Variables
// JavaScript variables can contain single values:
// JavaScript variables can also contain many values.

// Objects are variables too. But objects can contain many values.

// Object values are written as key : value pairs (key and value separated by a colon).
// A JavaScript object is a collection of named values
