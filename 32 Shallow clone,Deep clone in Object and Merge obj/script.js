// Shallow clone and Deep clone in Object
// const drink = {
//   id: "xzcSfA21",
//   name: "Coca-Cola",
//   price: {
//     sale: 70,
//     full: 100,
//   },
// };

//shallow copy
//const drinkClone = Object.assign({}, drink); // Shallow copy does copy of top level of object   //Merge object from right to left (new object ,merge drink object to new object)

//
// const drinkClone = { ...drink };  //spread operator does shallow copy

//Deep copy
// const drinkClone = JSON.parse(JSON.stringify(drink)); // Deep copy does copy of all the nested objects
// drinkClone.id = "QweRty91";
// drinkClone.price.sale = 89;

// console.log(drink);
// console.log(drinkClone);

//
//

// Merge Objects
const drinkObj = {
  id: "mvSDewx1",
  name: "Sprite",
};
const price = {
  full: 99,
  sale: 69,
};

// const mergeDrink = Object.assign({}, drinkObj, { price }); //{price} is keept as object to nest object inside main object
// const mergeDrink = { ...drinkObj, ...price }; //merge object at top level only if you want to nest object keep in object with {object name} .
const mergeDrink = { ...drinkObj, ...{ price } };
// console.log(drinkObj, price);
console.log(mergeDrink);
