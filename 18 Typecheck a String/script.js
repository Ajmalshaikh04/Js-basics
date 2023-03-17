console.log(typeof "Pepperoni"); //string
console.log(typeof "0"); //string
console.log(typeof 0); //number
console.log("Pepperoni" instanceof String); //false
console.log(new String("Pepperoni") instanceof String); //true
console.log(String("Pepperoni") instanceof String); //false //donot creating a new instance withouth the new keyword
console.log(Object.prototype.toString.call("Pepperoni")); //[object String]
