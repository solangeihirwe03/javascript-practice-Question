function sumEvenNumbers(arr) {

    return arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
  }
  
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenSum = sumEvenNumbers(numbers);
  console.log("Sum of even numbers:", evenSum);