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

  if (n <= 0) {
    return 1
  }
  
  let sum = 0;
  let result = 0

  String(n).split('').forEach((e) => sum += +e)

  if ( sum > 9) {
      String(sum).split('').forEach((e) => {
          result += +e
      })
  }

  return result
}

module.exports = {
  getSumOfDigits
};
