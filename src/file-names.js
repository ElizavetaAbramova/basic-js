const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let output = [];
  for (let i = 0; i < names.length; i++) {
    if (output.includes(names[i])) {
      let count = 1;
      let newName = `${names[i]}(${count})`;
      while (output.includes(newName)) {
        count++;
        newName = `${names[i]}(${count})`;
      }
      output.push(newName);
    } else {
      output.push(names[i]);
    }
  }
  return output;
}

module.exports = {
  renameFiles
};
