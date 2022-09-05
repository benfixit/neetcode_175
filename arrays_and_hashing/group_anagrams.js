// Q:49 - https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const map = {};

  for (let i = 0; i < strs.length; i++) {
    const currentStr = strs[i];

    const arr = Array(26).fill(0);

    for (let j = 0; j < currentStr.length; j++) {
      const currentChar = currentStr[j];
      const code = currentChar.charCodeAt(0) - "a".charCodeAt(0);
      arr[code] += 1;
    }

    arrKey = arr.join(",");

    if (!map.hasOwnProperty(arrKey)) {
      map[arrKey] = [];
    }

    map[arrKey].push(currentStr);
  }

  return Object.values(map);
};
