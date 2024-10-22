
// You should implement your task here.

module.exports = function towelSort (matrix) {
arrResults = [];

  if (!matrix) {
    return arrResults;
  }

  if (matrix.length == 0) {
    return arrResults;
  }

  for (i = 0; i < matrix.length; i++) {
    for (j = 0; j < matrix[i].length; j++) {
      if (i % 2 == 0) {
        arrResults.push(matrix[i][j]);
      } else {
        arrResults.push(matrix[i][matrix[i].length - 1 - j]);
      }

    }
  }
  return arrResults;
}
