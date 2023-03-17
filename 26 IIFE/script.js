//imediatly invoked function expression
// const carPartId = (function () {
//   console.log("Hello World");
// })(); //Hello World
// console.log(carPartId); //undefined

// const carPartId = (function (id) {
//   console.log(id);
// })("XCVzad231z"); // XCVzad231z

// console.log(carPartId); //undefined

const carPartId = (function (id) {
  const theId = `CAR_PART_${id}`;
  return function (name) {
    return `${theId}_${name}`;
  };
})("XCVzad231z");

console.log(carPartId("Head Lights")); //CAR_PART_XCVzad231z_Head Lights
console.log(carPartId("Right Door")); //CAR_PART_XCVzad231z_Right Door
console.log(carPartId("Left Door")); //CAR_PART_XCVzad231z_Left Door
