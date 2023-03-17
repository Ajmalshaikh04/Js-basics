//Object Destructuring

// const drink = {
//   id: "xzCds12",
//   name: "Coke",
//   price: {
//     sale: 90,
//     full: 100,
//   },
// };

// const myDrikId = drink.id;
// const myDrikName = drink.name;
// const myDrikSalePrice = drink.price.sale;
// console.log(myDrikId, myDrikName, myDrikSalePrice);

//

//destructuring

// const {
//   id,
//   name,
//   price: { full },
// } = drink;
// console.log(id, name, full);

//
// const id = 3421231;

// const {
//   id: myId,
//   name,
//   price: { full },
// } = drink;
// console.log(id, myId, name, full);

//

// const { sale, full } = drink.price;
// console.log(sale, full);

//

// const {
//   price: { full },
//   ...rest
// } = drink;
// console.log(name, full, rest);

//

const drink = {
  id: "xzCds12",
  name: "Coke",
  price: {
    sale: 90,
    full: 100,
  },
  hasOwnProperty() {
    return false;
  },
};

//value exists
if (drink.id) {
  console.log(drink.id);
}

for (const prop in drink) {
  if (drink[prop] === "Coke") {
    console.log(drink[prop]);
  }
}

//see weather object having a property or not
const hasCoke = Object.values(drink).includes("Coke");

console.log(hasCoke);

//Property Exists
console.log(drink.hasOwnProperty("name"));

console.log(Object.prototype.hasOwnProperty.call(drink, "name"));

console.log(Object.keys(drink).includes("name"));

drink.name = "Sprite";
console.log(drink);

//adding props
drink.brand = "Pepsi";
console.log(drink);

//

function propUpdate(prop, value) {
  drink[prop] = value;
}
propUpdate("brand", "Pepsi Co.");
propUpdate("name", "CocaCola");
console.log(drink);

//deleting props

delete drink.id;
console.log(drink); //deleted id in object

drink.id = undefined;
console.log(drink.hasOwnProperty("id")); //false

const { price, ...rest } = drink;
console.log(price);
console.log(price, rest);
console.log(price, rest, drink);

console.log(price);
console.log(rest);
console.log(drink);
