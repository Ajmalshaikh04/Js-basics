//
console.log(true, false);

// const args = "";
// console.log(Boolean(args)); //false

const args = "Z";
console.log(Boolean(args)); //true
console.log(!!args); //true
console.log(!!!args); //flase
console.log(!!!!args); //true

console.log(Boolean(0)); //false
console.log(Boolean([])); //true
console.log(Boolean({})); //true

console.log(new Boolean()); //returns Object: Boolean{false}
console.log(new Boolean(args)); //returns Object: Boolean{true}

console.log(typeof true); //boolean
console.log(typeof false); //boolean

console.log(true instanceof Boolean); //false
console.log(false instanceof Boolean); //false

console.log(new Boolean("") instanceof Boolean); //true  //any case it will return true
console.log(new Boolean("zxc") instanceof Boolean); //true  //any case it will return true

console.log(Object.prototype.toString.call(true)); //[object Boolean]
