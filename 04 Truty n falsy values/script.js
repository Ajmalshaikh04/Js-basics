console.log(1 == "1");
console.log(1 === "1");

//adding ! will change the value of a boolean

// truthy values
console.log("-------------- truthy values ---------------");
console.log(!!true);
console.log(Boolean(true));
console.log(!!{});
console.log(!![]);
console.log(!!new Date());
console.log(!!"0"); //if empty ""  will return false
console.log(!!42); //if 0 it will return false
console.log(!!-42);
console.log(!!3.14);
console.log(!!-3.14);

// falsy values
console.log("-------------- falsy values ---------------");
console.log(!!false);
console.log(!!null);
console.log(!!undefined);
console.log(!!0);
console.log(!!NaN);
console.log(!!"");
console.log(!!Boolean());
