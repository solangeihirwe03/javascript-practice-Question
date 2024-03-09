  
function findAverage(arr) {
  let total = 0;

  for (let num of arr) {
    total += num;
  }
  const average = total / arr.length;
  return average;
}
console.log(findAverage([3, 5, 8, 2,4]));