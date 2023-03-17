//parseInt function
console.log(parseInt("10px")); //10
console.log(parseInt("0x")); //NaN  coz parseInt convert string to decimal not to base
console.log(parseInt("10px", 22)); //22
console.log(parseInt("50px", 2)); //NaN coz it matches wit binary octal decimal etc...
console.log(parseInt("55px", 10)); //55
console.log(parseInt("55.999px")); //55

//parseFloat function
console.log(parseFloat("55.999px")); //55.999
console.log(parseFloat("55.999px") * 10); //559.99

console.log(Number("55e10")); //550000000000  //e is for exponent
console.log(Number("55e10px")); //NaN
console.log(Number("55.99px")); //NaN
console.log(Number("55.99")); //55.99
console.log(+"99.5555"); // + operator is used to convert string to number
console.log(9 + +"99.5555"); //108.5555
