function displayPattern(rows) {
    let output = "";
  
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= rows; j++) {
        // Check if the current row and column positions form a diagonal line
        if (i === j) {
          output += "0c 6890-  ";
        } else {
          output += "1 ";
        }
      }
      output += "<br>"; // Add a line break after each row
    }
  
    document.write(output); // Or use another method to display the pattern (e.g., document.getElementById(...).innerHTML)
  }
  
  displayPattern(5);