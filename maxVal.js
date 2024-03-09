function findGreatest(arr) {
    let greatest = arr[0];
  
    for (let num of arr) {
      if (num > greatest) {
        greatest = num;
      }
    }
    return greatest;
  }
  console.log(findGreatest([2, 4, 6, 7, 4]))
  