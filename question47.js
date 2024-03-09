function generateRandomNumber(min, max) {
    if (min > max) {
      throw new Error("Minimum value cannot be greater than maximum value.");
    }
  
    return Math.random() * (max - min + 1) + min;
  }
  
  // Example usage
  const minValue = 10;
  const maxValue = 20;
  
  try {
    const randomNumber = generateRandomNumber(minValue, maxValue);
    console.log("Generated random number between", minValue, "and", maxValue + ":", randomNumber);
  } catch (error) {
    console.error("Error:", error.message);
  }