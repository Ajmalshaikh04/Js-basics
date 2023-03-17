//functions with parameter

//name = parameter
// function makeacar(name) {
function makeacar(name = "Porsche") {
  // name = name || "Porsche"; //if there is no given argument, use this as a default value
  // if (!name) {
  //   name = "Honda";
  // }
  console.log(`Making Car : ${name.toUpperCase()}`);
}

// string= argument
makeacar("suzuki");
makeacar("ferrari");
makeacar(); //canot read property of undefined
