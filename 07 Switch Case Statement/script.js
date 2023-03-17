//Switch case statement

const number = 200; //it's Case Sensitive. if u pass string it will execute the default case.
let result;

switch (number) {
  case 100:
    result = "One-hundred";
    break;
  case 200:
    result = "Two-hundred";
    break;
  case 300:
    result = "Three-hundred";
    break;
  default: //if there is no case match then it will execute default
    result = "No Match";
    break;
}
console.log(result);
