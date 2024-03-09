function stringModifier(text, position, newChar) {
    if (position < 0 || position >= text.length) {
      return "Invalid position";
    }
    const modifiedText = text.substr(0, position) + newChar + text.substring(position + 1);
  
    return modifiedText;
  }
const text = "Hello, world!";
const position = 7; 
const newChar = 'X';

const modifiedText = stringModifier(text, position, newChar);

console.log(modifiedText);