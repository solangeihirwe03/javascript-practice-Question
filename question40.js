function squareElements(arr) {

    return arr.map(element => element * element);
  }
  

  const numbers = [1, 2, 3, 4, 5];
  const squaredNumbers = squareElements(numbers);
  console.log(squaredNumbers);