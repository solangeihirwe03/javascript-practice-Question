function countConsonants(str) {
    const alphaNumericStr = str.replace(/[^a-z0-9]/gi, "");
  
    const lowerStr = alphaNumericStr.toLowerCase();
  
    let totalChars = lowerStr.length;
  
    function countVowels(vowelStr) {
      
      const vowelRegex = /[aeiou]/gi;
      const matches = vowelStr.match(vowelRegex);
      return matches ? matches.length : 0;
    }
    const vowelCount = countVowels(lowerStr);
 
    const consonantCount = totalChars - vowelCount;
  
    return consonantCount;
  }
  
  const message = "Hello, world!";
  
  console.log("Number of consonants in", message + ":", countConsonants(message)); 