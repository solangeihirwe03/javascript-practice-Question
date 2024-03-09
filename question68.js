unction power(base, exponent) {
    // Handle invalid input (optional)
    if (exponent < 0 && base === 0) {
      throw new Error("0 to the negative power is undefined.");
    }
  
    // Handle negative exponents with non-zero base
    if (exponent < 0) {
      return 1 / (base ** (-exponent)); // Convert to positive exponent and reciprocate
    }
  
    // Handle zero exponent (any base to 0 is 1)
    if (exponent === 0) {
      return 1;
    }
  
    // Positive exponent (base raised to exponent)
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  
  // Example usage
  const base1 = 2;
  const exp1 = 3;
  const base2 = 0;
  const exp2 = -2; // Error: 0 to the negative power is undefined.
  
  console.log(base1, "^", exp1, "=", power(base1, exp1)); // Output: 2 ^ 3 = 8
  // console.log(base2, "^", exp2, "=", power(base2, exp2));

  function findMinMax(arr) {
    // Handle empty array
    if (arr.length === 0) {
      return { min: null, max: null };
    }
  
    // Initialize with first element
    let min = arr[0];
    let max = arr[0];
  
    // Loop through the array
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return { min, max };
  }
  
  // Example usage
  const numbers = [5, 10, 2, 18, -3];
  const result = findMinMax(numbers);
  
  console.log("Min:", result.min); // Output: Min: -3
  console.log("Max:", result.max);

  function sumOfDigits(number) {
    // Handle negative numbers (convert to absolute value)
    number = Math.abs(number);
  
    // Handle zero (sum of digits is 0)
    if (number === 0) {
      return 0;
    }
  
    let sum = 0;
    while (number > 0) {
      // Extract the last digit
      const lastDigit = number % 10;
      // Add the last digit to the sum
      sum += lastDigit;
      // Remove the last digit from the number
      number = Math.floor(number / 10);
    }
  
    return sum;
  }
  
  // Example usage
  const num1 = 1234;
  const num2 = -567;
  
  console.log("Sum of digits of", num1, ":", sumOfDigits(num1)); // Output: Sum of digits of 1234 : 10
  console.log("Sum of digits of", num2, ":", sumOfDigits(num2));

  function gcd(a, b) {
    // Handle invalid input (non-numeric)
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Invalid input: GCD requires numbers.');
    }
  
    // Euclidean algorithm (recursive implementation)
    if (b === 0) return a;
    return gcd(b, a % b);
  }
  
  // Example usage
  const num1 = 18;
  const num2 = 12;
  
  console.log("GCD of", num1, "and", num2, ":", gcd(num1, num2));


  function randomNumber(min, max) {
    // Ensure min <= max
    if (min > max) 