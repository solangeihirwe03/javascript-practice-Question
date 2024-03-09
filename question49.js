function fibonacci(n) {
    if (n < 0) {
      throw new Error("n must be non-negative.");
    }
  
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    }
  

    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  const numTerms = 10;
  const fibonacciSequence = [];
  for (let i = 0; i < numTerms; i++) {
    fibonacciSequence.push(fibonacci(i));
  }
  console.log(fibonacciSequence);