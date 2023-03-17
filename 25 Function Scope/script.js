//

//scope:1
// const anotherId = "12adsSDE";
// const someId = "wezs1243DE";

// function makecarParkId(id) {
//   //Scope:2
//   console.log(id, anotherId);
//   const someId = "wezs1243DE";

//   function innerPartId() {
//     //Scope:3
//     // const someId = "wezs1243DE";
//     console.log(someId);
//   }
// }
// makecarParkId(someId);

//closures n lexical scope
function makecarParkId(id) {
  const partid = `Car_Part_${id}`;
  return function (name) {
    return `${partid}_${name.toUpperCase()}`;
  };
  //   return (name) => `${partid}_${name.toUpperCase()}`; //shorthand
}
const carpartIdIs = makecarParkId("xzxcASA1223");
console.log(carpartIdIs("Left Door"));
console.log(carpartIdIs("Right Door"));
console.log(carpartIdIs("WindScreen"));

const anothercarpartIdIs = makecarParkId("Wsdser314D");
console.log(anothercarpartIdIs("Left Door"));
console.log(anothercarpartIdIs("Right Door"));
console.log(anothercarpartIdIs("WindScreen"));
