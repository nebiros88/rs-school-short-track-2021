/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const str1 = s1.split('').sort();
  const str2 = s2.split('').sort();
  const arr1 = [];
  const arr2 = [];
  function getPars(str, arr) {
    let counter = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i + 1] === str[i]) {
        counter++;
      } else {
        const temp = [str[i], counter];
        arr.push(temp);
        counter = 1;
      }
    }
  }
  function compareArrs(a, b) {
    let result = 0;
    const temp1 = (a.length > b.length) ? b : a;
    const temp2 = (a.length > b.length) ? a : b;
    temp1.forEach((el) => {
      for (let i = 0; i < temp2.length; i++) {
        if (el[0] === temp2[i][0]) {
          if (el[1] === temp2[i][1]) {
            result += el[1];
          } else if (el[1] < temp2[i][1]) {
            result += el[1];
          } else {
            result += temp2[i][1];
          }
        }
      }
    });
    return result;
  }
  getPars(str1, arr1);
  getPars(str2, arr2);
  return compareArrs(arr1, arr2);
}

module.exports = getCommonCharacterCount;
