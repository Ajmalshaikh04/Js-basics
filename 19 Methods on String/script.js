console.log(String.prototype); //String Object

//OUTPUT:

// String {'', constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
// anchor: ƒ anchor()
// at: ƒ at()
// big: ƒ big()
// blink: ƒ blink()
// bold: ƒ bold()
// charAt: ƒ charAt()
// charCodeAt: ƒ charCodeAt()
// codePointAt: ƒ codePointAt()
// concat: ƒ concat()
// constructor: ƒ String()
// endsWith: ƒ endsWith()
// fixed: ƒ fixed()
// fontcolor: ƒ fontcolor()
// fontsize: ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase: ƒ toLocaleLowerCase()
// toLocaleUpperCase: ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// [[Prototype]]: Object
// [[PrimitiveValue]]: ""

console.log("Pepperoni".indexOf("P")); //0
console.log("Pepperoni".indexOf("z")); //-1

//ES6
console.log("Pepperoni".includes("P")); //true

console.log("Pepperoni".replace("oni", "fire")); //Pepperfire

//Regular Expression - Regex
console.log("Pepperoni".replace(/oni$/, "fire")); //Pepperfire

console.log("Pepperoni".slice(2, -1)); //pperon
console.log("Pepperoni".slice(0, -3)); //Pepper
console.log("Pepperoni".slice(0, "Pepperoni".length - 1)); //Pepperon
console.log("Pepperoni~Pizza".split("~")); //["Pepperoni", " Pizza"]
console.log("Pepperoni Pizza".split(" ")); //["Pepperoni", " Pizza"]
console.log("Pepperoni Pizza".split("")); //[ 'P', 'e', 'p', 'p', 'e', 'r', 'o', 'n', 'i', ' ', 'P', 'i', 'z', 'z', 'a' ]
console.log("Pepperoni Pizza".split(" ")[0]); //Pepperoni
console.log("Pepperoni Pizza".split(" ")[1]); //Pizza

//Regular Expression - Regex
console.log("Pepperoni~Pizza".split(/~/)); //["Pepperoni", " Pizza"]
console.log("Pepperoni~Pizza".split(/~/)[1]); //Pizza

console.log(" 4444 5555 6666 7777 ".trim().length); //19

//Regular Expression - Regex
console.log(" 4444 5555 6666 7777 ".replace(/\s/g, "")); //19
