const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('')
  let obj = {};
  let result = {};

  for (let i = 0; i < arr.length; i++) {
      let a = arr[i];

      if (obj[a] != undefined) {
          ++obj[a];
      } else {
          obj[a] = 1
      }
  }

  Object.entries(obj).forEach(([key, value]) => {
      result[key] = value
  })

  return JSON.stringify(result).replace(/[^a-zа-яё2-9\s]/gi, '')
}

module.exports = {
  encodeLine
};
