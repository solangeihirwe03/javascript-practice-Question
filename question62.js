function countWords(sentence) {
    const words = sentence.split(/\s+/);
    return words.length;
  }

  const sentence1 = "This is a test sentence.";
  const sentence2 = "This sentence has no spaces.";
  
  const wordCount1 = countWords(sentence1);
  const wordCount2 = countWords(sentence2);
  
  console.log(sentence1, "has", wordCount1, "words.");
  console.log(sentence2, "has", wordCount2, "words.");