function sqrt(number) {
    if (number < 0) {
      return NaN; 
    }
    return Math.sqrt(number);
  }
  
  const num1 = 16;
  const num2 = -9;
  
  console.log("Sqrt of", num1, ":", sqrt(num1));
  console.log("Sqrt of", num2, ":", sqrt(num2));