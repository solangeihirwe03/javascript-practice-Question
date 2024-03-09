function isAllDigits(str) {
    return str.every(char => /\d/.test(char));
  }
  
  const string1 = "12345";
  const string2 = "hello123";
  
  console.log("String 1:", isAllDigits(string1));
  console.log("String 2:", isAllDigits(string2));