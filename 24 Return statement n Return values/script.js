//
// function makeaCar(...params) {
//   const total = params.reduce((prev, next) => prev + next);
//   // console.log(total); //165   //implicit return
//   return total;
// }

// const makeaCar = (...params) => {
//   return params.reduce((prev, next) => prev + next);
// };

const makeaCar = (...params) => params.reduce((prev, next) => prev + next);

const totalPrice = makeaCar(11, 22, 33, 44, 55);
console.log(`total Price is : ${totalPrice}`); //total Price is : 165
