function indexOfCharacter(str, char) {
    return str.indexOf(char);
  }
  

  const message = "Hello, world!";
  const charToFind = 'o';
  const index = indexOfCharacter(message, charToFind);
  
  if (index !== -1) {
    console.log("The character", charToFind, "is found at index", index);
  } else {
    console.log("The character", charToFind, "is not found in the string.");
  }