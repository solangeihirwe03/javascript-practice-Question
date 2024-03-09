function factorial(number) {

  if (number < 0) {
    return null;
  } else if (number === 0) {
    return 1; 
  }

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

const num = 5;
const fact = factorial(num);

if (fact !== null) {
  console.log("The factorial of", num, "is", fact);
} else {
  console.log("Factorial is not defined for negative numbers.");
}