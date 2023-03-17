//String n literal syntax  litterals means => "",'',``
console.log("55px"); //55px as string

console.log("Pizza"); //Pizza

console.log("Pizza 'Hut!'"); //Pizza 'Hut!'

console.log("Pizza 'Hut!'"); //log('Pizza \'Hut!\'') OR log("Pizza \"Hut!\"");   => Pizza 'Hut!'

// const pizza = "Pepproni";
// console.log("Pizza is: " + pizza); //Pizza is:Pepproni

//ES6 Template literals
// console.log(`Pizza is: ${pizza}`); //Pizza is: Pepproni

// const pizza = "Pepproni \
// with \
// tomato sauce \
// & extra cheese"; //old way to write multiline string by using \

//ES6 Template multi line literals
// const pizza = `Pepproni
// with
// tomato sauce
// & extra cheese`; //new way to write multiline string by using backtiks =>``

// console.log(String(55 + 11), String(55 + "11")); //66, 6611 as a string

// console.log(String(55 + 11), 55 + "11"); //66, 5511 as a string
// console.log(String({ name: "Pepproni" })); //[object Object]
// console.log(String([1, 2, 3, 4, 5])); //1,2,3,4,5 as string

console.log(new String(55)); //String{55} //primitive value
