// const drinks = ["Lemon", "Peach", "lime", "mango", "pineapple"];
// const drinkRefrencs = drinks;

// console.log(drinks); // ["Lemon", "Peach", "lime"]
//console.log(drinks === drinkRefrencs); // true

//console.log(new Array(1, 2, 3)); // [1, 2, 3]
//console.log(Array("Lemon", "Peach", "lime")); // ["Lemon", "Peach", "lime"]
//console.log([] === []); //false

//Array properties index and elements

// drinks[0] = "Orange";
// drinks["favorite"] = "Lemon";

// console.log(drinks);
// console.log(drinks[2]);
// console.log(drinks[drinkRefrencs.length - 1]);

// drinks.length = 0; //string key value remains in the array
// drinks.splice(0, drinks.length);
// console.log(drinks);

//

//multi dimensional array
// const drinks = [
//   ["Lemon", 99],
//   ["mango", 60],
//   ["pineapple", 70],
// ];

// console.log(Object.entries(drinks));

// const drinkOne = drinks[0];
// const drinkTwo = drinks[1];
// const drinkThree = drinks[2];

// console.log(drinkOne);
// console.log(drinkTwo);
// console.log(drinkThree);

// console.log(`Drink: ${drinks[1][0]}, Price: ${drinks[1][1]}`);

//

//destructuring array

// const drinks = [
//   ["Lemon", 99],
//   ["mango", 60],
//   ["pineapple", 70],
// ];
// const drinkOne = drinks[0];
// const drinkTwo = drinks[1];
// const drinkThree = drinks[2];

//destructuring array
// const [drinkOne, [, drinkTwo], drinkThree] = drinks;
// const [drinkOne, [, drinkTwo], ...rest] = drinks;

// console.log(drinkOne, drinkTwo, rest);

//Adding elements to array

// const drinks = ["Lemon", "Peach", "lime", "mango", "pineapple"];
// console.log(drinks);

//begning
// drinks.unshift("Start"); //adds elements to the beginning an array
// console.log(drinks);

//end
// drinks.push("End"); //adds elements to the end of an array
// console.log(drinks);

// drinks.push("Water");
// const addNewDrink = [...drinks];

// drinks.unshift("orange");
// const addNewDrink = ["Water", ...drinks];
// console.log(addNewDrink);

// const addNewDrink = [...drinks, "Water"];
// console.log(["Water", ...drinks]);
// console.log([...drinks, "Cola"]);

// addNewDrink.length = 0;
// console.log(addNewDrink);

//splice
// drinks.splice(1, 0, "Water"); //mutable the array
// console.log(drinks);

// console.log([...drinks.splice(0, 1)]); //immutable array
// console.log([...drinks.splice(0, 1), "qwerty", ...drinks.splice(1 - 1)]);

//

//Removing items from an array
// const drinks = ["Lemon", "Peach", "lime", "mango", "pineapple"];
//begning
// drinks.shift(); //remove element from start off an array
// console.log(drinks); //["Peach","lime,"mango","pineapple"]

// const drinks = ["Lemon", "Peach", "lime", "mango", "pineapple"];
// const index = drinks.length - 1;
// const newDrinks = [...drinks.slice(0, 0), ...drinks.slice(1)];
// const newDrinks = [...drinks.slice(2, 4)];
// const newDrinks = [...drinks.slice(0, 1), ...drinks.slice(4, 5)];
// const newDrinks = [...drinks.slice(0, index), ...drinks.slice(index + 1)];

// console.log(drinks);
// console.log(newDrinks);

//end
// const drinks = ["Lemon", "Peach", "lime", "mango", "pineapple"];
// const remove = drinks.pop();
// console.log(remove); //remove element from last of an array
// console.log(drinks);

//Search in array
const drinks = ["Lemon", "Peach", "lime", "mango", "pineapple"];
const index = drinks.indexOf("mango");
console.log(index);
if (index !== -1) {
  console.log(drinks[index]);
}

const include = drinks.includes("mango");
console.log(include);

console.log(drinks);
