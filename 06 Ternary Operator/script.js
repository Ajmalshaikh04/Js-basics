//Ternary Operator

// let result = (condition) ? true : false;

// const number = 99;
// const result = "The Number is :" + (number === 100 ? "100" : "No Match");
// console.log(result);

// Nested Ternary Operator
const anotherNumber = 300;
const result =
    anotherNumber === 100
        ? "One-hundred"
        : anotherNumber === 200
            ? "Two-hundred"
            : anotherNumber === 300
                ? "Three-hundred"
                : "Not one hundred";

console.log(result); // Three-hundred
