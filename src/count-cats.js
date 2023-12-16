const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let a = 0;
  for (let i = 0; i < matrix.length; i += 1){
    const b = matrix[i];
    for (let j = 0; j < b.length; j += 1){
      if (b[j] === '^^'){
        a += 1;
      }
    }
  }
 return a;
}

module.exports = {
  countCats
};
