const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|'} = options;
  let result = '';
  let additionStr = '';
  if (`${addition}`) {
    for (let i = 0; i < additionRepeatTimes; i ++) {
      if (i + 1 >= additionRepeatTimes) {
        additionStr += `${addition}`;
      } else {
        additionStr += `${addition}${additionSeparator}`;
      }
    }
  }
  for (let i = 0; i < repeatTimes; i ++) {
    if (i + 1 >= repeatTimes) {
      result += `${str}${additionStr}`;
    } else {
      result += `${str}${additionStr}${separator}`;
    }
  }
  return result;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
