function findMedian(arr) {

    if (!arr.length) {
      throw new Error("Array cannot be empty.");
    }
  

    const sortedArr = [...arr].sort((a, b) => a - b);
  
    const mid = Math.floor(sortedArr.length / 2);
  
    return sortedArr.length % 2 === 0
      ? (sortedArr[mid - 1] + sortedArr[mid]) / 2
      : sortedArr[mid];
  }
  
  const numbers = [5, 6, 50, 1, -5];
  const median = findMedian(numbers);
  console.log("Median of the array:", median);