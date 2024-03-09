
function countVowels(str, includeY = false) {
  let vowelCount = 0;
  const vowels = "aeiouAEIOU"; 
  for (let char of str) {
    if (includeY || !includeY && vowels.indexOf(char) !== -1) {
      vowelCount++;
    }
  }

  return vowelCount;
}

const message1 = "Hello, world!";
const message2 = "Buy milk and eggs";

console.log("Number of vowels in", message1 + " (excluding y):", countVowels(message1)); // 4
console.log("Number of vowels in", message2 + " (including y):", countVowels(message2, true)); // 6