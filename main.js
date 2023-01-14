function findLongestWord(string) {
  // Change code below this line
  const wordArray = string.split(" ");
  console.log(wordArray);
  let wordLength = wordArray[0];
  console.log(wordLength);
  for (let word of wordArray) {
    if (word.length > wordLength.length) {
      wordLength = word;
    }
  }
  // Change code above this line
  return wordLength;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("Google do a roll");