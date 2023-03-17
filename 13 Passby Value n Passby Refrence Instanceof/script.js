// console.log(typeof 99); //number
// console.log(typeof 99.77); //number
// console.log(typeof "qwerty"); //string

// if (typeof 99 === "number") {
//   console.log("is A Number");
// } //is A Number

// console.log(99 instanceof Number); //false

// The instanceof operator tests to see if the prototype property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.

// console.log(Number("99") instanceof Number); //false
// console.log(new Number("99") instanceof Number); //true
// console.log(new Number(99) instanceof Number); //true
// console.log({}.toString()); //[object Object]
// console.log(Object.prototype.toString().call(99).slice(8, -1) === "Number");

//Method Reuse : With the call() method, you can write a method that can be used on different objects.

// This example calls the fullName method of person, using it on person1:

// const person = {
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };
// const person2 = {
//   firstName: "Mary",
//   lastName: "Doe",
// };

// // This will return "John Doe":
// console.log(person.fullName.call(person1));

// call() method can accept argument

// const person = {
//   fullDetails: function (city, country) {
//     return this.firstName + " " + this.lastName + "," + city + "," + country;
//   },
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// console.log(person.fullDetails.call(person1, "Oslo", "Norway"));
