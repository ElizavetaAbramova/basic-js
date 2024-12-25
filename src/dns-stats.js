const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNSObj = {};
  domains.forEach((domain) => {
    const array = domain.split('.').reverse();
    let dns = '';
    array.forEach((item) => {
      dns += `.${item}`;
      if (DNSObj[dns]) {
        DNSObj[dns] += 1;
      } else {
        DNSObj[dns] = 1;
      }
    })
  })
  return DNSObj;
}

module.exports = {
  getDNSStats
};
