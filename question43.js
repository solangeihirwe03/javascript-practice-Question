function sortNumbersAscending(arr) {
 
    return arr.sort((a, b) => a - b);
  }
  
  const numbers = [5, 2, 8, 1, 3];
  const sortedNumbers = sortNumbersAscending(numbers.slice());
  
  console.log(numbers);
  console.log(sortedNumbers);