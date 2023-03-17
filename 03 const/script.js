//rebinding in var
// var a = 2;
// a = 3;
// console.log(a); //3

// let a = 123;
// a = 333;
// console.log(a); //333

// const a = 123;
// a = 333;
// console.log(a); //Uncaught TypeError: Assignment to constant variable.

// {
//   let a = 123;
// }
// a = 444;
// console.log(a); //444

// {
//     const a = 123;
// }
// console.log(a); //error

// var a = 123;
// {
//   a = 999;
// }
// console.log(a); //999

// let a = { name: "John" };
// a = 23;
// console.log(a); //23

// const a = { name: "John" };
// a = 23;
// console.log(a); //Uncaught TypeError: Assignment to constant variable.

// const a = { name: "John" };
// a.name = "doe";
// console.log(a); //doe
