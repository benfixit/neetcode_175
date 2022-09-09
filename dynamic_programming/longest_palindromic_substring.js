/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let longest = "";

  const isPalindrome = (str) => {
    return str.split("").reverse().join("");
  };

  const dfs = (str) => {
    if (isPalindrome(str)) {
      return true;
    }

    console.log("s == ", s);

    for (let ch of s) {
      const newStr = ch + str;

      console.log("newStr == ", ch, str, s);

      if (dfs(newStr)) {
        if (str.length > longest.length) {
          longest = str;
        }
      }
    }

    return false;
  };

  dfs("");

  return longest;
};

console.log(longestPalindrome("babad"));
