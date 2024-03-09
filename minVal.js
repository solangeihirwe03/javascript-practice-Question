function findSmallest(arr) {
    let smallest = arr[0];
  
    for (let num of arr) {
    
      if (num < smallest) {
        smallest = num;
      }
    }
    return smallest;
}
console.log(findSmallest([ 4, 6, 2, 1, 7]));