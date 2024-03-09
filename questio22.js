function isEven(number) {
    return number % 2 === 0;
  }
  
  const num = 10;
  const isNumEven = isEven(num);
  
  if (isNumEven) {
    console.log(num + " is even.");
  } else {
    console.log(num + " is not even number.");
  }