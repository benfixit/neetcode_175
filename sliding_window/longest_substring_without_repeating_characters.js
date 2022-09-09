// Q:3 - https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longest = 0,
    start = 0,
    end = 0;
  const map = new Map();

  while (end < s.length) {
    if (!map.has(s[end])) {
      map.set(s[end], true);
    } else {
      while (map.has(s[end])) {
        map.delete(s[start]);
        start++;
      }
      map.set(s[end], true);
    }

    longest = Math.max(longest, end - start + 1);
    end++;
  }

  return longest;
};
