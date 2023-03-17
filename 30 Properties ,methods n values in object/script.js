//properties method and values in object

// const drink = {
//   id: "zxcv123",
//   name: "coke",
//   price: 90,
//   getDrinkDetails() {
//     return `Drink ${this.name} : $ ${this.price} `;
//   },
//   "abc 123": "with Space r written in double quotes",
//   100: "this is A Number",
// };

// function getDrinkDetails() {
//   return `Drink ${this.name} : \$ ${this.price} `;
// }

// console.log(drink.getDrinkDetails());
// console.log(drink["abc 123"]);
// console.log(drink[100]);
// console.log(drink.id);
// console.log(drink.name);
// console.log(drink.price);

//
// const myId = "xzCds12";
// const myName = "Coke";
// const myPrice = 90;

// const drink = {
//   id: myId,
//   name: myName,
//   price: myPrice,
//   getDrinkDetails() {
//     return `Drink ${this.name} : $ ${this.price} `;
//   },
// };
// console.log(drink);

//
//es6

// const id = "xzCds12";
// const name = "Coke";
// const price = 90;

// const drink = {
//   id,
//   name,
//   price,
//   getDrinkDetails() {
//     return `Drink ${this.name} : $ ${this.price} `;
//   },
// };
// console.log(drink);

//

const id = "xzCds12";
const name = "Coke";
const price = 90;
const someKey = "name";

const drink = {
  id,
  [someKey]: name,
  price,
  getDrinkDetails() {
    return `Drink ${this.name} : $ ${this.price} `;
  },
};
console.log(drink);
