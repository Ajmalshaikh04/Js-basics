//this keyword refers to window object OR undefined

// function carPartId() {
//   console.log(this); //Window Object
// }
// carPartId(); //undefined
// carPartId.call(""); //String {''}
// carPartId.call({}); //Empty Object {}
// carPartId.call([]); //Empty Object []

//

// "use strict";
// function carPartId() {
//   console.log(this);
// }
// carPartId(); //undefined

// function carPartId() {
//   console.log(this);  //window Object
// }
// console.log(carPartId()); //undefined

//

// const firstCar = { id: "xasAs123" };
// const secondCar = { id: "xwqeQW23" };
// function carPartId() {
//   console.log(`${this.id}`);
// }
// carPartId.call(firstCar); //call use to invoke   //xasAs123
// carPartId.call(secondCar); //call use to invoke   //xasAs123

//

// const firstCar = { id: "xasAs123" };
// const secondCar = { id: "xwqeQW23" };
// function carPartId() {
//   console.log(this); //{ id: "xasAs123" } //{ id: "xwqeQW23" }
// }

// carPartId.call(firstCar); //call use to invoke   //xasAs123
// carPartId.call(secondCar);

// carPartId.apply(firstCar); //apply use to invoke   //xasAs123

const firstCar = { id: "xasAs123" };
const secondCar = { id: "xwqeQW23" };
const thirdCar = { id: "tdsf123QW23" };
function carPartId(name, quantity) {
  console.log(`${this.id}_${name}_Quantity is ${quantity}`); //{ id: "xasAs123" } //{ id: "xwqeQW23" }
}

//call= c =commas
carPartId.call(firstCar, "Head Light", 10); //xasAs123_Head Light_Quantity is 10
carPartId.call(secondCar, "Left Door", 20); //xwqeQW23_Left Door_Quantity is 20

//apply = a =array
carPartId.apply(firstCar, ["Wind Sheild", 9]); //xasAs123_Wind Sheild_Quantity is 9

//.bind

const boundThirdCar = carPartId.bind(thirdCar);
console.log(boundThirdCar);
boundThirdCar("windscreen", 99); //tdsf123QW23_windscreen_Quantity is 99
