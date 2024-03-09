function isPresent(arr, value) {
    return arr.includes(value);
  }
  
  const numbers = [1, 2, 3, 4, 5];
  const valueToCheck = 3;
  
  if (isPresent(numbers, valueToCheck)) {
    console.log(valueToCheck, "is present in the array.");
  } else {
    console.log(valueToCheck, "is not present in the array.");
  }
