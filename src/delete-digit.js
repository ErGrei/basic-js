const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const a = String(n);
  let res = 0;

  for (let i = 0; i <a.length; i++) {
    let b = a.slice(0, i) + a.slice(i + 1);
    if (+b > res) {
      res = +b;
    }
  }

  return res;
}

module.exports = {
  deleteDigit
};
