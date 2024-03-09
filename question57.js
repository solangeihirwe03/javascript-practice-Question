function isPrime(number) {
    
    if (number <= 1) return false; 
  
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
    
      if (number % i === 0) return false;
    }
  
    return true;
  }
  
  const num1 = 11;
  const num2 = 15;
  
  console.log(num1, "is prime:", isPrime(num1));
  console.log(num2, "is prime:", isPrime(num2));