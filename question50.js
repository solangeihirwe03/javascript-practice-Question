
function isSortedAscending(arr) {
  
  for (let i = 0; i < arr.length - 1; i++) {

    if (arr[i] > arr[i + 1]) {
      return false; 
    }
  }
  return true;
}

// Example usage
const sortedArr = [1, 2, 3, 4, 5];
const unsortedArr = [1, 3, 2, 4, 5];

console.log("Sorted array:", isSortedAscending(sortedArr)); // Output: true
console.log("Unsorted array:", isSortedAscending(unsortedArr))