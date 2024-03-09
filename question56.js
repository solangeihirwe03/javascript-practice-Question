function findIntersection(arr1, arr2) {
    
    return arr1.filter(element => arr2.includes(element));
  }
  

  const numbers1 = [1, 2, 3, 4, 5];
  const numbers2 = [2, 4, 6, 8];
  const intersection = findIntersection(numbers1, numbers2);
  console.log(intersection);