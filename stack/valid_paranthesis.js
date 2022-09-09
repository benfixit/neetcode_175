// Q:20 - https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let i = 0; i < s.length; i++) {
    const currentItem = s[i];
    if (!map.has(currentItem)) {
      stack.push(currentItem);
    } else {
      const lastItem = stack.pop();

      if (lastItem !== map.get(currentItem)) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
