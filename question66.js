function sumArray(arr) {
    let total = 0;
    for (const num of arr) {
      total += num;
    }
    return total;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 5];
  const sum = sumArray(numbers);
  
  console.log("Sum of the array:", sum); // Output: Sum of the array: 15
  Use code with caution.
  b. Even Numbers:
  
  JavaScript
  function printEvenNumbers(arr) {
    for (const num of arr) {
      if (num % 2 === 0) {
        console.log(num);
      }
    }
  }
  
  // Example usage (with the same array `numbers`)
  printEvenNumbers(numbers); // Output: 2, 4
  Use code with caution.
  c. Array Reverse:
  
  JavaScript
  function reverseArray(arr) {
    // Two pointer approach (swap elements from beginning and end)
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
    return arr;
  }
  
  // Example usage
  console.log(reverseArray(numbers.slice())); // Output: [5, 4, 3, 2, 1] (slice() to avoid modifying original array)
  Use code with caution.
  d. Array Filter:
  
  JavaScript
  function filterArray(arr, condition) {
    const filteredArr = [];
    for (const num of arr) {
      if (condition(num)) {
        filteredArr.push(num);
      }
    }
    return filteredArr;
  }
  
  // Example: Filter elements greater than 10
  const filteredNumbers = filterArray(numbers, num => num > 10);
  console.log(filteredNumbers); // Output: [] (no elements greater than 10 in the example array)
  Use code with caution.
  e. Array Average:
  
  JavaScript
  function calculateAverage(arr) {
    if (arr.length === 0) {
      return null; // Handle empty array
    }
    const sum = sumArray(arr);
    return sum / arr.length;
  }
  
  // Example usage
  const average = calculateAverage(numbers);
  console.log("Average of the array:", average); // Output: Average of the array: 3
  Use code with caution.
  f. Array Search:
  
  JavaScript
  function findElementIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i;
      }
    }
    return -1; // Element not found
  }
  
  // Example usage
  const index = findElementIndex(numbers, 4);
  console.log("Index of 4:", index); // Output: Index of 4: 3
  Use code with caution.
  g. Duplicate Elements:
  
  JavaScript
  function findDuplicates(arr) {
    const duplicates = [];
    const seen = new Set(); // Use a Set to efficiently track seen elements
  
    for (const num of arr) {
      if (seen.has(num)) {
        duplicates.push(num);
      } else {
        seen.add(num);
      }
    }
  
    return duplicates;
  }
  
  // Example usage
  const duplicatesArray = [1, 2, 3, 2, 4];
  const duplicateElements = findDuplicates(duplicatesArray);
  console.log("Duplicate elements:", duplicateElements); // Output: Duplicate elements: 2
  Use code with caution.
  h. Array Sorting:
  
  JavaScript
  // Selection Sort (example sorting algorithm)
  function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    return arr;
  }
  
  // Example usage
  console.log(selectionSort())