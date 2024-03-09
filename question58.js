function power(base, exponent) {
    if (exponent < 0 && base === 0) {
      throw new Error("0 to the negative power is undefined.");
    }
  
    if (exponent < 0) {
      return 1 / (base ** (-exponent));
    }
  
    if (exponent === 0) {
      return 1;
    }
  
    let result = 1;
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
    return result;
  }
  
  const base1 = 2;
  const exp1 = 3;
  const base2 = 0;
  const exp2 = -2; 
  
  console.log(base1, "^", exp1, "=", power(base1, exp1)); 
 
  