function reverseArray(arr) {
    return arr.reverse();
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const reversedNumbers = reverseArray(numbers.slice());
  
  console.log(numbers); 
  console.log(reversedNumbers);