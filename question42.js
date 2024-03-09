function removeLastElement(arr) {
    return arr.pop();
  }
  const myArray = [1, 2, 3, 4, 5];
  const removedElement = removeLastElement(myArray);
  console.log("Removed element:", removedElement); // Output: 5
  console.log("Modified array:", myArray);