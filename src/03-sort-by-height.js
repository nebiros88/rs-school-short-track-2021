/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrSize = arr.length;
  const sortedArr = arr;
  for (let i = 0; i < arrSize; i++) {
    for (let j = 0; j < arrSize - 2; j++) {
      if (sortedArr[j] === -1) {
        while (sortedArr[j] === -1) {
          j++;
        }
      }
      let next = j + 1;
      if (sortedArr[next] === -1) {
        while (sortedArr[next] === -1) {
          next++;
        }
      }
      if (sortedArr[j] > sortedArr[next]) {
        const temp = sortedArr[j];
        sortedArr[j] = sortedArr[next];
        sortedArr[next] = temp;
      }
    }
  }
  return sortedArr;
}

module.exports = sortByHeight;
