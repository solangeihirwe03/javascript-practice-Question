function createPyramid(rows) {
    // Loop for rows
    for (let i = 1; i <= rows; i++) {
      // Create spaces before the stars using repeat()
      let spaces = " ".repeat(rows - i);
  
      // Create stars using repeat()
      let stars = "*".repeat(2 * i - 1);
  
      // Combine spaces and stars, and print the row
      console.log(spaces + stars);
    }
  }
  
  // Example usage
  const height = 5;
  createPyramid(height);