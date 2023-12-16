const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let a = 0;
  for (let i = 0; i < matrix.length; i += 1){
    const b = matrix[i];
    for (let j = 0; j < b.length; j += 1){
      a += b[j];
    }
    if (b.at(-1) === 0){
       break;
    }
  }
 return a;
}

module.exports = {
  getMatrixElementsSum
};
