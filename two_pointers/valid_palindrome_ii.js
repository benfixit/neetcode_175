// Q:680 - https://leetcode.com/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let left = 0, right = s.length - 1;

    let reverse = (str) => {
        return str.split("").reverse().join("");
    }

    while (left < right) {
        if (s[left] !== s[right]){
            const skipLeft = s.slice(left + 1, right + 1);
            const skipRight = s.slice(left, right);

            return (skipLeft === reverse(skipLeft) || skipRight === reverse(skipRight));
        }

        left += 1;
        right -= 1;
    }

    return true;
};