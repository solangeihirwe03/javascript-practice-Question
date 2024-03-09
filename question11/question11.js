function displayPattern(rows) {
  let output = "";

  for (let i = 1; i <= rows; i++) {
    for (let j = rows; j >= 1; j--) {
      
      if (j <= rows - i) {
        output += "1 ";
      } else {
        output += " ";
      }
    }
    output += "<br>"; // Add a line break after each row
  }

  document.write(output); // Or use another method to display the pattern (e.g., document.getElementById(...).innerHTML)
}

displayPattern(4)