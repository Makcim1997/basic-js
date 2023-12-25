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
  let maxN = 0;
  let str = String(n);
  let arrNumbers = [...str];

  for (let i = 0; i < arrNumbers.length; i++) {
    let num = Number(str.replace(str[i], ''));
    maxN < num ? maxN = num : maxN;
  }

  return maxN; 
}

module.exports = {
  deleteDigit
};
