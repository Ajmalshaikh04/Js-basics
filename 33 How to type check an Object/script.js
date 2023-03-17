//
const drink = {
  id: "zsdfAD12",
  name: "coke",
  price: {
    full: 100,
    sale: 79,
  },
};
const a = [1, 2, 3, 4, 5];
const b = null;

// function getType(obj) {
//   return Object.prototype.toString.call(obj);
// }
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
console.log(typeof drink);
console.log(typeof []);
console.log(typeof null);

console.log({} instanceof Object);
console.log([] instanceof Object);
console.log(null instanceof Object);

// console.log(Object.prototype.toString.call(drink));
// console.log(Object.prototype.toString.call(null));
// console.log(Object.prototype.toString.call([]));

console.log(getType(drink));
console.log(getType(a));
console.log(getType(b));
