function filterPositiveNumbers(arr) {

    return arr.filter(element => element > 0);
  }
  
  const numbers = [1, -2, 3, -4, 5];
  const positiveNumbers = filterPositiveNumbers(numbers);
  console.log(positiveNumbers);