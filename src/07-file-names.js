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
  const arr = names;
  return arr.map((el, index) => {
    for (let i = 0; i < index; i++) {
      if (arr[i] === el) {
        let counter = 1;
        for (let j = i + 1; j < index; j++) {
          if (arr[j] === `${el}(${counter})`) {
            counter++;
            j = 0;
          }
        }
        arr[index] = `${el}(${counter})`;
        return `${el}(${counter})`;
      }
    }
    return `${el}`;
  });
}

module.exports = renameFiles;
