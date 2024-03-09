function capitalizeFirstLetters(sentence) {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  
  const sentence = "this is a test sentence";
  const capitalizedSentence = capitalizeFirstLetters(sentence);
  console.log(capitalizedSentence);