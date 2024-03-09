function isPalindrome(str) {
  
    const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = processedStr.length - 1;
  
    while (left < right) {
      if (processedStr[left] !== processedStr[right]) {
        return false;
      }
      left++;
      right--;
    }
  
    return true;
  }
  
  const string1 = "Hello, world!";
  const string3 = "Racecar";
  
  console.log(string1 + " is a palindrome: " + isPalindrome(string1));
  console.log(string3 + " is a palindrome: " + isPalindrome(string3));