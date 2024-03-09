function printRightTriangle(rows) {
    for (let i = rows; i > 0; i--) {
    
      for (let j = 0; j < i; j++) {
        console.log("1", end=" ");
      }
      console.log();
    }
  }
  

  const numRows = 5;
  printRightTriangle(numRows);