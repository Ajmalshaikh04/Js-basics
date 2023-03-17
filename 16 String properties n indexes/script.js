//
console.log(new String(5599)); //string{"5599"}
console.log(new String(5599).length); //4
console.log("Pepperoni".length); //9
console.log("Pepperoni"["length"]); //9
console.log("Pepperoni"[0]); //P
console.log("Pepperoni"[1]); //e

const pizza = "Pepperoni";
console.log(pizza[0]); //P
console.log(pizza[0], pizza[pizza.length - 1]); //P i
console.log(pizza.charAt(0)); //P

const pizzahut = "P e p p e r o n i";
console.log(pizzahut.charAt(1)); // BLANK SPACE it also count spaces in string
console.log(pizzahut.charAt(0)); // P
console.log(pizzahut[0], pizzahut[pizzahut.length - 1], pizzahut.length); // (pizzahut first char, last char, length of pizzahut)
