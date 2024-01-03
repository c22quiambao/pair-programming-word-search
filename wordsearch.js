const wordSearch = (letters, word) => {
// Check horizontally
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const element of horizontalJoin) {
    //check for word
    if (element.includes(word)) {
      return true;
    }
  }

  // Check vertically
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
  for (const element of verticalJoin) {
    // check for word
    if (element.includes(word)) {
      return true;
    }
  }
  return false;

// Stretch check backwards
// Stretch check diagonally
};

module.exports = wordSearch;