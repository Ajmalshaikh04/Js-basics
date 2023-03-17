//Floating Points
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

console.log(100 / 3); //33.33333333333336

console.log(33.333333333333333355 * 3); //100


const price = 9.55;
const quantity = 3;
console.log(price * quantity); //28.650000000000002

const anotherPricet = 9.33 * 100; //added multiplication by  100 to remove decimals
console.log(anotherPricet);
const anotherPrice = 9.55;
const anotherQuantity = 3;
console.log((anotherPrice * anotherQuantity) / 100); // to add decimal added divied by 100    //27.99
console.log(Math.round(anotherPrice * anotherQuantity)); //29
