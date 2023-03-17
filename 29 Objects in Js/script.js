//Objects in js
//in Js every thing is object
const drink = {
  id: "zxcv123",
  name: "coke",
  price: {
    sale: 70,
    full: 90,
  },
};
console.log(drink);

const drinkRefrence = drink;
drinkRefrence.name = "fanta";
console.log(drink);

console.log(drinkRefrence === drink);

console.log({} === {}); //false //in js two object r never same

console.log(new Object()); //{}

console.log(Object()); //{}

console.log({} instanceof Object); //true
console.log(new Object() instanceof Object); //true
console.log(Object() instanceof Object); //true

console.log(new Number() instanceof Number); //true
console.log(Number() instanceof Number); //false
