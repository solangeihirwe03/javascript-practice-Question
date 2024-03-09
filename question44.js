function allPositive(arr) {
    return arr.every(element => element > 0);
  }
  
  const positiveArr = [1, 2, 3, 4, 5];
  const mixedArr = [1, 2, -3, 4, 5];
  
  console.log("All positive:", allPositive(positiveArr)); // Output: true
  console.log("Not all positive:", allPositive(mixedArr));