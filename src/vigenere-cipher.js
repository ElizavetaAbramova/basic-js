const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  encrypt(string, key) {
    let strToEncrypt = string.toUpperCase();
    let keyStr = '';
    let encryptedStr = '';
    let j = 0;
    for (let i = 0; i < strToEncrypt.length; i++) {
      if (strToEncrypt.charCodeAt(i) < 65 || strToEncrypt.charCodeAt(i) > 90) {
        keyStr += strToEncrypt[i];
      } else {
        keyStr = `${keyStr}${key[j % key.length].toUpperCase()}`;
        j++;
      }
    }
    for (let i = 0; i < strToEncrypt.length; i++) {
      if (strToEncrypt.charCodeAt(i) < 65 || strToEncrypt.charCodeAt(i) > 90) {
        encryptedStr += strToEncrypt[i];
      } else {
        let offset = keyStr.charCodeAt(i) - 'A'.charCodeAt();
        let char = strToEncrypt.charCodeAt(i) + offset;
        if (char > 90) char = char - 26;
        encryptedStr += String.fromCharCode(char);
      }
    }
    return encryptedStr;
  }
  decrypt() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
