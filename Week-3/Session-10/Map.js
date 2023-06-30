function calcWordFrequencies() {
    var input = prompt("Enter a list of words (separated by spaces):");
    var words = input.split(" ");
    var wordFrequencies = new Map();
  
    // Calculate word frequencies
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (wordFrequencies.has(word)) {
        wordFrequencies.set(word, wordFrequencies.get(word) + 1);
      } else {
        wordFrequencies.set(word, 1);
      }
    }
  
    // Output word frequencies to the console
    wordFrequencies.forEach(function (value, key) {
      console.log(key + " " + value);
    });
  }