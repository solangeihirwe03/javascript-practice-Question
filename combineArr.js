function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  
}
  
  const arrange = ['a', 'b', 'c', 'd'];
  const toCombine = ['e', 'f', 'g'];
  
  const combinedArray = combineArrays(arrange, toCombine);
  
  console.log(combinedArray);