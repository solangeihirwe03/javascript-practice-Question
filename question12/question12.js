function displayPattern(rows) {
  let output = "";

  for (let i = rows; i >= 1; i--) {
    for (let j = 1; j <= rows; j++) {
      if (j <= i) {
        output += "1 ";
      } else {
        output += "0 ";
      }
    }
    output += "<br>"; // Add a line break after each row
  }

 document.write(output); // Or use another method to display the pattern (e.g., document.getElementById(...).innerHTML)
}

displayPattern(4); 