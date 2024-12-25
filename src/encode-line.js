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
  let result = '';
  let count = 1;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        result += `${count}${str[i - 1]}`;
      } else {
        result += `${str[i - 1]}`;
      }
      count = 1;
    }
    if (i + 1 === str.length && str[i] !== str[i - 1]) {
      result += `${str[i]}`
    } else if (i + 1 === str.length) {
      result += `${count}${str[i]}`;
    }
  }
  return result;
}

module.exports = {
  encodeLine
};
