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
function getSumOfDigits(num) {
  let strOfNum = num.toString();
  let sum = 0;
  while (strOfNum.length > 1) {
    sum = 0;
    for (let i = 0; i < strOfNum.length; i += 1) {
      sum += Number(strOfNum[i]);
    }
    strOfNum = sum.toString();
  }
  return sum;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits
};
