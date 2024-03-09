function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
  
    return Array.from(uniqueSet);
  }
  const myArray = [1, 2, 3, 2, 4, 1];
const uniqueArray = removeDuplicates(myArray); 
console.log(uniqueArray);