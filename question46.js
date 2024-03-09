function convertToUppercase(arr) {

  return arr.map(str => str.toUpperCase());
}

const stringArray = ["hello", "world", "how", "are", "you"];
const uppercaseArray = convertToUppercase(stringArray);
console.log(uppercaseArray);