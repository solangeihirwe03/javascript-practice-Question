function squareRoot(number) {
    if (number < 0) {
      return null; 
    } else {
      return Math.sqrt(number);
    }
  }
  
  const num = 16;
  const sqRoot = squareRoot(num);
  
  if (sqRoot !== null) {
    console.log("The square root of", num, "is", sqRoot);
  } else {
    console.log("Square root is not defined for negative numbers.");
  }