// Q:242 - https://leetcode.com/problems/valid-anagram/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = {},
    tMap = {};

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (!sMap.hasOwnProperty(currentChar)) {
      sMap[currentChar] = 0;
    }

    sMap[currentChar] += 1;
  }

  for (let i = 0; i < t.length; i++) {
    const currentChar = t[i];
    if (!tMap.hasOwnProperty(currentChar)) {
      tMap[currentChar] = 0;
    }

    tMap[currentChar] += 1;
  }

  for (let key in tMap) {
    if (!sMap.hasOwnProperty(key) || tMap[key] !== sMap[key]) {
      return false;
    }
  }

  return true;
};
