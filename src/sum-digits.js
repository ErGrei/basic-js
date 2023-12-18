const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let sum = 0;
  let nam = n.toString();
  toSum (nam);
  function toSum (number) {
    for (let i = 0; i < number.length; i++)
    sum += +number[i];
  }
  if (sum >= 10) {
    nam = sum.toString();
    sum = 0;
    toSum (nam);
  }
  return sum;
}

module.exports = {
  getSumOfDigits
};
