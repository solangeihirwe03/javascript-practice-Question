function isOdd(number) {
  return number % 2 !== 0;
}
const num = 9;
const isNumOdd = isOdd(num);

if (isNumOdd) {
  console.log(num + " is odd.");
} else {
  console.log(num + " is not odd number.");
}