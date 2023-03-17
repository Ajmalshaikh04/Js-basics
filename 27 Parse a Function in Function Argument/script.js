// function carPartId(name, fn) {
//   const theId = `CAR_PART_x87zAqetr`;
//   return;
// }

// const carPart = carPartId(`Left Door`, function () {
//   console.log("i am call back function");
// });

// function carPartId(name, foo) {
//   // fn is callback function nd passed as parameter
//   foo();
// }
// carPartId("Left Door", function () {
//   console.log("i am call back function");
// }); //i am call back function

// function carPartId(name, fn) {
//   // fn is callback function nd passed as parameter
//   const theId = `CAR_PART_x87zAqetr`;
//   fn(theId);
// }
// carPartId("Left Door", function (id) {
//   console.log(`Car Part Id is ${id}`);
// }); //Car Part Id is CAR_PART_x87zAqetr

// function carPartId(name, fn) {
//   // fn is callback function nd passed as parameter
//   const theId = `CAR_PART_x87zAqetr`;
//   fn(`${theId} ${name}`);
// }
// carPartId("Left Door", function (id) {
//   console.log(`Car Part Id is ${id}`);
// }); // Car Part Id is CAR_PART_x87zAqetr Left Door

//

// function carPartId(name, fn) {
//   // fn is callback function nd passed as parameter
//   const theId = `CAR_PART_x87zAqetr`;
//   fn(`${theId} ${name}`);
// }
// const carPart = carPartId("Left Door", function (id) {
//   return `Car Part Id is ${id}`;
// });

// console.log(carPart); //undefined

//

// function carPartId(name, fn) {
//   // fn is callback function nd passed as parameter
//   const theId = `CAR_PART_x87zAqetr`;
//   console.log(fn(`${theId} ${name}`)); // log fn to see what it contains: Car Part Id is CAR_PART_x87zAqetr Left Door
// }
// const carPart = carPartId("Left Door", function (id) {
//   return `Car Part Id is ${id}`;
// });

// console.log(carPart); //undefined

//

function carPartId(name, fn) {
  // fn is callback function nd passed as parameter
  const theId = `CAR_PART_x87zAqetr`;
  return fn(`${theId} ${name}`); //returned function rather than storing in a variable const.
}
const carPart = carPartId("Left Door", function (id) {
  return `Car Part Id is ${id}`;
});

console.log(carPart); // Car Part Id is CAR_PART_x87zAqetr Left Door
