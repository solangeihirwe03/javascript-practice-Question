function displayPattern(rows, columns) {
    let output = "";
  
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= columns; j++) {
        // Check if the current row and column are on the border (1s)
        if (i === 1 || i === rows || j === 1 || j === columns) {
          output += "1 ";
        } else {
          output += "0 ";
        }
      }
      output += "<br>"; // Add a line break after each row
    }
  
    document.write(output); // Or use another method to display the pattern (e.g., document.getElementById(...).innerHTML)
  }
  
  displayPattern(5, 5)