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
function deleteDigit(number) {
  let numStr = number.toString();
  let result = 0;
  for (let i = 0; i < numStr.length; i++) {
    let changedStr = Number(numStr.slice(0, i) + numStr.slice(i + 1));
    if (changedStr > result) {
      result = changedStr;
    }
  }

  return result;
}

module.exports = {
  deleteDigit
};
