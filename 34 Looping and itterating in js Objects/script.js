//looping and itterating in js Objects

// const drink = {
//   // id: "zsdfAD12",
//   name: "coke",
//   price: {
//     full: 100,
//     sale: 79,
//   },
// };

// const drinkWithId = Object.create(drink);
// drinkWithId.id = "zsdfAD12";
// console.log(drinkWithId);

// console.log("name" in drinkWithId);

// for (prop in drinkWithId) {
//   console.log(prop);
// }

// for (prop in drinkWithId) {
//   if (drinkWithId.hasOwnProperty(prop)) {
//     console.log(prop, drinkWithId[prop]);
//   }
// }

// console.log("--------------------------------");
//

//USING FOR IN LOOP

// for (const props in drink) {
//   console.log(drink[props]);
// }

//

//creating loop inside loop for inner object
// for (const props in drink) {
//   for (const innerProps in drink[props]) {
//     console.log(innerProps);
//   }
// }

//

// for (const props in drink) {
//   if (typeof drink[props] !== "string") {
//     for (const innerProps in drink[props]) {
//       console.log(innerProps);
//     }
//   }
// }

//

// for (const props in drink) {
//   if (Object.prototype.toString.call(drink[props]) === "[object Object]") {
//     for (const innerProps in drink[props]) {
//       console.log(innerProps);
//     }
//   }
// }

//

// for (const props in drink) {
//   const value = drink[props];
//   if (Object.prototype.toString.call(value) === "[object Object]") {
//     for (const innerProps in drink[props]) {
//       console.log(innerProps);
//     }
//   }
// }

//

//itterating over an object

const drink = {
  id: "zsdfAD12",
  name: "coke",
  price: {
    full: 100,
    sale: 79,
  },
};

Object.keys(drink).forEach((key) => console.log(drink[key]));

//

// Object.keys(drink).forEach(function (prop, index) {
//   console.log(prop, index);
// });

//

Object.keys(drink).forEach(function (prop) {
  console.log(drink[prop], prop);
});

console.log(Object.entries(drink)); //returns an array of object key value pairs

// console.log(drink);
