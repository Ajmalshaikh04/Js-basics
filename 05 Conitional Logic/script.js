// const condition = true;
// if (condition) {
//   console.log("condition is true");
// }  //condition is true

// const condition = false;
// if (condition) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }  //No

// let condition = true;
// if (condition) {
//   let a = 1;
//   console.log("Yes");
// } else {
//   console.log("No");
// } //Yes
// console.log(a); //Uncaught ReferenceError: a is not defined

// const condition = true;
// if (condition) {
//   var a = 1;
//   console.log("Yes");
// } else {
//   console.log("No");
// } //Yes
// console.log(a); //1

//Nested If Else Statements

const number = 59;
let result;
if (number === 100) {
    result = "100";
} else if (number === 99) {
    result = "Ninty-nine";
} else if (number === 49) {
    result = "Forty-nine";
} else {
    result = "not Match";
}
console.log(result);
