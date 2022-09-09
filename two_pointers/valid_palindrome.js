// Q:125 - https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    // iterate forward with left and skip characters that are not alphanumeric
    while (left < right && !isAlphanumeric(s[left])) {
      left++;
    }

    // iterate backward with right and skip characters that are not alphanumeric
    while (left < right && !isAlphanumeric(s[right])) {
      right--;
    }

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

const isAlphanumeric = (str) => {
  return /^[a-zA-Z0-9]+$/.test(str);
};
