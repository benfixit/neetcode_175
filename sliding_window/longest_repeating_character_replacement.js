// Q:424 - https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let longest = 0,
    start = 0,
    end = 0;

  const map = new Map();

  while (end < s.length) {
    if (!map.has(s[end])) {
      map.set(s[end], 0);
    }

    map.set(s[end], map.get(s[end]) + 1);

    let longestCh = 0;
    for ([key, value] of map.entries()) {
      longestCh = Math.max(longestCh, value);
    }

    if (end - start + 1 - longestCh > k) {
      map.set(s[start], map.get(s[start]) - 1);
      start++;
    }

    longest = Math.max(longest, end - start + 1);

    end++;
  }

  return longest;
};

console.log(characterReplacement("BABBBBA", 1));
