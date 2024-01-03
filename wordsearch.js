const wordSearch = (letters, word) => {
// Check horizontally
  //console.log ("Word to search:", word);
  //console.log ("-- Checking Horizontally --");
  const horizontalJoin = letters.map(ls => ls.join(''));
  //console.log ("horizontalJoin : ", horizontalJoin);
  for (const element of horizontalJoin) {
    //console.log("current array element being checked : ", element);
    //check for word
    if (element.includes(word)) {
      //console.log (`Word ${word} found horizontally, returning value true.`);
      return true;
    }
  }

  // Check vertically
  //console.log (`Word ${word} not found horizontally.`);
  //console.log ("-- Checking Vertically --");

  // Get the number of rows and columns
  const rows = letters.length;
  const cols = letters[0].length;

  // Create a new empty matrix with switched rows and columns
  const result = new Array(cols).fill(null).map(() => new Array(rows).fill(null));

  // Iterate through the original letters matrix and fill the new matrix
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = letters[i][j];
    }
  }

  //create new vertical join
  const verticalJoin = result.map(ls => ls.join(''));
  //console.log ("verticalJoin : ", verticalJoin);
  for (const element of verticalJoin) {
    //console.log("current array element being checked : ", element);
    // check for word
    if (element.includes(word)) {
      //console.log (`Word ${word} found vertically, returning value true.`);
      return true;
    }
  }
  //console.log (`Word ${word} not found vertically returning value false.`);
  return false;

// Stretch check backwards
// Stretch check diagonally
};

module.exports = wordSearch;